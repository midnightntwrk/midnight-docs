[**Midnight.js API Reference v2.0.2**](../../../README.md)

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

### get()

> **get**(`privateStateId`): `Promise`\<`null` \| `PS`\>

Retrieve the private state at the given private state ID.

#### Parameters

##### privateStateId

`PSI`

The private state identifier.

#### Returns

`Promise`\<`null` \| `PS`\>

***

### getSigningKey()

> **getSigningKey**(`address`): `Promise`\<`null` \| `string`\>

Retrieve the signing key for a contract.

#### Parameters

##### address

`string`

The address of the contract for which to get the signing key.

#### Returns

`Promise`\<`null` \| `string`\>

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
