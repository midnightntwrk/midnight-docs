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

// Implementing a simple single-post-at-a-time bulletin board
// as a Midnight DApp.
// This version has a classic 1984 text-prompt UI.
// The creation of a beautiful GUI is left as an exercise for the reader.

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
import { ContractBuilder, TransitionFunctions } from '../gen/bboard/contract';
import { PrivateOracle, PrivateQueryDefinitions, PrivateOracleInit } from '../gen/bboard/private';

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
// We need some DuST to submit transactions.
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
// The only hidden state needed by the Bulletin Board contract is
// the user's secret key.  Some of the library code and
// compiler-generated code is parameterized by the type of our
// private state, so we define an interface for it.

interface PrivateState {
    // EXERCISE 1: FILL IN PRIVATE STATE
}

// ----------------------------------------------------------------------
// Deploying or joining a contract always requires an object that
// encapsulates the private state and the functions that manipulate
// it.  They use this to create a "private oracle," which can work
// with the private state without revealing it to the circuits.

function newInitialPrivateState(): PrivateOracleInit<PrivateState> {
    // EXERCISE 2: DEFINE myPrivateState and myPrivateQueryDefinitions

    return {
        privateState: myPrivateState,
        privateQueryDefinitions: myPrivateQueryDefinitions
    };
}

// ----------------------------------------------------------------------
// Where to find the proving keys, verifying keys, etc. for this contract:
const projectRoot =
    path.resolve(new URL(import.meta.url).pathname, '..', '..', 'gen', 'bboard');

//----------------------------------------------------------------------
// The next four functions invoke the primary contract operations
// for this contract: deploy and join (as for any contract) and
// the public circuits post and take_down.

async function deploy(backend: DappBackend): Promise<Contract<TransitionFunctions>> {
    console.log('Deploying a new bulletin board contract...');

    // EXERCISE 3: DEPLOY A BULLETIN BOARD CONTRACT (WITH RESULT AS deployResult)
    
    console.log(`Contract deployed:
      contract address: ${toHexString(deployResult.address)}
      transaction id: ${toHexString(deployResult.txId)}`);
    return deployResult.contract;
}

async function join(backend: DappBackend,
                    rl: readline.Interface
                   ): Promise<Contract<TransitionFunctions>> {
    const addr = await rl.question('What is the contract address (in hex)? ');
    const txid = await rl.question('Starting at what transaction (in hex)? ');

    console.log('Joining an existing bulletin board contract...');
    
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

    console.log(`Contract joined:
      at transaction id: ${toHexString(joinResult.completeTxId)}`);
    return joinResult.contract;
}

async function doPost(contract: Contract<TransitionFunctions>, rl: readline.Interface) {
    const msg = await rl.question('What message do you want to post? ');
    
    console.log(`Calling post circuit on contract, to post message: '${msg}'`);
    // EXERCISE 4: INVOKE THE POST CIRCUIT TO POST A MESSAGE, HANDLE ERRORS
}

async function doTakeDown(contract: Contract<TransitionFunctions>) {
    console.log(`Calling take_down circuit on contract, to remove message`);
    // EXERCISE 5: INVOKE THE TAKE_DOWN CIRCUIT, HANDLE ERRORS
}

//----------------------------------------------------------------------
// The next two functions implement our text-based menu prompts,
// allowing the user to decide what to do next.
// The program always starts by deploying a new contract
// or joining an existing one.  After that, the user can
// repeatedly post or take down messages.

async function deployOrJoin(backend: DappBackend,
                            rl: readline.Interface
                           ): Promise<Contract<TransitionFunctions>> {
    while (true) {
        console.log('You can do one of the following:');
        console.log(' 1. Create a new bulletin board');
        console.log(' 2. Use an existing bulletin board');
        const choice = await rl.question('What would you like to do? ');
        switch (choice) {
        case '1':
            return deploy(backend);
        case '2':
            return join(backend, rl);
        default:
            console.log(`Invalid choice: ${choice}`);
        }
    }
}

async function mainLoop(backend: DappBackend) {
    const rl = readline.createInterface({input, output, terminal: true});
    const contract = await deployOrJoin(backend, rl);
    
    while (true) {
        console.log('You can do one of the following:');
        console.log(' 1. Post a message');
        console.log(' 2. Take down your message');
        console.log(' 3. Exit');
        const choice = await rl.question('What would you like to do? ');
        switch (choice) {
        case '1':
            await doPost(contract, rl);
            break;
        case '2':
            await doTakeDown(contract);
            break;
        case '3':
            await rl.close();
            return;
        default:
            console.log(`Invalid choice: ${choice}`);
        }
    }
}

// ----------------------------------------------------------------------
// Run the program!

await runWithDappBackend(mainLoop);
