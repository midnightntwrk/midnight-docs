// This file is part of midnight-docs.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// A little DApp to welcome new Midnight developers.

// ----------------------------------------------------------------------
// Set the following to true to deploy a fresh contract for this DApp.
// Set it to false to join an existing contract.
// If you set it to true, you can capture the contract address and
// transaction ID from the output and edit the join code to use that
// information, so that new users can join the deployed contract.

const deployNew = false;

// ----------------------------------------------------------------------
// Where to find Midnight Devnet0.

const config = {
    nodeUrl: 'ws://3.69.239.75:5205',
    faucetUrl: 'http://3.69.239.75:5300'
}

// ----------------------------------------------------------------------
// Imports

import * as path from 'node:path';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { firstValueFrom, map, filter} from 'rxjs';
import { DappBackend, InMemoryDappBackend, LoggerImpl, LogLevels } from '@midnight/dapp-backend';
import { Contract } from '@midnight/dapp-backend';
import { ZSwapLocalState, AbcirdValue, ContractState } from '@midnight-ntwrk/ledger';
import { ContractAddress, TransactionIdentifier } from '@midnight-ntwrk/ledger';
import { Wallet, FilterService } from '@midnight/wallet-api';
import { WalletBuilder, Resource } from '@midnight/wallet';
import { FaucetClient } from '@midnight/faucet';
import { ContractBuilder, TransitionFunctions } from '../gen/welcome/contract';
import { PrivateOracle, PrivateQueryDefinitions, PrivateOracleInit } from '../gen/welcome/private';

// ----------------------------------------------------------------------
// A little helper to make it easier to print transaction IDs and
// contract addresses.

interface Serializable {
    serialize(): Buffer;
}

function toHexString(obj: Serializable) {
    return obj.serialize().toString('hex');
}

// ----------------------------------------------------------------------
// We need some DUST to submit transactions.
// Devnet0 has a faucet dripping DUST for that purpose.
// Make a wallet with some DUST in it, populated by the faucet.
// (The Resource interface in the return type says that a wallet
// can be closed later.)

async function newWalletWithDust(): Promise<Wallet & Resource> {
    const walletInitialState = new ZSwapLocalState(); // represents native token balance
    const faucetClient = FaucetClient.create(config.faucetUrl);
    const response = await faucetClient.requestTokens(walletInitialState.coinPublicKey);

    console.log(`
  Request to faucet succeeded.
  Awaiting ${response.coinInfo.value} DST
    in transaction with id ${toHexString(response.transactionIdentifier)}`);

    // Configure wallet to watch for transactions with my coins:
    walletInitialState.watchFor(response.coinInfo);

    // Make me a wallet...
    const wallet = await WalletBuilder.connect(
        config.nodeUrl, // connected to the network...
        walletInitialState.serialize().toString('base64'), // with that config.
        'warn'
    )
    wallet.start(); // Really start reading transactions and processing them.

    // Wait for the coin from the faucet to appear.
    await firstValueFrom(wallet.balance().pipe(
        filter(balance => balance === response.coinInfo.value)));

    return wallet;
}

// ----------------------------------------------------------------------
// The following uses code in WalletBuilder, but it's not
// really about wallets.  We just want a "filter service"
// (also known as a "Midnight Indexer") to read blockchain state.
// (The Resource interface in the return type says that a filter service
// can be closed later.)

async function newConnectedFilterService(): Promise<FilterService & Resource> {
    // The initial state for our wallet was a ZSwapLocalState,
    // which tracks a token balance.
    // For our filter service, we start with a truly empty state.
    const initialState = WalletBuilder.generateInitialState();
    const filterService =
          await WalletBuilder.connect(config.nodeUrl, initialState, 'warn');
    // If we wanted to see only a subset of the transactions,
    // we would create a filter and install it with a call
    // like the following before starting:
    //  filterService.installTxFilter(filter);
    filterService.start();

    return filterService;
}

// ----------------------------------------------------------------------
// A "DApp backend" holds the public/private state for a contract.
// Future versions will support multiple contracts (all of an app's
// contracts) in a single backend.  For now, the recommendation is
// to use a separate filterService+dappBackend per contract.

