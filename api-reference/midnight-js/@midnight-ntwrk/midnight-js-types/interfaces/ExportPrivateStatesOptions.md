[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ExportPrivateStatesOptions

# Interface: ExportPrivateStatesOptions

Options for exporting private states.

## Properties

### maxStates?

> `readonly` `optional` **maxStates**: `number`

Maximum number of states to export.
Defaults to MAX_EXPORT_STATES (10000).
Set to a lower value to limit memory usage.

***

### password?

> `readonly` `optional` **password**: `string`

Password used to encrypt the export.
Must be at least 16 characters.
If not provided, uses the storage password.
