[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ImportPrivateStatesResult

# Interface: ImportPrivateStatesResult

Result of an import operation.

## Properties

### imported

> `readonly` **imported**: `number`

Number of states successfully imported.

***

### overwritten

> `readonly` **overwritten**: `number`

Number of states that overwrote existing states (when conflictStrategy is 'overwrite').

***

### skipped

> `readonly` **skipped**: `number`

Number of states skipped due to conflicts (when conflictStrategy is 'skip').
