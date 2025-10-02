[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / QueryContext

# Class: QueryContext

Provides the information needed to fully process a transaction, including
information about the rest of the transaction, and the state of the chain at
the time of execution.

## Constructors

### Constructor

```ts
new QueryContext(state, address): QueryContext;
```

Construct a basic context from a contract's address and current state
value

#### Parameters

##### state

[`StateValue`](StateValue.md)

##### address

`string`

#### Returns

`QueryContext`

## Properties

### address

```ts
readonly address: string;
```

The address of the contract

***

### block

```ts
block: BlockContext;
```

The block-level information accessible to the contract

***

### comIndicies

```ts
readonly comIndicies: Map<string, bigint>;
```

The commitment indices map accessible to the contract, primarily via
[qualify](#qualify)

***

### effects

```ts
effects: Effects;
```

The effects that occurred during execution against this context, should
match those declared in a [Transcript](../type-aliases/Transcript.md)

***

### state

```ts
readonly state: StateValue;
```

The current contract state retained in the context

## Methods

### insertCommitment()

```ts
insertCommitment(comm, index): QueryContext;
```

Register a given coin commitment as being accessible at a specific index,
for use when receiving coins in-contract, and needing to record their
index to later spend them

#### Parameters

##### comm

`string`

##### index

`bigint`

#### Returns

`QueryContext`

***

### ~~intoTranscript()~~

```ts
intoTranscript(program, cost_model): [
  | undefined
  | Transcript<AlignedValue>, 
  | undefined
  | Transcript<AlignedValue>];
```

Finalizes a sequence of operations against their initial context,
resulting in a guaranteed and fallible [Transcript](../type-aliases/Transcript.md), optimally
allocated, and heuristically covered for gas fees.

#### Parameters

##### program

[`Op`](../type-aliases/Op.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>[]

##### cost\_model

[`CostModel`](CostModel.md)

#### Returns

\[
  \| `undefined`
  \| `Transcript`\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>, 
  \| `undefined`
  \| `Transcript`\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>\]

#### Deprecated

Please use the ledger's `partitionTranscripts` instead.

***

### qualify()

```ts
qualify(coin): undefined | Value;
```

**`Internal`**

Internal counterpart to [insertCommitment](#insertcommitment); upgrades an encoded
[CoinInfo](../type-aliases/CoinInfo.md) to an encoded [QualifiedCoinInfo](../type-aliases/QualifiedCoinInfo.md) using the
inserted commitments

#### Parameters

##### coin

[`Value`](../type-aliases/Value.md)

#### Returns

`undefined` \| [`Value`](../type-aliases/Value.md)

***

### query()

```ts
query(
   ops, 
   cost_model, 
   gas_limit?): QueryResults;
```

Runs a sequence of operations in gather mode, returning the results of the
gather.

#### Parameters

##### ops

[`Op`](../type-aliases/Op.md)\<`null`\>[]

##### cost\_model

[`CostModel`](CostModel.md)

##### gas\_limit?

`bigint`

#### Returns

[`QueryResults`](QueryResults.md)

***

### runTranscript()

```ts
runTranscript(transcript, cost_model): QueryContext;
```

Runs a transcript in verifying mode against the current query context,
outputting a new query context, with the [state](#state) and [effects](#effects)
from after the execution.

#### Parameters

##### transcript

`Transcript`\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

##### cost\_model

[`CostModel`](CostModel.md)

#### Returns

`QueryContext`

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
