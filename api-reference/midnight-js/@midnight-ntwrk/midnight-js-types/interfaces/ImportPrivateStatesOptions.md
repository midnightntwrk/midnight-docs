[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ImportPrivateStatesOptions

# Interface: ImportPrivateStatesOptions

Options for importing private states.

## Properties

### conflictStrategy?

> `readonly` `optional` **conflictStrategy**: `"error"` \| `"skip"` \| `"overwrite"`

How to handle conflicts when a private state ID already exists.
- 'skip': Keep existing state, ignore imported state
- 'overwrite': Replace existing state with imported state
- 'error': Throw an error if any conflict is detected
Default: 'error'

***

### maxStates?

> `readonly` `optional` **maxStates**: `number`

Maximum number of states to import.
Defaults to MAX_EXPORT_STATES (10000).
Set to a lower value to limit memory usage.

***

### password?

> `readonly` `optional` **password**: `string`

Password used to decrypt the import.
Must match the password used during export.
If not provided, uses the storage password.
