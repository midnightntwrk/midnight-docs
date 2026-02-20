[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-level-private-state-provider](../README.md) / LevelPrivateStateProviderConfig

# Interface: LevelPrivateStateProviderConfig

Configuration properties for the LevelDB based private state provider.

## Properties

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
The password must be at least 16 characters long.

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
