[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployedContract

# Type Alias: DeployedContract\<C\>

> **DeployedContract**\<`C`\> = [`FoundContract`](FoundContract.md)\<`C`\> & `object`

Interface for a contract that has been deployed to the blockchain.

## Type declaration

### deployTxData

> `readonly` **deployTxData**: [`FinalizedDeployTxData`](FinalizedDeployTxData.md)\<`C`\>

Data resulting from the deployment transaction that created this contract. The information in a
deployTxData contains additional private information that does not
exist in [FoundContract.deployTxData](FoundContract.md#deploytxdata) because certain private data is only available to
the deployer of a contract.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
