# DApp connector API

**@midnight-ntwrk/dapp-connector-api v3.0.0**

***

# Midnight DApp connector API

This API provides a comprehensive interface for the DApp connector operations, defining the structure of the wallet state it exposes, the methods for interacting with it, and the types and variables used within.

## Installation

The Midnight DApp connector API is available as an NPM package with the namespace `@midnight-ntwrk/dapp-connector-api`. It can be installed using any node package manager, such as Yarn. To install the package using Yarn, execute the following command:

`yarn add @midnight-ntwrk/dapp-connector-api`

## Package usage

The package provides the type declarations that are documented in the [documentation](interfaces/DAppConnectorAPI.md) of this package.

The DApp connector API should be exposed through the global variable as follows:

`window.midnight.{walletName}`

## Available methods

| Name | Description |
|---|---|
| **apiVersion** | Provides a semver string version of the DApp connector API  |
| **enable** | Returns a promise with the [DAppConnectorWalletAPI](interfaces/DAppConnectorWalletAPI.md) or error |
| **isEnabled** | Returns a promise with a boolean showing whether the DApp is authorized to access the API or not |
| **name** | The name of the wallet that implements the API |
| **serviceUriConfig** | Returns a promise with [ServiceUriConfig](interfaces/ServiceUriConfig.md) or error if the DApp is not authorized. |

## API usage

## Authorizing a DApp

To authorize a DApp, call the `enable()` method and wait for the user to respond to the request.

```ts
try {
  const api = await window.midnight.{walletName}.enable();

  // api is available here
} catch (error) {
  console.log('an error occurred', error);
}
```

## Checking if the DApp is authorized

To check if the DApp is authorized, use the `isEnabled()` method as follows:

```ts
try {
  const isEnabled = await window.midnight.{walletName}.isEnabled();
} catch (error) {
  console.log('an error occurred', error);
}
```

## Getting information about the DApp connector API

### Name
To get the name of the wallet, use the `name` property in the implemented DApp connector API:

```ts
const name = window.midnight.{walletName}.name;

console.log('Wallet name', name);
```

### API version
To get the API version, use the `apiVersion` property as follows:

```ts
const apiVersion = window.midnight.{walletName}.apiVersion;

console.log('API version', apiVersion);
```

### Getting the service URI config

Midnight wallet users can configure the node, indexer, and proving server URIs in the wallet settings. To enable DApps to access and utilize these URLs, the following property is exposed:

| Name | Description |
|---|---|
| **Node URL** | The node the wallet is pointing to  |
| **Indexer URL** | The indexer URL the wallet is pointing to |
| **Proving Server URL** | The proving server URL the wallet is pointing to |

To get the service URI config, use the API as follows:

```ts
try {
  const serviceUriConfig = await window.midnight.{walletName}.serviceUriConfig();

  console.log('serviceUriConfig', serviceUriConfig);
} catch (error) {
  console.log('an error occurred', error);
}
```

**Note:** The DApp must be authorized before calling this method, otherwise it will throw an error.

## Interacting with the API

After calling the `enable()` method and the user approves the authorization request, you will receive an instance of the [DAppConnectorWalletAPI](interfaces/DAppConnectorWalletAPI.md), which includes the following properties:

| Name | Description | Note |
|---|---|---|
| **balanceAndProveTransaction** | Balances and proves a transaction  | - |
| **submitTransaction** | Submits a balanced and proven transaction | - |
| **state** | Returns [DAppConnectorWalletState](interfaces/DAppConnectorWalletState.md) object | - |
| **balanceTransaction** | Balances a transaction | This method is deprecated and will be removed in version 2.0.0 |
| **proveTransaction** | Proves a transaction | This method is deprecated and will be removed in version 2.0.0 |

## Getting the wallet state

To get the wallet state, call the `state()` API method, which will return a promise with the [DAppConnectorWalletState](interfaces/DAppConnectorWalletState.md) object as follows:

```ts
try {
  const state = await api.state();

  console.log('Wallet state', state);
} catch (error) {
  console.log('an error occurred', error);
}
```

## Balancing and proving a transaction

To balance and prove a transaction, begin by creating a transaction in your DApp. You can [follow the guide on how to create a transaction here](docs/develop/guides/wallet-dev-guide.mdx#working-with-transactions).

This method accepts the following properties:

| Name | Data type | Required? |
|---|---|---|
| **transaction** | Transaction  | Yes |
| **newCoins** | CoinInfo[] | No |

Below, you'll find an example of how to balance and prove a transaction:

```ts
try {
  // assuming we have a transaction at hand here
  const transaction;

  const balancedAndProvenTransaction = await api.balanceAndProveTransaction(transaction);
} catch (error) {
  console.log('an error occurred', error);
}
```

## Submitting a transaction

With the balanced and proven transaction from above, you can now submit it.

The `submitTransaction()` method accepts the following parameters:

| Name | Data type | Required? |
|---|---|---|
| **transaction** | Transaction  | Yes |

Below, you'll find an example of how to submit a transaction:

```ts
try {
  const submittedTransaction = await api.submitTransaction(balancedAndProvenTransaction);
} catch (error) {
  console.log('an error occurred', error);
}
```

## Examples
In this section, you'll find examples demonstrating how to fully utilize the DApp connector API.

### Submitting a transaction

This example demonstrates how to authorize and submit a transaction from a DApp's perspective using the DApp connector API.

```ts
try {
  const api = await window.midnight.{walletName}.enable();

  // assuming this is a transaction we've already created
  // [link to create transaction docs is in the "Balancing and proving a transaction" section]
  const transaction;

  const balancedAndProvenTransaction = await api.balanceAndProveTransaction(transaction);

  const submittedTx = await api.submitTransaction(balancedAndProvenTransaction);

  console.log(submittedTx);
} catch (error) {
  console.log('an error occurred', error);
}
```
