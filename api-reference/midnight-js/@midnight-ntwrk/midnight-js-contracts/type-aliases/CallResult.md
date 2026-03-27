[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResult

# Type Alias: CallResult\<C, PCK\>

> **CallResult**\<`C`, `PCK`\> = `object`

Contains all information resulting from circuit execution.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Properties

### private

> `readonly` **private**: [`CallResultPrivate`](CallResultPrivate.md)\<`C`, `PCK`\>

The private/sensitive data produced by the circuit execution.

***

### public

> `readonly` **public**: [`CallResultPublic`](CallResultPublic.md)

The public/non-sensitive data produced by the circuit execution.
