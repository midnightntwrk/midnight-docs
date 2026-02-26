[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

## Methods

### build()

> **build**(): `Promise`\<`WalletFacade`\>

#### Returns

`Promise`\<`WalletFacade`\>

***

### buildWithoutStarting()

> **buildWithoutStarting**(): `Promise`\<\{ `keystore`: `UnshieldedKeystore`; `seeds`: [`WalletSeeds`](WalletSeeds.md); `wallet`: `WalletFacade`; \}\>

#### Returns

`Promise`\<\{ `keystore`: `UnshieldedKeystore`; `seeds`: [`WalletSeeds`](WalletSeeds.md); `wallet`: `WalletFacade`; \}\>

***

### withDustOptions()

> **withDustOptions**(`options`): `FluentWalletBuilder`

#### Parameters

##### options

[`DustWalletOptions`](../interfaces/DustWalletOptions.md)

#### Returns

`FluentWalletBuilder`

***

### withMnemonic()

> **withMnemonic**(`mnemonic`): `FluentWalletBuilder`

#### Parameters

##### mnemonic

`string`

#### Returns

`FluentWalletBuilder`

***

### withRandomSeed()

> **withRandomSeed**(): `FluentWalletBuilder`

#### Returns

`FluentWalletBuilder`

***

### withSeed()

> **withSeed**(`seed`): `FluentWalletBuilder`

#### Parameters

##### seed

`string`

#### Returns

`FluentWalletBuilder`

***

### withTestWallet()

> **withTestWallet**(): `FluentWalletBuilder`

#### Returns

`FluentWalletBuilder`

***

### forEnvironment()

> `static` **forEnvironment**(`envConfig`): `FluentWalletBuilder`

#### Parameters

##### envConfig

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

#### Returns

`FluentWalletBuilder`
