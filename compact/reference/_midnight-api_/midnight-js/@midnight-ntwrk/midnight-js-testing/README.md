[**Midnight.js API Reference v2.0.2**](../../README.md)

***

[Midnight.js API Reference](../../packages.md) / @midnight-ntwrk/midnight-js-testing

# What is this?
A comprehensive testing solution for your Midnight.JS applications, providing seamless integration with various test environments.

This package was created for the [Midnight network](https://midnight.network). 

Please visit the [Midnight Developer Hub](https://midnight.network/developer-hub) to learn more.

# Use only in Midnight test environments
Image exclusively for Midnight test environments use.  

# Agree to Terms
By downloading and using this image, you agree to [Midnight’s Terms and Conditions](https://midnight.network/static/terms.pdf), which includes the [Privacy Policy](https://midnight.network/static/privacy-policy.pdf).

# License
The software provided herein is licensed under the [Apache License V2.0](http://www.apache.org/licenses/LICENSE-2.0).

## Table of Contents
1. [Installation](#installation)
2. [Getting Started](#getting-started)
3. [Features](#Features)
4. [Limitations](#Limitations)
5. [Examples of Usage](#Examples-of-Usage)

---

## Installation
Before using the testing library, ensure you have the following prerequisites:
1. Node.js and yarn installed
2. Docker Desktop (optional for local dockerized tests)
3. Midnight.JS project set up

Install the testing library by running the following command in your terminal:
```
yarn add -D @midnight-ntwrk/midnight-js-testing
```

## Getting Started
To use the testing library, create a new file called `midnight.test.js` in the `__tests__` directory of your project. In this file, import the necessary dependencies:
```typescript
import { getTestEnvironment } from '@midnight-ntwrk/midnight-js-testing';

beforeAll(async () => {
  testEnvironment = getTestEnvironment(logger);
  environmentConfiguration = await testEnvironment.start();
  walletProvider = await testEnvironment.getMidnightWalletProvider();
});

afterAll(async () => {
  await testEnvironment.shutdown();
});
```

---

## Features

Set of functions that simplify testing of DApps in Midnight

- [x] Standard Dockerized environment setup - both live and local
- [x] Predefined Midnight environments configuration 
- [x] Proof server control
- [x] Wallets management
- [x] Fund wallets
- [x] Check system health

---

## Environment variables

### Environment selection:
- MN_TEST_ENVIRONMENT controls the environment to be used for testing. It can take one of these values:
   - undeployed
   - devnet
   - testnet
   - env-var-remote

If **MN_TEST_ENVIRONMENT** is not set, the default value will be `undeployed`.
If **MN_TEST_ENVIRONMENT** is set to `undeployed`, the testing environment will be deployed locally using Docker.
If **MN_TEST_ENVIRONMENT** is set to `devnet`,`testnet, env-var-remote` the testing environment will the corresponding live network, with proof server setup using predefined NETWORK_ID.
If **MN_TEST_ENVIRONMENT** is set to `env-var-remote`, below environment variables must be set:
  - *MN_TEST_NETWORK_ID* - Proof server NETWORK_ID
  - *MN_TEST_INDEXER* - Indexer URL
  - *MN_TEST_INDEXER_WS* - Indexer WebSocket URL
  - *MN_TEST_NODE* - Node URL
  - *MN_TEST_FAUCET* - Faucet URL

### Wallet setup:
- MN_TEST_WALLET_SEED can be used to set a specific seed phrase for the wallet. If not set, a random seed phrase will be used.

---

## Limitations

- Localnet wallets limit count is 4

---

## Examples of Usage

### 1. Selecting Different Environments

You can control the test environment using the `MN_TEST_ENVIRONMENT` environment variable. Here's how you can set it:

```typescript
const testEnvironment = getTestEnvironment(logger);
environmentConfiguration = await testEnvironment.start();
```

```shell
# Example: Set the environment variable before initializing the test environment
MN_TEST_ENVIRONMENT='devnet'; yarn test
```

This allows you to easily switch between predefined environments like `devnet`, `testnet`, and others.
Default (undefined) value is `undeployed` which will deploy the testing environment locally using Docker.

---

### 2. Creating and Managing Wallets

Here's an example of creating wallets in your test environment:

```typescript
// Example: Create multiple wallets in a test environment
const testEnvironment = getTestEnvironment(logger);
await testEnvironment.start();

// Create 2 wallets
const wallets = await testEnvironment.startMidnightWalletProviders(2);

// Verify wallet properties
expect(wallets).toHaveLength(2);
wallets.forEach(async (wallet) => {
  expect(wallet.coinPublicKey).not.toBeUndefined();
});

// Shutdown the environment after testing
await testEnvironment.shutdown();
```

This demonstrates how to create wallets and verify their properties, such as the `coinPublicKey`.

---

### 3. Setting Wallet Seeds

If you need to use specific wallet seeds for testing, you can do the following:

```typescript
// Example: Create a wallet with a predefined seed phrase
const wallet = await testEnvironment.getMidnightWalletProvider();

expect(wallet.coinPublicKey).not.toBeUndefined();
```

```shell
# Example: Set the environment variable before initializing the test environment
MN_TEST_WALLET_SEED='00000000000000000000000000000042'; yarn test
```

This allows you to test specific scenarios using known wallet seeds.

---

### 4. Handling Environment Configuration

You can also customize the test environment configuration by modifying the `defaultContainersConfiguration` object:

```typescript
import {
  defaultContainersConfiguration,
  getContainersConfiguration,
  setContainersConfiguration
} from '../configuration';

// Example: Modify default environment configuration before starting
const config: ContainersConfiguration = {
  ...defaultContainersConfiguration,
  proofServer: {
    ...defaultContainersConfiguration.proofServer,
    fileName: 'proof-server.yml'
  }
};
setContainersConfiguration(config);
```

This gives developers flexibility in configuring the test environment according to their needs.

---

### 5. Error Handling

Here's an example of handling errors when setting up wallets:

```typescript
// Example: Test for maximum wallet limit exceeded
process.env.MN_TEST_ENVIRONMENT = undefined; // Use local environment
const testEnvironment = getTestEnvironment(logger);
await testEnvironment.start();

try {
  await testEnvironment.startMidnightWalletProviders(5); // Assuming max is 4
} catch (error) {
  expect(error.message).toContain('Maximum supported number of wallets for this environment reached');
}

await testEnvironment.shutdown();
```

This demonstrates how to handle cases where the wallet limit is exceeded.

---

### 6. Advanced Usage with Proof Server

Here's an example of integrating with the proof server:

```typescript
// Example: Start a proof server with networkd ID = testnet and ID = 123
const proofServer = await DynamicProofServerContainer.start(logger, '123', 'testnet');

//stop the proof server
await proofServer.stop();
```

This shows how to integrate with and customize the proof server for testing.

---

### 7. Customized test environments

Library is provided with set of predefined environment configurations i.e.:

- LocalTestEnvironment 
- Testnet2TestEnvironment

By using `getTestEnvironment(logger);` based on environment variable MN_TEST_ENVIRONMENT test environment configuration is provided.
However, you can either create your own class defining the environment endpoints or use below enviroment variables.

Here's an example of fully customized endpoints of the test environment, that you can provide using environment variables:

```shell
MN_TEST_ENVIRONMENT="env-var-remote" \
MN_TEST_NETWORK_ID="undeployed" \
MN_TEST_INDEXER="http://localhost:3085/api/" \
MN_TEST_INDEXER_WS="ws://localhost:3085/ws/" \
MN_TEST_NODE="http://localhost:3086" \
yarn test

```

---

### 8. System health check before tests

For the remote test environemnts (testnet-02, ...) simple health check is performed for each of the components to check their state before test.

## Classes

- [DevnetTestEnvironment](classes/DevnetTestEnvironment.md)
- [DynamicProofServerContainer](classes/DynamicProofServerContainer.md)
- [EnvVarRemoteTestEnvironment](classes/EnvVarRemoteTestEnvironment.md)
- [FaucetClient](classes/FaucetClient.md)
- [GzipFile](classes/GzipFile.md)
- [IndexerClient](classes/IndexerClient.md)
- [LocalTestConfiguration](classes/LocalTestConfiguration.md)
- [LocalTestEnvironment](classes/LocalTestEnvironment.md)
- [MidnightWalletProvider](classes/MidnightWalletProvider.md)
- [NodeClient](classes/NodeClient.md)
- [ProofServerClient](classes/ProofServerClient.md)
- [QanetTestEnvironment](classes/QanetTestEnvironment.md)
- [RemoteTestEnvironment](classes/RemoteTestEnvironment.md)
- [StaticProofServerContainer](classes/StaticProofServerContainer.md)
- [TestEnvironment](classes/TestEnvironment.md)
- [Testnet2TestEnvironment](classes/Testnet2TestEnvironment.md)
- [TestnetTestEnvironment](classes/TestnetTestEnvironment.md)
- [WalletFactory](classes/WalletFactory.md)
- [WalletSaveStateProvider](classes/WalletSaveStateProvider.md)

## Interfaces

- [ContainerEndpoints](interfaces/ContainerEndpoints.md)
- [ContainersConfiguration](interfaces/ContainersConfiguration.md)
- [ContractConfiguration](interfaces/ContractConfiguration.md)
- [EnvironmentConfiguration](interfaces/EnvironmentConfiguration.md)
- [LogConfiguration](interfaces/LogConfiguration.md)
- [ProofServerContainer](interfaces/ProofServerContainer.md)
- [ProofServerContainerConfiguration](interfaces/ProofServerContainerConfiguration.md)
- [StandaloneContainerNames](interfaces/StandaloneContainerNames.md)
- [StandaloneContainersConfiguration](interfaces/StandaloneContainersConfiguration.md)

## Type Aliases

- [ComponentPortsConfiguration](type-aliases/ComponentPortsConfiguration.md)
- [MidnightWallet](type-aliases/MidnightWallet.md)
- [SerializedWalletState](type-aliases/SerializedWalletState.md)
- [TxOutput](type-aliases/TxOutput.md)

## Variables

- [DEFAULT\_WALLET\_LOG\_LEVEL](variables/DEFAULT_WALLET_LOG_LEVEL.md)
- [DEFAULT\_WALLET\_STATE\_DIRECTORY](variables/DEFAULT_WALLET_STATE_DIRECTORY.md)
- [defaultContainersConfiguration](variables/defaultContainersConfiguration.md)
- [latestContainersConfiguration](variables/latestContainersConfiguration.md)
- [logger](variables/logger.md)
- [MINUTE](variables/MINUTE.md)

## Functions

- [createDefaultTestLogger](functions/createDefaultTestLogger.md)
- [createLogger](functions/createLogger.md)
- [createOutputs](functions/createOutputs.md)
- [delay](functions/delay.md)
- [expectFoundAndDeployedStatesEqual](functions/expectFoundAndDeployedStatesEqual.md)
- [expectFoundAndDeployedTxDataEqual](functions/expectFoundAndDeployedTxDataEqual.md)
- [expectFoundAndDeployedTxPrivateDataEqual](functions/expectFoundAndDeployedTxPrivateDataEqual.md)
- [expectFoundAndDeployedTxPublicDataEqual](functions/expectFoundAndDeployedTxPublicDataEqual.md)
- [expectStatesEqual](functions/expectStatesEqual.md)
- [expectSuccessfulCallTx](functions/expectSuccessfulCallTx.md)
- [expectSuccessfulDeployTx](functions/expectSuccessfulDeployTx.md)
- [expectSuccessfulTxData](functions/expectSuccessfulTxData.md)
- [extractHostnameAndPort](functions/extractHostnameAndPort.md)
- [getContainersConfiguration](functions/getContainersConfiguration.md)
- [getInitialState](functions/getInitialState.md)
- [getTestEnvironment](functions/getTestEnvironment.md)
- [getWalletStateFilename](functions/getWalletStateFilename.md)
- [initializeMidnightProviders](functions/initializeMidnightProviders.md)
- [inMemoryPrivateStateProvider](functions/inMemoryPrivateStateProvider.md)
- [normalizeWalletState](functions/normalizeWalletState.md)
- [sendTransactionToAddress](functions/sendTransactionToAddress.md)
- [sendTransactionToWallet](functions/sendTransactionToWallet.md)
- [setContainersConfiguration](functions/setContainersConfiguration.md)
- [stateValueEqual](functions/stateValueEqual.md)
- [syncWallet](functions/syncWallet.md)
- [txsEqual](functions/txsEqual.md)
- [waitForFinalizedBalance](functions/waitForFinalizedBalance.md)
- [waitForFullSync](functions/waitForFullSync.md)
- [waitForFunds](functions/waitForFunds.md)
- [waitForPending](functions/waitForPending.md)
- [waitForSyncProgressDefined](functions/waitForSyncProgressDefined.md)
- [waitForTxInHistory](functions/waitForTxInHistory.md)
- [walletStateWithoutHistoryAndCoins](functions/walletStateWithoutHistoryAndCoins.md)
