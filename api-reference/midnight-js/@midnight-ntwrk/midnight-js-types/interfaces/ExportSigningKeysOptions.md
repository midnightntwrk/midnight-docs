[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ExportSigningKeysOptions

# Interface: ExportSigningKeysOptions

Options for exporting signing keys.

## Properties

### maxKeys?

> `readonly` `optional` **maxKeys**: `number`

Maximum number of keys to export.
Defaults to MAX_EXPORT_SIGNING_KEYS (10000).
Set to a lower value to limit memory usage.

***

### password?

> `readonly` `optional` **password**: `string`

Password used to encrypt the export.
Must be at least 16 characters.
If not provided, uses the storage password.
