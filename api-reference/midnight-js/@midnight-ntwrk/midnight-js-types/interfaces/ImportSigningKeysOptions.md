[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ImportSigningKeysOptions

# Interface: ImportSigningKeysOptions

Options for importing signing keys.

## Properties

### conflictStrategy?

> `readonly` `optional` **conflictStrategy**: `"error"` \| `"skip"` \| `"overwrite"`

How to handle conflicts when a signing key already exists for an address.
- 'skip': Keep existing key, ignore imported key
- 'overwrite': Replace existing key with imported key
- 'error': Throw an error if any conflict is detected
Default: 'error'

***

### maxKeys?

> `readonly` `optional` **maxKeys**: `number`

Maximum number of keys to import.
Defaults to MAX_EXPORT_SIGNING_KEYS (10000).
Set to a lower value to limit memory usage.

***

### password?

> `readonly` `optional` **password**: `string`

Password used to decrypt the import.
Must match the password used during export.
If not provided, uses the storage password.
