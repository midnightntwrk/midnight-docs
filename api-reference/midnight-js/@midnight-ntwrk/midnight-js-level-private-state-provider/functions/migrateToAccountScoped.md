[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-level-private-state-provider](../README.md) / migrateToAccountScoped

# Function: migrateToAccountScoped()

> **migrateToAccountScoped**(`config`): `Promise`\<[`MigrationResult`](../interfaces/MigrationResult.md)\>

Migrates existing unscoped private state and signing key data to account-scoped sublevels.

This function copies data from the legacy unscoped locations to the new account-scoped
locations. The original data is preserved (not deleted) to allow for safe rollback if needed.
To remove old data after successful migration, manually clear the unscoped sublevels.

Note: Running this function multiple times is safe but will re-copy all data, overwriting
any changes made in the scoped location since the last migration.

## Parameters

### config

`Partial`\<[`LevelPrivateStateProviderConfig`](../interfaces/LevelPrivateStateProviderConfig.md)\> & `Pick`\<[`LevelPrivateStateProviderConfig`](../interfaces/LevelPrivateStateProviderConfig.md), `"accountId"`\>

## Returns

`Promise`\<[`MigrationResult`](../interfaces/MigrationResult.md)\>
