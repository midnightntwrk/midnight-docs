[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / UnreadableSignature

# Type Alias: UnreadableSignature

```ts
type UnreadableSignature = {
  argumentIndex?: number;
  circuitId: CircuitId;
  unreadableTag: string;
};
```

A type in a module's signatures this build can't read: an unknown constructor, or a known one
whose payload is not what that constructor carries. Distinct from a violation, which says
something different from what was asked for; this says something we can't read at all.

## Properties

### argumentIndex?

```ts
readonly optional argumentIndex: number;
```

***

### circuitId

```ts
readonly circuitId: CircuitId;
```

***

### unreadableTag

```ts
readonly unreadableTag: string;
```
