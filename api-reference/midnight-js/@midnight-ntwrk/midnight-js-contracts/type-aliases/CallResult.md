[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResult

# Type Alias: CallResult\<C, PCK\>

> **CallResult**\<`C`, `PCK`\> = `object`

Contains all information resulting from circuit execution.

## Remarks

**Privacy-sensitive type.** The `private` field is a
[CallResultPrivate](CallResultPrivate.md) carrying ZK-confidential data. Treat the whole
object as confidential when logging, serializing, or transmitting: read
only the `public` field or destructure specific non-sensitive fields rather
than spreading or stringifying the whole object.

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
