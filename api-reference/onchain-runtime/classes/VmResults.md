[**@midnight-ntwrk/onchain-runtime v2.0.0-rc.2**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / VmResults

# Class: VmResults

Represents the results of a VM call

## Properties

### events

```ts
readonly events: GatherResult[];
```

The events that got emitted by this VM invocation

***

### gasCost

```ts
readonly gasCost: RunningCost;
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

##### compact?

`boolean`

#### Returns

`string`
