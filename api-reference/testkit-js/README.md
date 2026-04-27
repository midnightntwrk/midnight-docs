# Testkit JS API

**@midnight-ntwrk/testkit-js v4.0.2**

***

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
6. [Containers Configuration](#8-containers-configuration)

---

## Installation
Before using the testing library, ensure you have the following prerequisites:
1. Node.js and yarn installed
2. Docker Desktop (optional for local dockerized tests)
3. Midnight.JS project set up

Install the testing library by running the following command in your terminal:
```
yarn add -D @midnight-ntwrk/testkit-js
```

## Getting Started
To use the testing library, create a new file called `midnight.test.js` in the `__tests__` directory of your project. In this file, import the necessary dependencies:
```typescript
import { getTestEnvironment } from '@midnight-ntwrk/testkit-js';

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
   - qanet
   - preview
   - preprod
   - env-var-remote

If **MN_TEST_ENVIRONMENT** is not set, the default value will be `undeployed`.
If **MN_TEST_ENVIRONMENT** is set to `undeployed`, the testing environment will be deployed locally using Docker.
If **MN_TEST_ENVIRONMENT** is set to `qanet`, `preview`, `preprod`, or `env-var-remote` the testing environment will be the corresponding live network, with proof server setup using predefined NETWORK_ID.
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
MN_TEST_ENVIRONMENT='preview'; yarn test
```

This allows you to easily switch between predefined environments like `qanet`, `preview`, `preprod`, and others.
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
// Example: Start a proof server with network ID = preview and ID = 123
const proofServer = await DynamicProofServerContainer.start(logger, '123', 'preview');

//stop the proof server
await proofServer.stop();
```

This shows how to integrate with and customize the proof server for testing.

---

### 7. Customized test environments

Library is provided with set of predefined environment configurations i.e.:

- LocalTestEnvironment
- PreviewTestEnvironment
- PreprodTestEnvironment

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

### 8. Containers Configuration

The testkit uses a centralized `ContainersConfiguration` object that controls proof server, standalone containers, and logging. Two predefined configurations are available:

- `defaultContainersConfiguration` — uses `proof-server.yml` and `compose.yml`
- `latestContainersConfiguration` — uses `proof-server-latest.yml` and `compose-latest.yml`

You can read and modify the active configuration at any time using `getContainersConfiguration()` and `setContainersConfiguration()`.

#### Configuration structure

```typescript
interface ContainersConfiguration {
  proofServer: {
    path: string;        // Directory with the compose file (default: cwd)
    fileName: string;    // Compose file name (default: 'proof-server.yml')
    container: {
      name: string;      // Container name (default: 'proof-server')
      port: number;      // Exposed port (default: 6300)
      waitStrategy: WaitStrategy;
    };
  };
  standalone: {
    path: string;        // Directory with the compose file (default: cwd)
    fileName: string;    // Compose file name (default: 'compose.yml')
    container: {
      proofServer: { name, port, waitStrategy };  // default: 'proof-server', 6300
      node:        { name, port, waitStrategy };  // default: 'node', 9944
      indexer:     { name, port, waitStrategy };  // default: 'indexer', 8088
    };
  };
  log: {
    path: string;        // Log directory (default: '<cwd>/logs/tests/')
    fileName: string;    // Log file name (default: 'tests_<timestamp>.log')
    level: string;       // Log level (default: 'info')
  };
}
```

#### Proof server configuration

Controls the proof server container used in both standalone and remote environments.

```typescript
import {
  defaultContainersConfiguration,
  setContainersConfiguration
} from '@midnight-ntwrk/testkit-js';

setContainersConfiguration({
  ...defaultContainersConfiguration,
  proofServer: {
    ...defaultContainersConfiguration.proofServer,
    fileName: 'my-proof-server.yml',
    container: {
      ...defaultContainersConfiguration.proofServer.container,
      port: 7300
    }
  }
});
```

#### Standalone containers configuration

Controls the full local environment (node, indexer, proof server) started via Docker Compose.

```typescript
import { Wait } from 'testcontainers';
import {
  defaultContainersConfiguration,
  setContainersConfiguration
} from '@midnight-ntwrk/testkit-js';

setContainersConfiguration({
  ...defaultContainersConfiguration,
  standalone: {
    ...defaultContainersConfiguration.standalone,
    fileName: 'my-compose.yml',
    container: {
      ...defaultContainersConfiguration.standalone.container,
      node: {
        ...defaultContainersConfiguration.standalone.container.node,
        port: 9955,
        waitStrategy: Wait.forListeningPorts().withStartupTimeout(5 * 60_000)
      }
    }
  }
});
```

#### Logging configuration

The testkit uses [pino](https://github.com/pinojs/pino) with pretty-printing. Logs are written both to the console and to a file.

**Default values:**
- **Log level**: `info`
- **Log file**: `tests_<timestamp>.log` (e.g. `tests_2026-03-10T12_00_00.000Z.log`)
- **Log directory**: `<cwd>/logs/tests/`

**Available log levels** (from least to most verbose): `fatal`, `error`, `warn`, `info`, `debug`, `trace`

```typescript
import {
  defaultContainersConfiguration,
  setContainersConfiguration
} from '@midnight-ntwrk/testkit-js';

setContainersConfiguration({
  ...defaultContainersConfiguration,
  log: {
    ...defaultContainersConfiguration.log,
    level: 'debug',
    path: '/custom/log/directory',
    fileName: 'my-tests.log'
  }
});
```

**Creating custom loggers:**

```typescript
import { createLogger, createDefaultTestLogger } from '@midnight-ntwrk/testkit-js';

// Logger with default configuration
const logger = createDefaultTestLogger();

// Logger writing to a specific file (within the configured log directory)
const customLogger = createLogger('my-custom-test.log');

// Logger writing to an absolute path
const absoluteLogger = createLogger('/tmp/my-test.log');
```

#### Using the latest configuration

To use the latest container images instead of the default pinned versions:

```typescript
import { latestContainersConfiguration, setContainersConfiguration } from '@midnight-ntwrk/testkit-js';

setContainersConfiguration(latestContainersConfiguration);
```

---

### 9. System health check before tests

For the remote test environments (preview, preprod, ...) simple health check is performed for each of the components to check their state before test.
