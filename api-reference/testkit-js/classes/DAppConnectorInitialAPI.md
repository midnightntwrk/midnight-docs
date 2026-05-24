[**@midnight-ntwrk/testkit-js v4.0.4**](../README.md)

***

## Implements

- `InitialAPI`

## Constructors

### Constructor

> **new DAppConnectorInitialAPI**(`connectedWallet`, `networkId`, `options?`): `DAppConnectorInitialAPI`

#### Parameters

##### connectedWallet

`ConnectedAPI`

##### networkId

`string`

##### options?

###### apiVersion?

`string`

###### icon?

`string`

###### name?

`string`

###### rdns?

`string`

#### Returns

`DAppConnectorInitialAPI`

## Properties

### apiVersion

> `readonly` **apiVersion**: `string`

Version of the API implemented by this instance of the API, string containing a version of the API package @midnight-ntwrk/dapp-connector-api that was used in implementation
E.g. wallet implementing version 3.1.5 provides apiVersion with value '3.1.5'
This value lets DApps to differentiate between different versions of the API and implement appropriate logic for each version or not use some versions at all

#### Implementation of

`InitialAPI.apiVersion`

***

### icon

> `readonly` **icon**: `string`

Wallet icon, as an URL, either reference to a hosted resource, or a base64 encoded data URL. It is expected
to be displayed to the user. Because of this, DApps need to display the icon in a secure fashion to prevent XSS.
For example, displaying the icon using an `img` tag.

#### Implementation of

`InitialAPI.icon`

***

### name

> `readonly` **name**: `string`

Wallet name, expected to be displayed to the user.
As such, DApps need to sanitize the name to prevent XSS when displaying it to the user. An example
of sanitization is displaying the name using a text node.

#### Implementation of

`InitialAPI.name`

***

### rdns

> `readonly` **rdns**: `string`

Wallet identifier, in a reverse DNS notation (e.g. `com.example.wallet`).
Wallets should keep this identifier stable throughout the lifecycle of the product.
DApps can use this property to identify the wallet, but should be prepared to handle
values that are unknown, invalid, or potentially misleading, similar to handling user agent strings in web browsers.

#### Implementation of

`InitialAPI.rdns`

## Methods

### connect()

> **connect**(`networkId`): `Promise`\<`ConnectedAPI`\>

Connect to wallet, hinting desired network id; Use 'mainnet' for mainnet.

#### Parameters

##### networkId

`string`

#### Returns

`Promise`\<`ConnectedAPI`\>

#### Implementation of

`InitialAPI.connect`