async function runWithDappBackend(main: (b: DappBackend) => Promise<void>) {
    const wallet = await newWalletWithDust();
    const filterService = await newConnectedFilterService();
    
    // "InMemory" because it does not persist private state beyond the life of this app:
    const dappBackend = new InMemoryDappBackend(
        wallet,
        filterService,
        [],
        new LoggerImpl(LogLevels.warn));

    // The main work of the DApp:
    await main(dappBackend);

    // Clean up, so that the application exits.
    await filterService.close();
    await wallet.close();
}

// ----------------------------------------------------------------------
// Deploying or joining a contract always requires an object that
// encapsulates the private state and the functions that manipulate
// it.  They use this to create a "private oracle," which can work
// with the private state without revealing it to the circuits.
// The Welcome contract has no private state, though, so the
// oracle initializer is boring.

function newInitialPrivateState(): PrivateOracleInit<undefined> {
    return {
        privateState: undefined,
        privateQueryDefinitions: {}
    };
}

// ----------------------------------------------------------------------
// Where to find the proving keys, verifying keys, etc. for this contract:
const projectRoot =
    path.resolve(new URL(import.meta.url).pathname, '..', '..', 'gen', 'welcome');

// ----------------------------------------------------------------------
// Deploy a brand new Welcome contract and print out its address and
// initial transaction.
async function doDeploy(backend: DappBackend) {
    console.log('Deploying a new Welcome contract...');
    
    const pstate = newInitialPrivateState();
    const deployResult =
          await ContractBuilder.deploy(projectRoot, [], pstate, backend);
    
    console.log(`
    Contract deployed:
      contract address: ${toHexString(deployResult.address)}
      transaction id: ${toHexString(deployResult.txId)}`);
}

// ----------------------------------------------------------------------
// Join an existing Welcome contract, using the address and initial
// transaction ID captured from a deploy.
async function doJoinAndWelcome(backend: DappBackend) {
    const addr = 'b018c51ab7867fbf9aa3242f5757516d55c3cc8f0e5b2a41ec298ecc7c2fd513';
    const txid = '8f67da1d4758264e9bcce748756eee55b6d2ad993df21f2b1a5b6a5c68cf4eb3';

    console.log('Joining an existing Welcome contract...');
    
    const contractAddress = ContractAddress.deserialize(Buffer.from(addr, 'hex'));
    const startAtTxId = TransactionIdentifier.deserialize(Buffer.from(txid, 'hex'));
    const pstate = newInitialPrivateState();
    const joinResult =
          await ContractBuilder.join(
              projectRoot,
              contractAddress,
              startAtTxId,
              pstate,
              backend);

    console.log(`
    Contract joined:
      at transaction id: ${toHexString(joinResult.completeTxId)}`);
    
    // ----------------------------------------------------------------------
    // Now we can add the current user to the set of welcomed users.
    // Because it's a set, the same user can run this code
    // over and over without growing the list of users.

    const rl = readline.createInterface({input, output, terminal: true});
    const name = await rl.question('What is your GitHub user name? ');
    rl.close();
    console.log(`Calling welcome circuit on contract, to welcome user ${name}...`);
    const opaqueName = AbcirdValue.opaque(Buffer.from(name, 'utf8'));
    const callResult = await joinResult.contract.welcome(opaqueName);
    console.log(`Welcome transaction submitted,
      transaction id: ${toHexString(callResult.txId)}`);

    // ----------------------------------------------------------------------
    // backend.ledgerState$ is a stream of ledger states
    // associated with the contract(s) deployed/joined through
    // that backend.
    // LedgerState is (roughly) a map from contract address to contract state.
    // Thus, the following code gets the state of our contract
    // and extracts the "alreadyWelcomed" field's value from it.
    const welcomedSet = await firstValueFrom(backend.ledgerState$.pipe(
        map((ledgerState) => ledgerState.index(contractAddress)), // state of this contract
        filter((state: ContractState | null): state is ContractState => state !== null), // skip nulls
        map(state => state.getFieldValue('alreadyWelcomed')?.asSet())));

    console.log(`\nWelcome to current Devnet0 tutorial users:`);
    if (welcomedSet !== undefined && welcomedSet !== null) {
        for (let user of welcomedSet.values()) {
            console.log(`  ${user.asOpaque()}`);
        }
    }
}

// ----------------------------------------------------------------------
// Run the program!

if (deployNew) {
    await runWithDappBackend(doDeploy);
} else {
    await runWithDappBackend(doJoinAndWelcome);
}

