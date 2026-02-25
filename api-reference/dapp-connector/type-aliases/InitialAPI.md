[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / InitialAPI

# Type Alias: InitialAPI

> **InitialAPI** = `object`

Initial API for a wallet providing a DApp Connector API - it contains the information and methods allowing DApp to
chose and initiate a connection to the wallet.
Wallets inject their Initial API under the `window.midnight` object.
A single wallet can inject multiple instances of the Initial API, e.g. when supporting multiple versions.
Together with UUID under which the initial API is installed, the contents are compatible with the [draft of CAIP-372](https://github.com/ChainAgnostic/CAIPs/pull/372/files).

## Properties

### apiVersion

> **apiVersion**: `string`

Version of the API implemented by this instance of the API, string containing a version of the API package @midnight-ntwrk/dapp-connector-api that was used in implementation
E.g. wallet implementing version 3.1.5 provides apiVersion with value '3.1.5'
This value lets DApps to differentiate between different versions of the API and implement appropriate logic for each version or not use some versions at all

***

### connect()

> **connect**: (`networkId`) => `Promise`\<[`ConnectedAPI`](ConnectedAPI.md)\>

Connect to wallet, hinting desired network id; Use 'mainnet' for mainnet.

#### Parameters

##### networkId

`string`

#### Returns

`Promise`\<[`ConnectedAPI`](ConnectedAPI.md)\>

***

### icon

> **icon**: `string`

Wallet icon, as an URL, either reference to a hosted resource, or a base64 encoded data URL. It is expected
to be displayed to the user. Because of this, DApps need to display the icon in a secure fashion to prevent XSS.
For example, displaying the icon using an `img` tag.

***

### name

> **name**: `string`

Wallet name, expected to be displayed to the user.
As such, DApps need to sanitize the name to prevent XSS when displaying it to the user. An example
of sanitization is displaying the name using a text node.

***

### rdns

> **rdns**: `string`

Wallet identifier, in a reverse DNS notation (e.g. `com.example.wallet`).
Wallets should keep this identifier stable throughout the lifecycle of the product.
DApps can use this property to identify the wallet, but should be prepared to handle
values that are unknown, invalid, or potentially misleading, similar to handling user agent strings in web browsers.
