[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / warnIfInsecureRemoteUrl

# Function: warnIfInsecureRemoteUrl()

> **warnIfInsecureRemoteUrl**(`url`, `label`): `void`

Emits a `console.warn` when `url` uses an unencrypted scheme (`http:` or `ws:`)
targeting a non-loopback host. No-op for encrypted schemes (`https:`, `wss:`),
other schemes, and unparseable input.

Intended to be called once at provider-factory construction time so
misconfigured remote endpoints surface immediately rather than after sensitive
payloads are transmitted in clear text. As a diagnostic helper it never throws:
an unparseable URL will produce errors through other channels (the protocol
checks at every call site already throw `InvalidProtocolSchemeError`), and
crashing the factory from a warning helper would be worse than silence.

## Parameters

### url

`string`

An absolute URL string to inspect (e.g. `https://indexer.example/graphql`).

### label

`string`

Human-readable label used in the warning (e.g. "indexer query URL").

## Returns

`void`
