[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

Configuration interface for Midnight contracts.

## Properties

### privateStateStoreName

> `readonly` **privateStateStoreName**: `string`

Name of the store used for persisting private state data.
This is used as a base name - a signing key store will also be created with "-signing-keys" appended.

***

### zkConfigPath

> `readonly` **zkConfigPath**: `string`

File system path to the zero-knowledge proof configuration files.
This should point to the directory containing the circuit verification keys and other ZK artifacts.
