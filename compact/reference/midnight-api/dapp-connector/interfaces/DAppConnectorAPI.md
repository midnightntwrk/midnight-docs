[**@midnight-ntwrk/dapp-connector-api v3.0.0**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / DAppConnectorAPI

# Interface: DAppConnectorAPI

DApp Connector API Definition

When errors occur in functions returning a promise, they should be thrown in the form of an [APIError](../classes/APIError.md).

## Properties

### apiVersion

> **apiVersion**: `string`

Semver string. DApps are encouraged to check the compatibility whenever this changes.

***

### enable()

> **enable**: () => `Promise`\<[`DAppConnectorWalletAPI`](DAppConnectorWalletAPI.md)\>

Request access to the wallet, returns the wallet api on approval

#### Returns

`Promise`\<[`DAppConnectorWalletAPI`](DAppConnectorWalletAPI.md)\>

***

### isEnabled()

> **isEnabled**: () => `Promise`\<`boolean`\>

Check if the wallet has authorized the dapp

#### Returns

`Promise`\<`boolean`\>

***

### name

> **name**: `string`

The name of the wallet

***

### serviceUriConfig()

> **serviceUriConfig**: () => `Promise`\<[`ServiceUriConfig`](ServiceUriConfig.md)\>

Request the services (indexer, node, and proof server) URIs.

#### Returns

`Promise`\<[`ServiceUriConfig`](ServiceUriConfig.md)\>
