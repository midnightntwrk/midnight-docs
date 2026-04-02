[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / APIError

# Type Alias: APIError

> **APIError** = `Error` & `object`

Declaration of the error type thrown by the DApp Connector.

It is not a class extending the base `Error` type, because
it would make it difficult to implement in a way where `instanceof APIError` would work.
Instead a check like `error.type === 'DAppConnectorAPIError'` should be used.

## Type Declaration

### code

> **code**: [`ErrorCode`](ErrorCode.md)

The code of the error that's thrown

### reason

> **reason**: `string`

The reason the error is thrown

### type

> **type**: `"DAppConnectorAPIError"`

indication it is a DApp Connector Error
