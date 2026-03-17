[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / ConnectedAPI

# Type Alias: ConnectedAPI

> **ConnectedAPI** = [`WalletConnectedAPI`](WalletConnectedAPI.md) & [`HintUsage`](HintUsage.md)

Connected API. It allows DApp to perform a range ofactions on the wallet after it is connected. Specifically the operations provided are:
- interaction with wallet - [WalletConnectedAPI](WalletConnectedAPI.md) covers those
- hint usage of methods to the wallet (to help with permissions management)
