# Midnight DApp connector API

**@midnight-ntwrk/dapp-connector-api v4.0.0**

***

This API provides a comprehensive interface for connecting Decentralized Applications (DApps) to Midnight wallets. It defines the methods, data structures, and operations that enable DApps to request wallet information, create transactions, and interact with the Midnight Network.

## Installation

The Midnight DApp connector API is available as an NPM package with the namespace `@midnight-ntwrk/dapp-connector-api`. It can be installed using any node package manager, such as Yarn. To install the package using Yarn, execute the following command:

```bash
yarn add @midnight-ntwrk/dapp-connector-api
```

## Package usage

The package provides the type declarations that are documented in the [documentation](type-aliases/InitialAPI.md) of this package.

The DApp connector API should be exposed through the global variable as follows:

```ts
window.midnight.{someWalletIdString}
```

In this way multiple wallets can inject their API without causing conflicts, and a DApp can select/ask the user 
to which wallet connection should be established.

## Initial API data and methods

| Name | Description |
|------|-------------|
| **name** | Wallet name, expected to be displayed to the user. |
| **icon** | Wallet icon, as an URL, either reference to a hosted resource, or a base64 encoded data URL. |
| **apiVersion** | Version of the API implemented by this instance of the API. For example, wallet implementing version 3.1.5 provides apiVersion with value '3.1.5'. This value lets DApps to differentiate between different versions of the API and implement appropriate logic for each version or not use some versions at all. |
| **connect** | Connect to wallet, passing the desired network ID as a parameter. Upon successful connection returns a promise with [ConnectedAPI](type-aliases/ConnectedAPI.md). |

## Connect to a wallet

A DApp needs to select the wallet it wants to connect to and call the `connect(networkId)` method, then wait for the returned promise. 
The promise may resolve with a significant delay, as most wallets might want to display a dialog asking the user for authorization.

```ts
try {
  const desiredNetworkId = 'mainnet'
  const api = await window.midnight.{selectedWalletId}.connect('mainnet');

  // api is available here
} catch (error) {
  console.log('an error occurred', error);
}
```

## Get information about the wallet before connection

Before establishing a connection, you can access basic wallet information such as the wallet name, icon, and API version.

### Name and icon

To get the name and icon of the wallet, use the `name` and `icon` properties in the implemented DApp connector API:

```ts
const name = window.midnight.{walletName}.name;
const iconURL = window.midnight.{walletName}.icon;

console.log('Wallet name', name);
console.log('Wallet icon URL', iconURL);
```

Both fields are meant to be displayed to the user to help with wallet selection. To prevent XSS vulnerabilities, the DApp must ensure proper escaping. For example, display the icon only through an `img` tag and display the name using a `Text` node.

### Get API version

To get the API version, use the `apiVersion` property as follows:

```ts
const apiVersion = window.midnight.{walletName}.apiVersion;

console.log('API version', apiVersion);
```

The DApp needs to verify whether the version reported by the wallet matches the DApp's expectations. Use a semver check to validate compatibility.

## Query wallet state and initiate transactions

Once connected, the DApp can issue many different requests to the wallet as defined by the [ConnectedAPI](type-aliases/ConnectedAPI.md) type.

The most important operations are:

- Query the wallet for information, like balances or addresses.
- Query the wallet for configuration, so that the DApp can connect to the same instance of Indexer, Midnight Node, or Proof Server.
- Ask the wallet to make a transfer, balance a transaction, make an unbalanced intent (for example, for a swap), or sign data.
- Ask the wallet to submit a transaction.

### Get the configuration

Midnight wallet users can configure the node, indexer, and proving server URIs in the wallet settings. DApps are expected to follow these configurations to respect user preferences. This is important from a privacy standpoint.

The returned object has the following properties:

