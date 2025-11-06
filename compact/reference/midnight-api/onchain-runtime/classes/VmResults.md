**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / VmResults

# Class: VmResults

Represents the results of a VM call

## Constructors

### new VmResults()

```ts
private new VmResults(): VmResults
```

#### Returns

[`VmResults`](VmResults.md)

## Properties

### events

```ts
readonly events: GatherResult[];
```

The events that got emitted by this VM invocation

***

### gasCost

```ts
readonly gasCost: bigint;
```

The computed gas cost of running this VM invocation

***

### stack

```ts
readonly stack: VmStack;
```

The VM stack at the end of the VM invocation

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
