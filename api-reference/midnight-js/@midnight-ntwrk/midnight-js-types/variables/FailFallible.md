[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / FailFallible

# Variable: FailFallible

> `const` **FailFallible**: `"FailFallible"`

Indicates that the transaction is valid but the portion of the transcript
that is allowed to fail (the portion after a checkpoint) did fail. All effects
from the guaranteed part of the transaction are kept but the effects from the
fallible part of the transaction are discarded.
