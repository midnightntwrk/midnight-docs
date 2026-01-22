**Midnight.js API Reference v2.0.2**

***

# Midnight.js

Midnight.js is a Typescript-based application development framework for the 
Midnight blockchain. Analogous to [Web3.js](https://web3js.org/) for Ethereum, or
[polkadot.js](https://polkadot.js.org/) for Polkadot, it contains utilities for:

- Creating and submitting transactions
- Interacting with wallets
- Querying for block and state information
- Subscribing to chain events

Due to the privacy-preservation properties of the Midnight system, Midnight.js also 
contains a number of utilities that are unique to it:

- Executing smart contracts locally
- Incorporating private state into contract execution
- Persisting, querying, and updating private state
- Creating and verifying zero-knowledge proofs

## Package structure

- `types` - Contains types and interfaces common to all other packages.
- `contracts` - Contains utilities for interacting with Midnight smart contracts.
- `indexer-public-data-provider` - Contains a cross-environment implementation of a Midnight indexer client.
- `node-zk-config-provider` - Contains a file system based Node.js utility for retrieving zero-knowledge artifacts.
- `fetch-zk-config-provider` - Contains a [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) based cross-environment utility for retrieving zero-knowledge artifacts.
- `network-id` - Contains utilities for setting the network id used by `ledger`, `zswap`, and `compact-runtime` dependencies.
- `http-client-proof-provider` - Contains a cross-environment implementation of a proof-server client.
- `level-private-state-provider` - Contains a cross-environment implementation of a persistent private state store based on [Level](https://github.com/Level/level).
