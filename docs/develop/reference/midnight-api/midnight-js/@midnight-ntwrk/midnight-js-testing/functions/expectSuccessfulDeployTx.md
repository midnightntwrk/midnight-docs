[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / expectSuccessfulDeployTx

# Function: expectSuccessfulDeployTx()

> **expectSuccessfulDeployTx**\<`C`\>(`providers`, `deployTxData`, `deployTxOptions`?): `Promise`\<`void`\>

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

## Parameters

### providers

[`MidnightProviders`](../../midnight-js-types/interfaces/MidnightProviders.md)\<[`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>, `string`, `unknown`\>

### deployTxData

[`FinalizedDeployTxData`](../../midnight-js-contracts/type-aliases/FinalizedDeployTxData.md)\<`C`\>

### deployTxOptions?

[`DeployContractOptions`](../../midnight-js-contracts/type-aliases/DeployContractOptions.md)\<`C`\> | [`DeployTxOptions`](../../midnight-js-contracts/type-aliases/DeployTxOptions.md)\<`C`\>

## Returns

`Promise`\<`void`\>
