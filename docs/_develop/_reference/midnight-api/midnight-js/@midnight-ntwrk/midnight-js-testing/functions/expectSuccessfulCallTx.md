[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / expectSuccessfulCallTx

# Function: expectSuccessfulCallTx()

> **expectSuccessfulCallTx**\<`C`, `ICK`\>(`providers`, `callTxData`, `callTxOptions`?, `nextPrivateState`?): `Promise`\<`void`\>

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### ICK

`ICK` *extends* `string`

## Parameters

### providers

[`MidnightProviders`](../../midnight-js-types/interfaces/MidnightProviders.md)\<[`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>, `string`, `unknown`\>

### callTxData

[`FinalizedCallTxData`](../../midnight-js-contracts/type-aliases/FinalizedCallTxData.md)\<`C`, `ICK`\>

### callTxOptions?

[`CallTxOptions`](../../midnight-js-contracts/type-aliases/CallTxOptions.md)\<`C`, `ICK`\>

### nextPrivateState?

[`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>

## Returns

`Promise`\<`void`\>
