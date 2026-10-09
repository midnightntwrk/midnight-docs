[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-level-private-state-provider](../README.md) / LevelPrivateStateProviderConfig

# Interface: LevelPrivateStateProviderConfig

Configuration properties for the LevelDB based private state provider.

## Properties

### accountId

> `readonly` **accountId**: `string`

Account identifier used to scope storage. This ensures data isolation
between different accounts/wallets using the same database.

The accountId is hashed (SHA-256, first 32 chars) before being used
in storage paths, so any unique identifier can be used (e.g., wallet address).

#### Example

```typescript
{
  accountId: walletAddress
}
```

***

### cryptoBackend?

> `readonly` `optional` **cryptoBackend?**: [`CryptoBackendType`](../type-aliases/CryptoBackendType.md)

***

### levelFactory?

> `readonly` `optional` **levelFactory?**: [`LevelFactory`](../type-aliases/LevelFactory.md)

***

### midnightDbName

> `readonly` **midnightDbName**: `string`

The name of the LevelDB database used to store all Midnight related data.

***

### privateStateStoreName

> `readonly` **privateStateStoreName**: `string`

The name of the object store containing private states.

***

### privateStoragePasswordProvider

> `readonly` **privateStoragePasswordProvider**: [`PrivateStoragePasswordProvider`](../type-aliases/PrivateStoragePasswordProvider.md)

Provider function that returns the password used for encrypting private state.

The password must satisfy the strength policy enforced by `validatePassword`
from `@midnight-ntwrk/midnight-js-utils`:
- minimum 16 characters
- at least 3 of: uppercase, lowercase, digits, special characters
- no more than 3 consecutive identical characters
- no sequential patterns of length 4+ (e.g. `1234`, `abcd`)

The same policy is applied to custom passwords passed to
PrivateStateProvider.exportPrivateStates / `exportSigningKeys` and
their `importPrivateStates` / `importSigningKeys` counterparts. Violations
surface as `PasswordValidationError` on storage paths, or wrapped as
`PrivateStateExportError` / `SigningKeyExportError` (with `cause`) on
export/import paths.

SECURITY: Use a strong, secret password. Never use public key material
or other non-secret values as the password source.

#### Example

```typescript
{
  privateStoragePasswordProvider: async () => await getSecretPassword()
}
```

***

### signingKeyStoreName

> `readonly` **signingKeyStoreName**: `string`

The name of the object store containing signing keys.
