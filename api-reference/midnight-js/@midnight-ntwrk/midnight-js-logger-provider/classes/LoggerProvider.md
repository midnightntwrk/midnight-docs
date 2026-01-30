[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-logger-provider](../README.md) / LoggerProvider

# Class: LoggerProvider

Implementation of LoggerProvider that returns a Logger instance.

## Constructors

### Constructor

> **new LoggerProvider**(`logger`): `LoggerProvider`

#### Parameters

##### logger

`Logger`

#### Returns

`LoggerProvider`

## Properties

### debug

> **debug**: `LogFn`

***

### error

> **error**: `LogFn`

***

### fatal

> **fatal**: `LogFn`

***

### info

> **info**: `LogFn`

***

### trace

> **trace**: `LogFn`

***

### warn

> **warn**: `LogFn`

## Methods

### isLevelEnabled()

> **isLevelEnabled**(`level`): `boolean`

#### Parameters

##### level

[`LogLevel`](../../midnight-js-types/enumerations/LogLevel.md)

#### Returns

`boolean`