| Name | Description |
|------|-------------|
| **indexerUri** | Indexer HTTP URI |
| **indexerWsUri** | Indexer WebSocket URI |
| **proverServerUri** | Prover Server URI |
| **substrateNodeUri** | Substrate URI |
| **networkId** | Network ID connected to - present here mostly for completeness and to allow the DApp to validate it is connected to the network it wishes to. |

To get the service URI config, use the API as follows:

```ts
try {
  const connected = await window.midnight.{selectedWalletId}.connect();
  const serviceUriConfig = await connected.getConfiguration();

  console.log('serviceUriConfig', serviceUriConfig);
} catch (error) {
  console.log('an error occurred', error);
}
```

### Read wallet information 

Several methods are available for querying wallet state. The most important ones are `getShieldedBalances`, `getUnshieldedBalances`, `getDustBalance`, `getShieldedAddresses`, `getUnshieldedAddress`, and `getDustAddress`.

Keys and addresses are provided in Bech32m format. Shielded and unshielded balances return a record whose keys are token types.

```ts
try {
  const connected = await window.midnight.{selectedWalletId}.connect();
  const addressesAndBalances = {
    shieldedBalances: await connected.getShieldedBalances(),
    unshieldedBalances: await connected.getUnshieldedBalances(),
    dustBalance: await connected.getDustBalance(),
    shieldedAddresses: await connected.getShieldedAddresses(),
    unshieldedAddress: await connected.getUnshieldedAddress(),
    dustAddress: await connected.getDustAddress(),
  }

  console.log('addressesAndBalances', addressesAndBalances);
} catch (error) {
  console.log('an error occurred', error);
}
```

### Initiate a payment

If a DApp needs to initiate a payment, `makeTransfer` is the right method to use. It takes an array of outputs that need to be present in the final transaction.

For more details, see the [InitActions type documentation](type-aliases/InitActions.md).

```ts
import {nativeToken} from '@midnight-ntwrk/ledger'

try {
  const connected = await window.midnight.{selectedWalletId}.connect();
  const transaction = await connected.makeTransfer([{
    kind: 'unshielded',
    tokenType: nativeToken().raw,
    value: 10n**6n,
    recipient: 'mn_addr1abcdef.....'
  }]);
} catch (error) {
  console.log('an error occurred', error);
}
```

### Balance a transaction

To balance a transaction, begin by creating a transaction in your DApp. For transaction creation, see the [Wallet Developer Guide](/sdks/official/wallet-developer-guide).

This method is particularly useful for DApps calling contracts. It's the best way to use native tokens in a DApp or make the user pay the fees for a contract call.

Depending on the use case and state of the transaction to be balanced, there are two methods available: `balanceSealedTransaction` and `balanceUnsealedTransaction`. They indicate different methods the wallet will use to deserialize the transaction and try to balance it.

A transaction that is the result of a contract call will most likely need a call to `balanceUnsealedTransaction`. Completing a swap (for example, initiated by a `makeIntent` call) will require a call to `balanceSealedTransaction`.

```ts
try {
  // assuming we have a transaction at hand here
  const transaction;

  const result = await connected.balanceUnsealedTransaction(transaction);
  const resultTransaction = result.tx;
} catch (error) {
  console.log('an error occurred', error);
}
```

### Submit a transaction

With the balanced and proven transaction from above, you can now submit it.

```ts
try {
  const submittedTransaction = await connected.submitTransaction(resultTransaction);
} catch (error) {
  console.log('an error occurred', error);
}
```

## Examples

The following examples demonstrate common usage patterns for the DApp connector API.

### Connect

This example shows how to connect to a compatible wallet on a specific network. It filters wallets by API version, prompts the user to select one, and establishes a connection.

