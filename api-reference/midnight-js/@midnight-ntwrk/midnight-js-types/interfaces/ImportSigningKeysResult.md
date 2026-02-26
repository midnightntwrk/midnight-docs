[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ImportSigningKeysResult

# Interface: ImportSigningKeysResult

Result of a signing key import operation.

## Properties

### imported

> `readonly` **imported**: `number`

Number of keys successfully imported.

***

### overwritten

> `readonly` **overwritten**: `number`

Number of keys that overwrote existing keys (when conflictStrategy is 'overwrite').

***

### skipped

> `readonly` **skipped**: `number`

Number of keys skipped due to conflicts (when conflictStrategy is 'skip').
