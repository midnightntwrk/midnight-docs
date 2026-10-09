[**@midnight/ledger v8.1.2**](../README.md)

***

[@midnight/ledger](../globals.md) / EventSource

# Type Alias: EventSource

```ts
type EventSource = {
  logicalSegment: number;
  physicalSegment: number;
  transactionHash: TransactionHash;
};
```

Where an event originated from

## Properties

### logicalSegment

```ts
logicalSegment: number;
```

The logical event segment, that is, during which segment's execution the
event was emitted.

***

### physicalSegment

```ts
physicalSegment: number;
```

The physical event segment, that is, the segment of the transaction this
event's trigger is contained in.

***

### transactionHash

```ts
transactionHash: TransactionHash;
```

The hash of the originating transaction.
