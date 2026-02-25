[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / PrivateStateProvider

# Interface: PrivateStateProvider\<PSI, PS\>

Interface for a typed key-valued store containing contract private states.

## Type Parameters

### PSI

`PSI` *extends* [`PrivateStateId`](../type-aliases/PrivateStateId.md) = [`PrivateStateId`](../type-aliases/PrivateStateId.md)

Parameter indicating the private state ID, sometimes a union of string literals.

### PS

`PS` = `any`

Parameter indicating the private state type stored, sometimes a union of private state types.

## Methods

### clear()

> **clear**(): `Promise`\<`void`\>

Remove all contract private states.

#### Returns

`Promise`\<`void`\>

***

### clearSigningKeys()

> **clearSigningKeys**(): `Promise`\<`void`\>

Remove all contract signing keys.

#### Returns

`Promise`\<`void`\>

***

### exportPrivateStates()

> **exportPrivateStates**(`options?`): `Promise`\<[`PrivateStateExport`](PrivateStateExport.md)\>

Export all private states as an encrypted JSON-serializable structure.

NOTE: This does NOT export signing keys for security reasons.

#### Parameters

##### options?

[`ExportPrivateStatesOptions`](ExportPrivateStatesOptions.md)

Export options including optional custom password and state limit.

#### Returns

`Promise`\<[`PrivateStateExport`](PrivateStateExport.md)\>

A JSON-serializable export structure that can be saved or transmitted.

#### Throws

If no states exist to export or limit exceeded.

***

### exportSigningKeys()

> **exportSigningKeys**(`options?`): `Promise`\<[`SigningKeyExport`](SigningKeyExport.md)\>

Export all signing keys as an encrypted JSON-serializable structure.

#### Parameters

##### options?

[`ExportSigningKeysOptions`](ExportSigningKeysOptions.md)

Export options including optional custom password and key limit.

#### Returns

`Promise`\<[`SigningKeyExport`](SigningKeyExport.md)\>

A JSON-serializable export structure that can be saved or transmitted.

#### Throws

If no keys exist to export or limit exceeded.

***

### get()

> **get**(`privateStateId`): `Promise`\<`PS` \| `null`\>

Retrieve the private state at the given private state ID.

#### Parameters

##### privateStateId

`PSI`

The private state identifier.

#### Returns

`Promise`\<`PS` \| `null`\>

***

### getSigningKey()

> **getSigningKey**(`address`): `Promise`\<`string` \| `null`\>

Retrieve the signing key for a contract.

#### Parameters

##### address

`string`

The address of the contract for which to get the signing key.

#### Returns

`Promise`\<`string` \| `null`\>

***

### importPrivateStates()

> **importPrivateStates**(`exportData`, `options?`): `Promise`\<[`ImportPrivateStatesResult`](ImportPrivateStatesResult.md)\>

Import private states from a previously exported structure.

#### Parameters

##### exportData

[`PrivateStateExport`](PrivateStateExport.md)

The export data structure to import.

##### options?

[`ImportPrivateStatesOptions`](ImportPrivateStatesOptions.md)

Import options including password, conflict strategy, and state limit.

#### Returns

`Promise`\<[`ImportPrivateStatesResult`](ImportPrivateStatesResult.md)\>

Result indicating how many states were imported/skipped/overwritten.

#### Throws

If decryption fails (wrong password or corrupted data).

#### Throws

If the export format is invalid or unsupported.

#### Throws

If conflictStrategy is 'error' and conflicts exist.

***

### importSigningKeys()

> **importSigningKeys**(`exportData`, `options?`): `Promise`\<[`ImportSigningKeysResult`](ImportSigningKeysResult.md)\>

Import signing keys from a previously exported structure.

#### Parameters

##### exportData

[`SigningKeyExport`](SigningKeyExport.md)

The export data structure to import.

##### options?

[`ImportSigningKeysOptions`](ImportSigningKeysOptions.md)

Import options including password, conflict strategy, and key limit.

#### Returns

`Promise`\<[`ImportSigningKeysResult`](ImportSigningKeysResult.md)\>

Result indicating how many keys were imported/skipped/overwritten.

#### Throws

If decryption fails (wrong password or corrupted data).

#### Throws

If the export format is invalid or unsupported.

#### Throws

If conflictStrategy is 'error' and conflicts exist.

***

### remove()

> **remove**(`privateStateId`): `Promise`\<`void`\>

Remove the value at the given private state ID.

#### Parameters

##### privateStateId

`PSI`

The private state identifier.

#### Returns

`Promise`\<`void`\>

***

### removeSigningKey()

> **removeSigningKey**(`address`): `Promise`\<`void`\>

Remove the signing key for a contract.

#### Parameters

##### address

`string`

The address of the contract for which to delete the signing key.

#### Returns

`Promise`\<`void`\>

***

### set()

> **set**(`privateStateId`, `state`): `Promise`\<`void`\>

Store the given private state at the given private state ID.

#### Parameters

##### privateStateId

`PSI`

The private state identifier.

##### state

`PS`

The private state to store.

#### Returns

`Promise`\<`void`\>

***

### setContractAddress()

> **setContractAddress**(`address`): `void`

Set the contract address for scoping private state operations.
Must be called before any get/set/remove operations on private states.
This provides namespace isolation between different contracts.

#### Parameters

##### address

`string`

The contract address to scope operations to.

#### Returns

`void`

***

### setSigningKey()

> **setSigningKey**(`address`, `signingKey`): `Promise`\<`void`\>

Store the given signing key at the given address.

#### Parameters

##### address

`string`

The address of the contract having the given signing key.

##### signingKey

`string`

The signing key to store.

#### Returns

`Promise`\<`void`\>
