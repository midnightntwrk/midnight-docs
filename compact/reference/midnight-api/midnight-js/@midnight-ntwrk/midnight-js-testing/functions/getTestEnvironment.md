[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / getTestEnvironment

# Function: getTestEnvironment()

> **getTestEnvironment**(`logger`): [`LocalTestEnvironment`](../classes/LocalTestEnvironment.md) \| [`QanetTestEnvironment`](../classes/QanetTestEnvironment.md) \| [`DevnetTestEnvironment`](../classes/DevnetTestEnvironment.md) \| [`TestnetTestEnvironment`](../classes/TestnetTestEnvironment.md) \| [`Testnet2TestEnvironment`](../classes/Testnet2TestEnvironment.md) \| [`EnvVarRemoteTestEnvironment`](../classes/EnvVarRemoteTestEnvironment.md)

Returns the appropriate test environment based on the MN_TEST_ENVIRONMENT variable.

## Parameters

### logger

`Logger`

The logger instance to be used by the test environment.

## Returns

[`LocalTestEnvironment`](../classes/LocalTestEnvironment.md) \| [`QanetTestEnvironment`](../classes/QanetTestEnvironment.md) \| [`DevnetTestEnvironment`](../classes/DevnetTestEnvironment.md) \| [`TestnetTestEnvironment`](../classes/TestnetTestEnvironment.md) \| [`Testnet2TestEnvironment`](../classes/Testnet2TestEnvironment.md) \| [`EnvVarRemoteTestEnvironment`](../classes/EnvVarRemoteTestEnvironment.md)

The selected test environment instance.
