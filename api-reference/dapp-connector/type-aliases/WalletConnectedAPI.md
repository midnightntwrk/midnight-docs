[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / WalletConnectedAPI

# Type Alias: WalletConnectedAPI

> **WalletConnectedAPI** = `object`

Wallet connected API. It is a subset of the Connected API defining all wallet-relevant methods.
Full Connected API also implements [HintUsage](HintUsage.md). The operations provided cover all necessary
functionality for a DApp to interact with the wallet:
- getting balances and addresses
- submitting transactions
- creating and balancing transactions
- initializing intents (for swaps)
- signing data

## Methods

### balanceSealedTransaction()

> **balanceSealedTransaction**(`tx`, `options?`): `Promise`\<\{ `tx`: `string`; \}\>

Take sealed transaction (with proofs, signatures and cryptographically bound),
pay fees, add necessary inputs and outputs to remove imbalances from it,
returning a transaction ready for submission

This method is mainly expected to be used by DApps when they operate on transactions created by the wallet or when the DApp wants to be sure that wallet performs balancing in a separate intent.
In such case, it is important to remember that some contracts might make use of fallible sections, in which case wallet won't be able to properly balance the transaction. In such cases, the DApp should use [balanceUnsealedTransaction](#balanceunsealedtransaction) instead.

In relation to Ledger API (`@midnight-ntwrk/ledger-v<N>`), this method expects a serialized transaction of type `Transaction<SignatureEnabled, Proof, Binding>`
Options:
`payFees` - whether wallet should pay fees for the issued transaction or not, true by default

#### Parameters

##### tx

`string`

##### options?

###### payFees?

`boolean`

#### Returns

`Promise`\<\{ `tx`: `string`; \}\>

***

### balanceUnsealedTransaction()

> **balanceUnsealedTransaction**(`tx`, `options?`): `Promise`\<\{ `tx`: `string`; \}\>

Take unsealed transaction (with proofs, with no signatures and with preimage
data for cryptographic binding), pay fees, add necessary inputs and outputs
to remove imbalances from it, returning a transaction ready for submission

This method is expected to be used by DApps when interacting with contracts - in many cases when contracts interact with native tokens, where wallet may need to add inputs and outputs to an existing intent to properly balance the transaction.

In relation to Ledger API (`@midnight-ntwrk/ledger-v<N>`), this method expects a serialized transaction of type `Transaction<SignatureEnabled, Proof, PreBinding>`
Options:
`payFees` - whether wallet should pay fees for the issued transaction or not, true by default

#### Parameters

##### tx

`string`

##### options?

###### payFees?

`boolean`

#### Returns

`Promise`\<\{ `tx`: `string`; \}\>

***

### getConfiguration()

> **getConfiguration**(): `Promise`\<[`Configuration`](Configuration.md)\>

Get the configuration of the services used by the wallet.

It is important for DApps to make use of those services whenever possible, as the wallet user might have some preferences in this regard, which e.g. improve privacy or performance.

#### Returns

`Promise`\<[`Configuration`](Configuration.md)\>

***

### getConnectionStatus()

> **getConnectionStatus**(): `Promise`\<[`ConnectionStatus`](ConnectionStatus.md)\>

Status of an existing connection to wallet

DApps can use this method to check if the connection is still valid.

#### Returns

`Promise`\<[`ConnectionStatus`](ConnectionStatus.md)\>

***

### getDustAddress()

> **getDustAddress**(): `Promise`\<\{ `dustAddress`: `string`; \}\>

Get the Dust address of the wallet. It is provided in Bech32m format.

#### Returns

`Promise`\<\{ `dustAddress`: `string`; \}\>

***

### getDustBalance()

> **getDustBalance**(): `Promise`\<\{ `balance`: `bigint`; `cap`: `bigint`; \}\>

Get the balance of Dust of the wallet. It reports both:
- the current balance (which may change over time due to generation mechanics)
- the cap (the maximum amount of Dust that can be generated from the current Night balance).

#### Returns

`Promise`\<\{ `balance`: `bigint`; `cap`: `bigint`; \}\>

***

### getProvingProvider()

> **getProvingProvider**(`keyMaterialProvider`): `Promise`\<[`ProvingProvider`](ProvingProvider.md)\>

Obtain the proving provider from the wallet to delegate proving to the wallet.

#### Parameters

##### keyMaterialProvider

[`KeyMaterialProvider`](KeyMaterialProvider.md)

object resolving prover and verifier keys, as well as the ZKIR representation of the circuit; `KeyMaterialProvider` is almost identical to the one in Midnight.js's `ZKConfigProvider` (https://github.com/midnightntwrk/midnight-js/blob/main/packages/types/src/zk-config-provider.ts#L25)

#### Returns

`Promise`\<[`ProvingProvider`](ProvingProvider.md)\>

A `ProvingProvider` instance, compatible with Ledger's ProvingProvider (https://github.com/midnightntwrk/midnight-ledger/blob/main/ledger-wasm/ledger-v6.template.d.ts#L992)

***

### getShieldedAddresses()

> **getShieldedAddresses**(): `Promise`\<\{ `shieldedAddress`: `string`; `shieldedCoinPublicKey`: `string`; `shieldedEncryptionPublicKey`: `string`; \}\>

Get the shielded addresses of the wallet. For convenience it also returns the coin public key and encryption public key.
All of them are provided in Bech32m format.

#### Returns

`Promise`\<\{ `shieldedAddress`: `string`; `shieldedCoinPublicKey`: `string`; `shieldedEncryptionPublicKey`: `string`; \}\>

***

### getShieldedBalances()

> **getShieldedBalances**(): `Promise`\<`Record`\<`string`, `bigint`\>\>

Get the balances of shielded tokens of the wallet. They are represented as a record, whose keys are token types.

#### Returns

`Promise`\<`Record`\<`string`, `bigint`\>\>

***

### getTxHistory()

> **getTxHistory**(`pageNumber`, `pageSize`): `Promise`\<[`HistoryEntry`](HistoryEntry.md)[]\>

Get the history of transactions of the wallet. Each history entry is a simplistic record of the fact that a transaction is relevant to the wallet.

#### Parameters

##### pageNumber

`number`

##### pageSize

`number`

#### Returns

`Promise`\<[`HistoryEntry`](HistoryEntry.md)[]\>

***

### getUnshieldedAddress()

> **getUnshieldedAddress**(): `Promise`\<\{ `unshieldedAddress`: `string`; \}\>

Get the unshielded address of the wallet. It is provided in Bech32m format.

#### Returns

`Promise`\<\{ `unshieldedAddress`: `string`; \}\>

***

### getUnshieldedBalances()

> **getUnshieldedBalances**(): `Promise`\<`Record`\<`string`, `bigint`\>\>

Get the balances of unshielded tokens (potentially including Night) of the wallet. They are represented as a record, whose keys are token types.

#### Returns

`Promise`\<`Record`\<`string`, `bigint`\>\>

***

### makeIntent()

> **makeIntent**(`desiredInputs`, `desiredOutputs`, `options`): `Promise`\<\{ `tx`: `string`; \}\>

Initialize a transaction with unbalanced intent containing desired inputs and outputs.
Primary use-case for this method is to create a transaction, which inits a swap
Options:
`intentId` - what id use for created intent:
             use 1 to ensure no transaction merging will result in actions executed before created intent in the same transaction
             use specific number within ledger limitations to make the intent have that segment id assigned
             use "random" to allow wallet to pick one in random (e.g. when creating intent for swap purposes)
`payFees` - whether wallet should pay fees for the issued transaction or not

#### Parameters

##### desiredInputs

[`DesiredInput`](DesiredInput.md)[]

##### desiredOutputs

[`DesiredOutput`](DesiredOutput.md)[]

##### options

###### intentId

`number` \| `"random"`

###### payFees

`boolean`

#### Returns

`Promise`\<\{ `tx`: `string`; \}\>

***

### makeTransfer()

> **makeTransfer**(`desiredOutputs`, `options?`): `Promise`\<\{ `tx`: `string`; \}\>

Initialize a transfer transaction with desired outputs

Options:
`payFees` - whether wallet should pay fees for the issued transaction or not, true by default

#### Parameters

##### desiredOutputs

[`DesiredOutput`](DesiredOutput.md)[]

##### options?

###### payFees?

`boolean`

#### Returns

`Promise`\<\{ `tx`: `string`; \}\>

***

### signData()

> **signData**(`data`, `options`): `Promise`\<[`Signature`](Signature.md)\>

Sign provided data using key and format specified in the options, data to sign will be prepended with right prefix

#### Parameters

##### data

`string`

##### options

[`SignDataOptions`](SignDataOptions.md)

#### Returns

`Promise`\<[`Signature`](Signature.md)\>

***

### submitTransaction()

> **submitTransaction**(`tx`): `Promise`\<`void`\>

Submit a transaction to the network, effectively using wallet as a relayer.

The transaction received is expected to be balanced and "sealed" - it means it contains proofs, signatures and cryptographically bound (`Transaction<SignatureEnabled, Proof, Binding>` type from `@midnight-ntwrk/ledger`)

#### Parameters

##### tx

`string`

#### Returns

`Promise`\<`void`\>
