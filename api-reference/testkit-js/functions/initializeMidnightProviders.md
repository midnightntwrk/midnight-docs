[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

> **initializeMidnightProviders**\<`ICK`, `PS`\>(`midnightWalletProvider`, `environmentConfiguration`, `contractConfiguration`): `MidnightProviders`\<`ICK`, `string`, `PS`\>

Configures and returns the required providers for a Midnight contract.

## Type Parameters

### ICK

`ICK` *extends* `string`

Type parameter for the input circuit key string

### PS

`PS`

Type parameter for the private state

## Parameters

### midnightWalletProvider

[`MidnightWalletProvider`](../classes/MidnightWalletProvider.md)

The midnightWalletProvider provider instance to use for transactions

### environmentConfiguration

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration for the environment including indexer and proof server details

### contractConfiguration

[`ContractConfiguration`](../interfaces/ContractConfiguration.md)

Configuration specific to the contract including storage names and ZK config path

## Returns

`MidnightProviders`\<`ICK`, `string`, `PS`\>

An object containing all configured providers:
  - privateStateProvider: For managing private contract state
  - publicDataProvider: For accessing public blockchain data
  - zkConfigProvider: For zero-knowledge proof configurations
  - proofProvider: For generating and verifying proofs
  - walletProvider: For midnightWalletProvider operations
  - midnightProvider: For Midnight-specific operations
