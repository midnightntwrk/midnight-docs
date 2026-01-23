**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / ContractDeploy

# Class: ContractDeploy

A contract deployment segment, instructing the creation of a new contract
address, if not already present

## Constructors

### new ContractDeploy(initial_state)

```ts
new ContractDeploy(initial_state): ContractDeploy
```

Creates a deployment for an arbitrary contract state

The deployment and its address are randomised.

#### Parameters

• **initial\_state**: [`ContractState`](ContractState.md)

#### Returns

[`ContractDeploy`](ContractDeploy.md)

## Properties

### address

```ts
readonly address: string;
```

The address this deployment will attempt to create

***

### initialState

```ts
readonly initialState: ContractState;
```

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