```ts
import { NetworkId } from '@midnight-ntwrk/midnight-js-network-id';

declare function semverMatch(version, expectedRange);
declare function askUserToSelect(wallets: InitialAPI[]): Promise<InitialAPI>;

async function connect(): Promise<ConnectedAPI> {
  const networkId = NetworkId('preprod');

  const compatibleWallets = Object.values(window.midnight ?? {})
    .filter((wallet) => semverMatch(wallet.apiVersion, '^1.0'));

  const selectedWallet = await askUserToSelect(compatibleWallets);
  const connectedWallet = await selectedWallet.connect(networkId);
  const connectionStatus = await connectedWallet.getConnectionStatus();
  assert(connectionStatus.networkId === networkId);
  return connectedWallet;
}
```

### Initiate a Night payment to an address

This example demonstrates how to initiate a transfer of 10 Night tokens to a specific unshielded address. The transaction is created using `makeTransfer` and then submitted to the network.

```ts
import { nativeToken } from '@midnight-ntwrk/ledger-v7';

const connectedWallet = await connect();
const tx = await connectedWallet.makeTransfer([{
  kind: "unshielded",
  type: nativeToken().raw,
  value: 10_000_000, //10 Night
  recipient: "mn_addr1asujt0dayj4pelgq97wv75hjhscqv9epmzzpapkf8sy8c87jhh9s6e0fs3"
}]);
await connectedWallet.submitTransaction(tx);

```

### Initiate and complement a swap of Night into a shielded token

This example shows a two-party swap where Party #1 creates an unbalanced transaction offering 10 Night tokens, and Party #2 completes it by providing 50,000 Foo tokens. The transaction is balanced and submitted by Party #2.

```ts
// Party #1
import { nativeToken } from '@midnight-ntwrk/ledger-v7';

declare function getFooTokenType(): TokenType;

const connectedWallet = await connect();
const shieldedAddress = (await connectedWallet.getShieldedAddresses()).shieldedAddress;
// This call will create a transaction with inputs and outputs structured so that there is:
// - surplus of 10 Night (inputs cover 10 Night, there might be some change output of Night created)
// - shortage of 50_000 Foo tokens (there is an output for 50_000 Foo tokens, but no inputs)
const tx = await connectedWallet.makeIntent([{
  kind: "unshielded",
  type: nativeToken().raw,
  value: 10_000_000, //10 Night
}], [{
  kind: "shielded",
  type: getFooTokenType(),
  value: 50_000,
  recipient: shieldedAddress
}]);
// Here, the `tx` can be submitted to some service, so that it becomes available to the other party

// Party #2
const tx = await fetchTransactionToMatch();
const connectedWallet = await connect();
// Then party #2 provides the 50_000 Foo tokens and creates self outputs for the surplus of 10 Night
const balancedTx = await connectedWallet.balanceSealedTransaction(tx);
await connectedWallet.submitTransaction(balancedTx);
```

### Delegate proving

This example demonstrates how to delegate Zero Knowledge (ZK) proof generation to the wallet's proving provider. It prepares an unproven transaction, generates the proof, balances the transaction, and submits it.

```ts
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';
import { Transaction } from '@midnight-ntwrk/ledger-v7';

const keyMaterialProvider = new FetchZkConfigProvider('https://example.com');

const connectedAPI = await connect();
const provingProvider = connectedAPI.getProvingProvider(keyMaterialProvider);

// Let's prepare the transaction and their inputs
const costModel = await fetchCostModel(); // For example, from Indexer, using `Block.ledgerParameters`: https://github.com/midnightntwrk/midnight-indexer/blob/main/indexer-api/graphql/schema-v3.graphql#L36
const unprovedTx = prepareUnprovenTransaction(costModel); // For example, make a contract call

// Now the proving itself:
const provenTx = await unprovenTx.prove(provingProvider, costModel);

// Now the transaction can be, for instance, balanced (to pay fees) and submitted:
const finalTx = await connectedAPI.balanceUnsealedTransaction(provenTx);
await connectedAPI.submitTransaction(finalTx);
```

## Reference

For the complete technical specification of the DApp Connector API, see the [DApp Connector API Specification](https://github.com/midnightntwrk/midnight-dapp-connector-api/blob/main/docs/api/_media/SPECIFICATION.md) on GitHub.
