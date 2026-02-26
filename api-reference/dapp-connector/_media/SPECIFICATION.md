# DApp Connector API

DApps need an API to interact with wallets, so that users can confirm their transactions and use tokens in DApp interactions. What makes this line of interaction particularly important is an asymmetry in trust and data needed to actually implement useful interactions: wallet software is usually carefully selected and receives a lot of trust from its user, while DApps may be of varying quality, their goals will vary, as well as approach to overall security and privacy (including outright malicious intents). At the same time - many honest DApps, to provide good user experience or simply basic functionality for the kind of DApp, will require access to data, that users should not share lightly in many cases, like balances of (shielded) tokens or transactions found relevant for the wallet.

What raises additional concern to this API is potential presence of multiple browser extensions wanting to install their instances of the API in the DApp website, some of which might be malicious. 

## API Design

> [!note]
> Code snippets below are defined in TypeScript, this enables easy consistency check between the specification here, and definition in the DApp Connector API package: https://github.com/input-output-hk/midnight-dapp-connector-api / https://www.npmjs.com/package/@midnight-ntwrk/dapp-connector-api

> [!note] 
> In certain ways, the design of this API borrows from the [Cardano DApp Connector API defined in CIP-30](https://cips.cardano.org/cip/CIP-0030). This is a deliberate decision, to make the API look familiar to Cardano DApp developers.

### Initial API

The initial API of a wallet is an object containing information about the wallet, as well as a method allowing to connect to it or check if a connection is established. Together with UUID under which the initial API is installed, the contents are compatible with the [draft of CAIP-372](https://github.com/ChainAgnostic/CAIPs/pull/372/files).

```ts
type InitialAPI = {
  /**
   * Wallet identifier, in a reverse DNS notation (e.g. `com.example.wallet`)
   */
  rdns: string;
  /**
   * Wallet name, expected to be displayed to the user
   */  
  name: string;
  /**
   * Wallet icon, as an URL, either reference to a hosted resource, or a base64 encoded data URL
   */
  icon: string;
  /**
   * Version of the API implemented and installed, string containing a version of the API package @midnight-ntwrk/dapp-connector-api that was used in implementation
   */
  apiVersion: string;
  /**
   * Connect to wallet, hinting desired network id
   */
  connect: (networkId: string) => Promise<ConnectedAPI>;
};
```

Then, to allow DApp to access the API, Wallet installs its initial API under global `window.midnight` object:

```ts
declare global {
  interface Window {
    midnight?: {
      [key: string]: InitialAPI;
    };
  }
}
```

Here, some responsibilities lie on both DApp and Wallet:
1. The first wallet to install global `midnight` property must do it in a way, which prevents further tampering or unwanted overrides, e.g. `Object.defineProperty(window, 'midnight', { value: Object.create(null), writable: false, configurable: false });`
2. The wallet must install its initial API(s) under a key being a freshly-generated UUIDv4.
3. The `InitialAPI` object, as well as later returned `ConnectedAPI` object must be frozen, that is extensions are prevented, and existing properties are non-writable and non-configurable.
4. The `InitialAPI` objects must be installed under the global `midnight` object in a way, which prevents overrides, e.g. `Object.defineProperty(window.midnight, uuid(), {configurable: false, writable: false, enumerable: true, value: initialAPI})`.
5. In case multiple initial APIs are defined - the DApp must present the user with way to choose the wallet to use for the interaction
6. From DApp perspective, both name and icon are potentially malicious or misleading input, and thus - they should be sanitized before being presented to the user. In particular - the icon should always be rendered inside an `img` tag to prevent XSS from JavaScript embedded in SVG.
7. DApp must always check the `apiVersion` against supported range of versions (following semver semantics) and the DApp must not attempt to connect or present to the user initial APIs that are annotated with an unsupported API version.
8. Wallet should keep stable `rdns` throught lifecycle of the product.
9. DApp must be prepared to handle `rdns` values that are unknown, invalid, or potentially misleading, similar to handling user agent strings in web browsers.
10. DApp should verify initial API instances provided against possible malicious extensions (like multiple APIs with same or very similar `rdns` and/or `name` and overlapping `apiVersion`s). When DApp detects such situation it must notify the user.
11. The Wallet must report exact version of the `@midnight-ntwrk/dapp-connector-api` package it implemented
12. If the Wallet implements multiple incompatible versions of the API simultanously (which is a possible case during transition period related to a hard-fork), Wallet must provide multiple entries in the `midnight` object.
13. For connecting:
   - The DApp must provide network id it wants to connect to; The network id of mainnet is `mainnet`
   - The DApp should not call `connect` method of the initial API multiple times unless necessary (e.g. to retry connection)
   - The wallet must reject connection request if it can't connect to the network with id provided by the DApp
   - The wallet may ask user for the scope of permissions provided to the DApp and indicate what network the DApp wants to connect to. It is up to the wallet implementation to decide how exactly and when exactly user is asked for confirmation
   - The wallet should expect multiple calls to the `connect` method and ensure they are properly separated from each other (specifically to allow re-connections)

### Connected API

Once connected, wallet provides connected API - one which allow for specific interaction with the wallet.

Main intention behind the connected API design is to enable many useful DApps, but also - to maintain separation of responsibilities between DApps and wallets. Wallets should not be concerned about preparing the right contract calls and preparing whole transaction as the DApp needs it, but also DApps should not be concerned with key management or wallet-specific operations like coin selection. For that reason, no API provides direct access to shielded coins or unshielded UTxOs, and instead DApps can ask wallet to prepare a transaction having specific effect using methods like `makeTransfer` or `makeIntent`. At the same time, main API allowing DApps to use tokens in contracts and have wallet pay fees is `balanceTransaction` - there, the DApp is expected to provide a transaction containing with desired effects (like contract calls, or some token outputs), and the wallet must ensure that fees are paid, as well as necessary inputs and outputs are provided to fully balance each token movement, so that DApp can focus solely on its desired effects.

Importantly, the Connected API also allows delegating proof generation to the wallet. It is to offer bigger flexibility and conformance to user's choices as some of proving modalities might require some additional configuration or preparational steps, which eventually might be too demanding for every DApp to support.

The connected API consists of couple of parts, each always present, but its methods may throw an error indicating lack of permission:
```ts

type ShieldedBalance = {
  getShieldedBalances(): Promise<Record<TokenType, bigint>>;
};

type UnshishieldedBalance = {
  getUnshieldedBalances(): Promise<Record<TokenType, bigint>>;
};

type DustBalance = {
  getDustBalance(): Promise<bigint>;
}

type TxHistory = {
  getTxHistory(pageNumber: number, pageSize: number): Promise<HistoryEntry[]>;
};

type ShieldedAddress = {
  getShieldedAddresses(): Promise<{
    shieldedAddress: string;
    shieldedCoinPublicKey: string;
    shieldedEncryptionPublicKey: string;
  }>;
};

type UnshieldedAddress = {
  getUnshieldedAddress(): Promise<{
    unshieldedAddress: string;
  }>;
};

type DustAddress = {
  getDustAddress(): Promise<{dustAddress: string}>;
}

type InitActions = {
  /**
   * Take unsealed transaction (with proofs, with no signatures and with preimage 
   * data for cryptographic binding), pay fees, add necessary inputs and outputs 
   * to remove imbalances from it, returning a transaction ready for submission
   */
  balanceUnsealedTransaction(tx: string, options?: {payFees?: boolean}): Promise<{tx: string}>;
  /**
   * Take sealed transaction (with proofs, signatures and cryptographically bound), 
   * pay fees, add necessary inputs and outputs to remove imbalances from it, 
   * returning a transaction ready for submission
   */
  balanceSealedTransaction(tx: string, options?: {payFees?: boolean}): Promise<{tx: string}>;
  /**
   * Initialize a transfer transaction with desired outputs
   */
  makeTransfer(desiredOutputs: DesiredOutput[], options?: {payFees?: boolean}): Promise<{tx: string}>;
  /**
   * Initialize a transaction with unbalanced intent containing desired inputs and outputs.
   * Primary use-case for this method is to create a transaction, which inits a swap
   * Options:
   * `intentId` - what id use for created intent:
   *              use 1 to ensure no transaction merging will result in actions executed before created intent in the same transaction
   *              use specific number within ledger limitations to make the intent have that segment id assigned
   *              use "random" to allow wallet to pick one in random (e.g. when creating intent for swap purposes)
   * `payFees` - whether wallet should pay fees for the issued transaction or not
   */
  makeIntent(desiredInputs: DesiredInput[], desiredOutputs: DesiredOutput[], options: {
    intentId: number | "random", 
    payFees: boolean
  }): Promise<{tx: string}>;
  /**
   * Sign provided data using key and format specified in the options, data to sign will be prepended with right prefix
   */
  signData(data: string, options: SignDataOptions): Promise<Signature>;
};

type Configuration = {
  /**  Indexer URI */
  indexerUri: string;
  /**  Indexer WebSocket URI */
  indexerWsUri: string;
  /**  Prover Server URI */
  proverServerUri?: string | undefined;
  /**  Substrate URI */
  substrateNodeUri: string;

  /** Network id connected to - present here mostly for completness and to allow dapp validate it is connected to the network it wishes to */
  networkId: string | NetworkId;
};

type AccessConfiguration = {
  getConfiguration(): Promise<Configuration>;
  /**
   * Status of an existing connection to wallet
   */
  getConnectionStatus(): Promise<ConnectionStatus>;
}

type DelegateProving = {
  getProvingProvider(keyMaterialProvider: KeyMaterialProvider): Promise<ProvingProvider>;
}

type SubmitTransaction = {
    submitTransaction(tx: string): Promise<void>;
}

type WalletConnectedAPI = 
  & ShieldedBalance 
  & UnshieldedBalance 
  & DustBalance
  & TxHistory 
  & ShieldedAddress 
  & UnshieldedAddress 
  & DustAddress
  & InitActions 
  & AccessConfiguration 
  & DelegateProving
  & SubmitTransactions

type ExecutionStatus = Record<number, "Success" | "Failure">;

type TxStatus =
  | {
      /**
       * Transaction included in chain and finalized
       */
      status: "finalized";
      executionStatus: ExecutionStatus;
    }
  | {
      /**
       * Transaction included in chain and not finalized yet
       */
      status: "confirmed";
      executionStatus: ExecutionStatus;
    }
  | {
      /**
       * Transaction sent to network but is not known to be either confirmed or discarded yet
       */
      status: "pending";
    }
  | {
      /**
       * Transaction failed to be included in chain, e.g. because of TTL or some validity checks
       */
      status: "discarded";
    };

type HistoryEntry = { 
    /**
     * Hex-encoded hash of transaction
     */
    txHash: string; 
    txStatus: TxStatus 
};

type DesiredOutput = {
  kind: "shielded" | "unshielded";
  type: TokenType;
  value: bigint;
  recipient: string;
};

type DesiredInput = {
  kind: "shielded" | "unshielded";
  type: TokenType;
  value: bigint;
};

type TokenType = string;

type SignDataOptions = {
  /**
   * How are data for signing encoded.
   * "hex" and "base64" mean binary data are encoded using one or the other format, 
   *   the wallet must decode them into binary sequence first
   * "text" means the data should be signed as provided in the string, but encoded into UTF-8 as a normalization step. 
   *   Conversion is necessary, because JS strings are UTF-16
   */
  encoding: "hex" | "base64" | "text"
  /**
   * What kind of key to use for signing
   */
  keyType: "unshielded";
};
type Signature = {
  /**
   * The data signed
   */
  data: string; 
  signature: string; 
  verifyingKey: string
}


type ConnectionStatus =
  | {
      /**
       * Connection is established to following network id
       */
      status: "connected";
      networkId: string | NetworkId;
    }
  | {
      /**
       * Connection is lost
       */
      status: "disconnected";
    };

export type KeyMaterialProvider = {
  getZKIR(circuitKeyLocation: string): Promise<Uint8Array>;
  getProverKey(circuitKeyLocation: string): Promise<Uint8Array>;
  getVerifierKey(circuitKeyLocation: string): Promise<Uint8Array>;
}

export type ProvingProvider = {
  check(
    serializedPreimage: Uint8Array,
    keyLocation: string,
  ): Promise<(bigint | undefined)[]>;
  prove(
    serializedPreimage: Uint8Array,
    keyLocation: string,
    overwriteBindingInput?: bigint,
  ): Promise<Uint8Array>;
};

type HintUsage = {
  hintUsage(methodNames: Array<keyof ConnectedAPI>): Promise<void>;
}

type ConnectedAPI = WalletConnectedAPI & HintUsage;

```

#### Permissions

1. The DApp should not assume presence of methods means granted permission - the DApp can call any method it needs for implementing desired functionality, but the Wallet may reject some (or all) of them according to its permission policy. To let DApp clearly distinguish when permission to use particular API was rejected, wallet must return `PermissionRejected` error for a particular method.
2. The DApp should not assume any particular permission system and its granularity being implemented. In particular - The DApp should use as little `ConnectedAPI` surface as possible for its functionality and follow the rules of progressive enhancement/graceful degradation when learning that certain methods are rejected. 
3. The DApp can use `hintUsage` method to hint to wallet what methods are expected be used in a certain context (be it whole session, single view, or a user flow - it is up to DApp). The wallet should expect multiple `hintUsage` calls as they may be related to different parts of a DApp. The wallet can use these calls as an opportunity to ask user for permissions. The wallet must resolve promise with a void value (`undefined`). The returned promise should be resolved only after the wallet finishes processing (including user interaction, if needed).

#### Initialization and configuration

1. The DApp should connect to indexer and proving server indicated by configuration, therefore wallet should not limit access to the `getConfiguration` method unless absolutely necessary. The proof server URL is optional and likely won't be present, as being replaced with a more flexible `getProvingProvider` API.
2. The DApp can double check if `networkId` present in configuration matches the requested one
3. In the configuration object, the wallet must point to service deployments, which are compatible with network id present, and preferably are the same that the wallet itself uses for particular network.

#### Data

1. Wallet must provide data like token types and addresses in format compatible with network id present in the configuration object and following relevant specification, in particular:
    1.  contract addresses (where relevant) and token types follow format specified by ledger
    2.  wallet addresses follow format specified by wallet (Bech32m)
2. Wallet may reconcile data like balances from multiple accounts, in such case wallet must ensure data consistency, mostly related to reported balances, so that they can actually be used in a transaction, if only it fits single transaction and user does permit so.
3. Wallet implementing multiple account support must make it clear to the user, which accounts will be used for particular DApp interaction.
4. Wallet must ensure that balances reported in `getShieldedBalances` and `getUnshieldedBalances` methods are available balances, which means balances wallet is willing to allow spending in transactions. This allows DApps to rely on the balance checks (to certain extent at least, since race conditions are a possibility) in their logic.
5. The DApp can't assume balances, transactions, and the addresses returned by the API are directly related to each other. In particular - in many cases even when using a single BIP-44 account, the data served by an indexer and the wallet might differ because of wallet having more knowledge of its transactions.

#### Preparing and handling transactions

There exist 5 methods related to transactions: `makeTransfer`, `makeIntent`, `balanceSealedTransaction`, `balanceUnsealedTransaction` and `submitTransaction`. Their roles are following:
- `submitTransaction` - use wallet as a relayer to submit transaction to the network
- `balanceUnsealedTransaction` - it is the default method for DApp to use when interacting with contracts. The DApp is expected to create a transaction expressing desired outcomes - containing wanted contract calls (with accompanying token movements), or outputs from the transaction (expressing transfers to be made). Wallet will complement such transaction by collecting surplus of tokens present, providing necessary inputs and paying fees. The necessity for using `balanceUnsealedTransaction` arises from the intent structure and need to add outputs or inputs in the same intents contracts are called.
- `balanceSealedTransaction` - this method should be used to make wallet complement e.g. swap or pay fees for existing transaction
- `makeTransfer` - ask wallet to transfer provided amounts of tokens to provided recipients
- `makeIntent` - Midnight's transaction structure allows implementing atomic swaps through usage of intents and Zswap. `makeIntent` allows to create a purposefully imbalanced transaction (with surplus of tokens provided according to the `desiredInputs` balances and shaortage of tokens according to `desiredOutputs`), so that other party can issue a "mirrored" version of the call or be asked to balance such transaction (e.g. with the `balanceTransaction` method).

All of the methods which create or complement a transaction (`makeTransfer`, `makeIntent`, `balanceSealedTransaction`, `balanceUnsealedTransaction`) take an option `payFees`. It defaults to true. If it is set to false, wallet must not issue `DustSpend` to pay fees in the transaction. Paying fees has timing implications (Dust grace period is in a range of hours, while intent TTL can be even 2 weeks ahead), but also functional ones - the DApp might be implemented in a way, which expects the fee payment to be performed by a dedicated service.

1. When a call returning transaction is made (in methods `balanceSealedTransaction`, `balanceUnsealedTransaction`, `makeTransfer` or `makeIntent`), wallet must return a transaction ready to be submitted to the network, that is one that is cryptographically bound, contains needed signatures, and contains needed proofs. It might contain imbalances though, depending on exact method used and options provided.
2. The DApp, when asking wallet to submit a transaction, must provide a transaction ready to be submitted to the network, that is one that is cryptographically bound, contains signatures, and contains proofs.
3. The DApp, when providing a transaction in method like `balanceSealedTransaction` or `submitTransaction`, must provide a transaction compatible with the network it is connected to.


#### Signing

In order to make it impossible to sign transactions by accident, wallet receiving call to `signData` must prefix data with string `midnight_signed_message:<data_size>:`, where `<data_size>` is data size in bytes.

#### Proving

The `getProvingProvider` method takes an object being able to resolve on-demand circuit representations needed for proving and verifying - its ZKIR (intermediate representation), prover key (low level representation needed for proving) and verifier key (low level representation needed for verification). It returns a `ProvingProvider` interface compatible with the one defined in Midnight's Ledger WASM bindings. The `KeyMaterialProvider` is almost the same as `ZKConfigProvider` defined in Midnight.js. Such pairing of interfaces enables:
- the proving implementation to cache prover keys, which may be quite big (often 10MB-20MB, sometimes event 80MB and more) and use the verifer keys or ZKIR for the resolution (which are significantly smaller)
- easy usage from Midnight.js

> [!NOTE]
> In the case of particularly complex circuits, the size of the prover key might reach 80MB and more (while the average does not seem to exceed 20MB). Sizes like this come close to, or even exceed message size limits of different transport methods. The wallet must take that into account when implementing the proving provider.

Here, it is crucial for the DApp and the wallet to acknowledge:
- the proof preimages submitted for proving contain the exact private data which the proof itself hides, so the wallet can learn them
- the wallet de-facto owns the user experience around proving, which may be a very time-consuming operation (up to several minutes in the most pessimistic scenarios), and the details of the behavior will depend on the proving modality provided by the wallet

### Errors

Errors are modelled with a dedicated enumeration of codes:

```ts
const ErrorCodes = {
  /** The dapp connector wasn't able to process the request */
  InternalError: 'InternalError',
  /** The user rejected the request */
  Rejected: 'Rejected',
  /** Can be thrown in various circumstances, e.g. one being a malformed transaction */
  InvalidRequest: 'InvalidRequest',
  /** Permission to perform action was rejected. */
  PermissionRejected: 'PermissionRejected'
  /** The connection to the wallet was lost */
  Disconnected: 'Disconnected'
} as const;

type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

type APIError = Error & {
  /** indication it is a DApp Connector Error */  
  type: 'DAppConnectorAPIError';
  /** The code of the error that's thrown */
  code: ErrorCode;
  /** The reason the error is thrown */
  reason: string;
}
```

Codes `InternalError` and `InvalidRequest` are rather simple in interpretation, along the lines of guidelines behind usage of 4xx and 5xx error codes in HTTP.
There is a notable difference in semantics between `Rejected` and `PermissionRejected` codes: `Rejected` indicates one-time rejection (e.g. user rejecting a transaction after seeing the real cost of it), while `PermissionRejected` indicates general preference to not permit particular action. Because of this - the connected DApp can expect, that once `PermissionRejected` is observed for a particular part of the API, it will keep being returned for the session (that is - until the browser window/tab with the DApp page is closed).

`APIError` type is not modelled as a class here, because it would be impossible to share single class definition between the DApp and the Wallet and in result - `instanceof` checks would not work as expected. Wallets can implement the type as a class extending native `Error`.

## Future direction

Although not part of the specification at this moment, there are some changes to the API considered to be added in the future. Some of them are quality-of-life improvements for DApp developers, others might enable new use cases or user experiences. 

### More chain-agnostic APIs

There exist APIs meant to be chain-agnostic, like one for issuing payments: https://github.com/ChainAgnostic/CAIPs/pull/358. Providing compatibility with them is expected to increase adoption and reduce friction.


### EIP-6963-like provider installation and discovery

Current specification based on shared global object offers simplicity and familiarity. Though it might cause synchronization issues when multiple wallets try to install their APIs. One possible solution, at a cost of increased complexity on the DApp side (likely asking for a dedicated client library) is for wallets to install their APIs using events, like in [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) or [CAIP-282](https://github.com/ChainAgnostic/CAIPs/pull/282). 

### Custom extensions

In many cases wallets might want to expose additional APIs, which are not part of the standard yet - for example to perform real-world testing and to gather feedback. For such cases extensions API similar to the one specified in [CIP-0030](https://cips.cardano.org/cip/CIP-0030) could be defined.

### Structured data signing

DApp connector's ability to sign arbitrary data is crucial to enable plenty of use-cases. It faces a significant user experience issue - many times the data being signed will not be human-readable, preventing user from assesing what exactly is being signed. To change that, Ethereum has adopted [EIP-712](https://eips.ethereum.org/EIPS/eip-712), Midnight's DApp connector could be extended to similar functionality.

### Event listener/observable API

In many cases, DApps might want to be notified when information relevant for them changes - e.g. a DEX might want to be notified whenever balances change. Providing push-based updates would be a welcome quality-of-life improvement. 

### Accounts

It seems that in many practical scenarios delivering good, seamless UX by the DApp needs information about accounts and being able to interact with them.

## Examples

### Connect

```ts
declare function semverMatch(version, expectedRange): boolean;
declare function askUserToSelect(wallets: InitialAPI[]): Promise<InitialAPI>;
declare function warnUser(message: string): Promise<void>;


async function connect(): Promise<ConnectedAPI> {
  const networkId = 'main';

  const compatibleWallets = Object.values(window.midnight ?? {})
    .filter((wallet) => semverMatch(wallet.apiVersion, '^1.0'));

  const uniqueRdns = new Set(compatibleWallets.map(w => w.rdns.trim()));

  if (uniqueRdns.size() < compatibleWallets.length) {
    await warnUser('Duplicate wallets found, some may be fake');
  }

  const selectedWallet = await askUserToSelect(compatibleWallets);
  const connectedWallet = await selectedWallet.connect(networkId);
  const connectionStatus = await connectedWallet.getConnectionStatus();
  assert(connectionstatus.networkId === networkId);
  return connectedWallet;
}
```

### Init a Night payment to an address

```ts
declare function getNightTokenType(): TokenType; // Such function will be provided e.g. by other libraries or the token type will become a well-known constant

const connectedWallet = await connect();
const tx = await connectedWallet.makeTransfer([{
  kind: "unshielded",
  type: getNightTokenType(),
  value: 10_000_000, //10 Night
  recipient: "mn_addr1asujt0dayj4pelgq97wv75hjhscqv9epmzzpapkf8sy8c87jhh9s6e0fs3"
}]);
await connectedWallet.submitTransaction(tx);

```

### Init and complement a swap of night into a shielded token

```ts
// Party #1
declare function getNightTokenType(): TokenType; // Such function will be provided e.g. by other libraries or the token type will become a well-known constant
declare function getFooTokenType(): TokenType;

const connectedWallet = await connect();
const shieldedAddress = (await connectedWallet.getShieldedAddresses()).shieldedAddress;
// This call will create a transaction with inputs and outputs structured so that there is:
// - surplus of 10 Night (inputs cover 10 Night, there might be some change output of Night created)
// - shortage of 50_000 Foo tokens (there is an output for 50_000 Foo tokens, but no inputs)
const tx = await connectedWallet.makeIntent([{
  kind: "unshielded",
  type: getNightTokenType(),
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
// The the party #2 provides the 50_000 Foo tokens and creates self outputs for the surplus of 10 Night
const balancedTx = await connectedWallet.balanceSealedTransaction(tx);
await connectedWallet.submitTransaction(balancedTx);
```
