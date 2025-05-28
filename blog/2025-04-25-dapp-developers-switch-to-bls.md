---
slug: dapp-developers-bls-upgrade
title: Impact on DApp Developers of the BLS Upgrade
authors: claude
tags: [bls, dapp, wallet]
---

The Midnight testnet is undergoing an [upgrade](https://midnight.network/blog/upcoming-testnet-02-upgrade-all-you-need-to-know). As part of this upgrade, the proving system will change from Pluto-Eris to BLS12-381.

# Developer requirements
To ensure compatibility and functionality, DApp developers will need to complete the following steps:

- [Developer requirements](#developer-requirements)
  - [1- Installing the Lace wallet](#1--installing-the-lace-wallet)
  - [2- Downloading the proof server](#2--downloading-the-proof-server)
  - [3- Updating the Compact compiler and redeploying the smart contracts](#3--updating-the-compact-compiler-and-redeploying-the-smart-contracts)

## 1- Installing the Lace wallet
The latest version of the Lace wallet (2.0.0) is available [here](https://docs.midnight.network/relnotes/lace). It supports the new Bech32m address format.  

1. Download and unzip the ZIP file.
2. Open your Chrome or Brave browser.
3. Navigate to the **Extensions** panel.
4. Click **Load unpacked** .
5. Select the folder you just unzipped.
6. After it's installed, you can either create a new wallet, or restore a previous wallet using your saved seed phrase.

Once it is done, you should see the new address format that begins with “mn_shield-addr_test…”

## 2- Downloading the proof server
You can download the latest version of the proof server [here](https://docs.midnight.network/relnotes/proof-server).
You can also install it via the command line: 
```
docker pull midnightnetwork/proof-server:latest
```  

Once downloaded, you can start the proof server with this command:
```
docker run -p 6300:6300 midnightnetwork/proof-server -- 'midnight-proof-server --network testnet'
```  

You can find more details in the [documentation](https://docs.midnight.network/develop/tutorial/using/proof-server).

## 3- Updating the Compact compiler and redeploying the smart contracts
Smart contracts must be redeployed to match the new proof system and the zero-knowledge proofs it creates.  

As part of this upgrade, the compiler, Compact runtime, and on-chain runtime are all changing. Developers will need to recompile their contracts using the new BLS-compatible compiler, version 0.23.0, which will be released alongside the other upgraded components.  

After recompiling, developers must rebuild their DApps to use the newly compiled contracts. Additionally, the contracts will require fresh prover and verifier keys for the exported circuits. It will not be sufficient to redeploy with the existing keys; recompilation is necessary to generate the new keys.  

You can use the same method to deploy contracts as you are used to, or you can take a look [at this example](https://github.com/midnightntwrk/example-counter/blob/1babbcb377317ba705c26545a6808deea7a39975/counter-cli/src/api.ts#L90) and the deploy function to deploy smart contracts to the Midnight testnet.  

Be sure to use the [latest version of MidnightJS](https://docs.midnight.network/relnotes/midnight-js) to deploy your contracts, as it is the one that supports Bech32m addresses.
