[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / HintUsage

# Type Alias: HintUsage

> **HintUsage** = `object`

## Methods

### hintUsage()

> **hintUsage**(`methodNames`): `Promise`\<`void`\>

Hint usage of methods to the wallet.

DApps should use this method to hint to the wallet what methods are expected to be used
in a certain context (be it a whole session, single view, or a user flow - it is up to DApp).
The wallet can use these calls as an opportunity to ask user for permissions and in such case - resolve the promise only after the user has granted the permissions.

#### Parameters

##### methodNames

keyof [`WalletConnectedAPI`](WalletConnectedAPI.md)[]

#### Returns

`Promise`\<`void`\>
