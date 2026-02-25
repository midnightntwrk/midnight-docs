[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResult

# Type Alias: CallResult\<C, ICK\>

> **CallResult**\<`C`, `ICK`\> = `object`

Contains all information resulting from circuit execution.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### ICK

`ICK` *extends* `Contract.ImpureCircuitId`\<`C`\>

## Properties

### private

> `readonly` **private**: [`CallResultPrivate`](CallResultPrivate.md)\<`C`, `ICK`\>

The private/sensitive data produced by the circuit execution.

***

### public

> `readonly` **public**: [`CallResultPublic`](CallResultPublic.md)

The public/non-sensitive data produced by the circuit execution.
