[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractDeploy

# Class: ContractDeploy

A contract deployment segment, instructing the creation of a new contract
address, if not already present

## Constructors

### Constructor

```ts
new ContractDeploy(initial_state): ContractDeploy;
```

Creates a deployment for an arbitrary contract state

The deployment and its address are randomised.

#### Parameters

##### initial\_state

[`ContractState`](ContractState.md)

#### Returns

`ContractDeploy`

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
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
