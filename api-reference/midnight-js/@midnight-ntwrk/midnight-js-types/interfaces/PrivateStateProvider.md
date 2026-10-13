[**Midnight.js API Reference v4.1.0**](../../../README.md)

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

If no states exist to export, the state
  limit is exceeded, or a caller-supplied `options.password` does not
  satisfy the minimum-length policy.

#### Throws

If implementations require a scoped operating context (for
  example, an account or contract address) and that context is not set.

#### Throws

If the password returned by the configured password provider
  does not satisfy the minimum strength policy (validation runs on
  every invocation).

#### Throws

If reading existing entries fails for any of the reasons listed
  on [PrivateStateProvider.get](#get) (decryption failure, rotation
  lock timeout, store I/O).

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

If no keys exist to export, the key limit
  is exceeded, or a caller-supplied `options.password` does not satisfy
  the minimum-length policy.

#### Throws

If the password returned by the configured password provider
  does not satisfy the minimum strength policy (validation runs on
  every invocation).

#### Throws

If reading existing entries fails for any of the reasons listed
  on [PrivateStateProvider.getSigningKey](#getsigningkey).

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

The stored private state, or `null` if either:
  - the key is absent from the underlying store, or
  - the stored value deserializes to `undefined`.

  Callers should treat both `null` outcomes equivalently as "no usable
  value". The provider does not distinguish between an absent key and an
  explicitly-undefined stored value; if the distinction matters for your
  application, store a sentinel value instead.

#### Throws

If `setContractAddress` has not been called prior to invocation.

#### Throws

If the password returned by the configured password provider does
  not satisfy the minimum strength policy. Validation runs on every
  invocation against the password returned by the provider. It is not
  cached.

#### Throws

If decryption of the stored value fails (wrong password, salt
  mismatch, unsupported encryption version, or authentication tag
  mismatch). Decryption errors are propagated to the caller and do **not**
  collapse to `null`.

#### Throws

If a concurrent password rotation does not release its lock
  within the internal default timeout (5 minutes on the read path; the
  read path does not expose a configuration knob).

#### Throws

Underlying store I/O errors are propagated; callers should not
  include them in user-facing messages without redacting paths and
  OS-level metadata.

#### Remarks

Implementations may lazily migrate legacy or unencrypted entries on
read, which means a successful logical read can trigger a write to the
underlying store. In read-only environments (mounted-read-only file
systems, quota-exhausted backends), `get` may reject with an I/O error
even when the value is present and decryptable. The list of decryption
failure modes above is illustrative, not exhaustive: payload
encoding/parse errors, crypto-backend availability errors, and other
corruption modes are also surfaced as throws rather than `null`.

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

The stored signing key, or `null` if either:
  - no signing key is stored for the given address, or
  - the stored value deserializes to `undefined`.

  Callers should treat both `null` outcomes equivalently as "no usable
  value".

#### Throws

If the password returned by the configured password provider does
  not satisfy the minimum strength policy. Validation runs on every
  invocation against the password returned by the provider. It is not
  cached.

#### Throws

If decryption of the stored value fails (wrong password, salt
  mismatch, unsupported encryption version, or authentication tag
  mismatch). Decryption errors are propagated to the caller and do **not**
  collapse to `null`.

#### Throws

If a concurrent password rotation does not release its lock
  within the internal default timeout (5 minutes on the read path; the
  read path does not expose a configuration knob).

#### Throws

Underlying store I/O errors are propagated; callers should not
  include them in user-facing messages without redacting paths and
  OS-level metadata.

#### Remarks

Unlike [PrivateStateProvider.get](#get), this method does **not** require
[PrivateStateProvider.setContractAddress](#setcontractaddress) to have been called first:
the contract address is supplied as an argument.

Implementations may lazily migrate legacy or unencrypted entries on
read, which means a successful logical read can trigger a write to the
underlying store. In read-only environments, `getSigningKey` may reject
with an I/O error even when the value is present and decryptable. The
list of decryption failure modes above is illustrative, not exhaustive:
payload encoding/parse errors, crypto-backend availability errors,
and other corruption modes are also surfaced as throws rather than
`null`.

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

#### Throws

If a caller-supplied `options.password`
  does not satisfy the minimum-length policy.

#### Throws

If implementations require a scoped operating context (for
  example, an account or contract address) and that context is not set.

#### Throws

If reading or writing the underlying store fails for any of the
  reasons listed on [PrivateStateProvider.get](#get) or
  [PrivateStateProvider.set](#set).

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

#### Throws

If a caller-supplied `options.password`
  does not satisfy the minimum-length policy.

#### Throws

If reading or writing the underlying store fails for any of the
  reasons listed on [PrivateStateProvider.getSigningKey](#getsigningkey) or
  [PrivateStateProvider.setSigningKey](#setsigningkey).

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
