[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / exitResultOrError

# Variable: exitResultOrError()

> `const` **exitResultOrError**: \<`A`, `E`\>(`exit`) => `A`

Unwraps an Effect `Exit` instance, returning its value if it is successful, or throwing the error contained
within it.

## Type Parameters

### A

`A`

### E

`E`

## Parameters

### exit

`Exit.Exit`\<`A`, `E`\>

The source Effect `Exit` instance.

## Returns

`A`

The value from `exit` if it is successful, otherwise throws the error contained within it.
