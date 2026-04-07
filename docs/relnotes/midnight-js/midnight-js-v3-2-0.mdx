# Release Notes v3.2.0

**Release Date:** March 5, 2026
**Previous Version:** v3.1.0
**Node.js Requirement:** >=22

## Breaking Changes

### LevelPrivateStateProvider: `walletProvider` Option Removed (#528)
The `walletProvider` configuration option has been removed. All instances must now use `privateStoragePasswordProvider`.

- **Before:** `levelPrivateStateProvider({ walletProvider: myWallet })`
- **After:** `levelPrivateStateProvider({ privateStoragePasswordProvider: () => 'password', accountId: 'wallet-address' })`

```typescript
import { levelPrivateStateProvider } from '@midnight-ntwrk/level-private-state-provider';

// v3.2.0 - walletProvider no longer supported
const provider = levelPrivateStateProvider({
  privateStoragePasswordProvider: () => process.env.STORAGE_PASSWORD!,
  accountId: walletAddress
});
```

### LevelPrivateStateProvider: `accountId` Now Required (#545)
The `accountId` configuration option is now mandatory for account-scoped data isolation.

```typescript
const provider = levelPrivateStateProvider({
  privateStoragePasswordProvider: () => 'password',
  accountId: walletAddress // Required - provides data isolation between accounts
});
```

### Auth Token Removed from Compact Fetch (#523)
The `authToken` parameter has been removed from compact fetch operations. Authentication is no longer required for fetching compiled contracts.

## Security Enhancements

### Multi-Version Encryption with Increased PBKDF2 Iterations (#530)
- V2 encryption now uses **600,000 PBKDF2 iterations** (up from 100,000 in V1)
- Automatic migration from V1 to V2 during password rotation
- Enhanced password validation with character class and pattern checks

### Consistent Salt Generation (#534)
- New `getOrCreateSalt` utility prevents race conditions in private state operations
- Salt consistency guaranteed across sequential operations
- Prevents cryptographic issues from concurrent access

### Encryption Caching and Invalidation (#538)
- Encryption keys are cached to avoid repeated PBKDF2 derivation
- New `invalidateEncryptionCache()` API for cache management
- Automatic cache invalidation after password rotation

### Secure Password Rotation (#542)
- New `changePassword()` method for private states
- New `changeSigningKeysPassword()` method for signing keys
- Atomic batch writes ensure all-or-nothing re-encryption
- Rotation locks for safe concurrent read/write operations
- Automatic V1 to V2 migration during rotation

### Account-Scoped Isolation (#545)
- Each `accountId` creates isolated storage namespaces
- Account ID is SHA-256 hashed (32 characters) before use in storage paths
- New `migrateToAccountScoped()` function for transitioning from unscoped storage

### Scoped Transaction Identity Validation (#555)
- New `ScopedTransactionIdentityMismatchError` prevents silent state mismatches
- Identity tracking with `CachedStateIdentity` interface
- Validation ensures batched calls target the same contract and private state

### CI/CD Security Hardening (#493)
- 15 shell injection vulnerabilities fixed across workflow files
- Proper permissions added to documentation workflows
- Pinned workflow dependencies

## Features

### Enhanced URL Handling in HTTP Client Proving Provider (#575)
The `httpClientProvingProvider` now properly handles URLs with existing paths and query parameters. Previously, URLs with paths would be incorrectly overwritten.

```typescript
// Now works correctly with URLs containing paths
const provider = httpClientProvingProvider(
  'https://prover.example.com/api/v1/', // Path is preserved
  zkConfigProvider
);
// Endpoints: /api/v1/check, /api/v1/prove
```

### Signing Key Export/Import (#526)
Export and import signing keys with password protection and conflict resolution.

```typescript
// Export
const keysExport = await provider.exportSigningKeys({ password: 'export-pw' });

// Import with conflict handling
await provider.importSigningKeys(keysExport, {
  password: 'export-pw',
  conflictStrategy: 'skip' // 'skip' | 'overwrite' | 'error'
});
```

### Private State Export/Import (#526)
Export and import private states with the same security features.

```typescript
// Export
provider.setContractAddress(contractAddress);
const statesExport = await provider.exportPrivateStates({ password: 'export-pw' });

// Import
await provider.importPrivateStates(statesExport, {
  password: 'export-pw',
  conflictStrategy: 'overwrite'
});
```

### Password Rotation APIs (#542)

```typescript
// Rotate private state password
provider.setContractAddress(contractAddress);
await provider.changePassword(
  () => 'old-password',
  () => 'new-password'
);

// Rotate signing keys password
await provider.changeSigningKeysPassword(
  () => 'old-password',
  () => 'new-password'
);
```

### Account Migration Support (#545)

```typescript
import { migrateToAccountScoped } from '@midnight-ntwrk/level-private-state-provider';

const result = await migrateToAccountScoped({ accountId: walletAddress });
// Original data preserved for rollback
```

### Mnemonic-Based Wallet in Testkit (#524)
New testkit helpers for mnemonic-based wallet generation.

```typescript
import { FluentWalletBuilder } from '@midnight-ntwrk/testkit';

const wallet = new FluentWalletBuilder()
  .withMnemonic('your mnemonic phrase...')
  .build();

// Or use predefined test wallet
const testWallet = new FluentWalletBuilder()
  .withTestWallet()
  .build();
```

### Browser Storage Warning (#526)
Automatic warning when using LevelDB storage in browser environments, alerting users to data persistence risks.

### Testkit Test Environments (#592)
Added support for preprod and preview test environments in testkit-js. Developers can now easily configure tests against different Midnight network environments using the `MN_TEST_ENVIRONMENT` variable.

```typescript
import { getTestEnvironment, createLogger } from '@midnight-ntwrk/testkit-js';

const logger = createLogger();
const testEnvironment = getTestEnvironment(logger);
const config = await testEnvironment.start();

// config provides: indexer, indexerWS, node, nodeWS, faucet, proofServer
```

```bash
# Run tests against preprod network
MN_TEST_ENVIRONMENT='preprod' yarn test

# Run tests against preview network
MN_TEST_ENVIRONMENT='preview' yarn test
```

## Bug Fixes

### WASM Payload Buffer Copy (#596)
Fixed a critical issue where `payload.buffer` on a WASM subarray view was returning the entire WASM linear memory heap instead of the referenced bytes. This was sending megabytes of unrelated memory to the proof server, causing parse failures like `BadInput("Unsupported ZKIR version")` or corrupt field values. The fix replaces `payload.buffer` with `new Uint8Array(payload)` which copies only the view's bytes.

### Zswap Chain State Handling (#543)
Fixed an issue where the initial Zswap chain state was incorrectly merged instead of being reused, potentially causing state inconsistencies.

### Lodash Dependency Removed (#556)
Removed lodash dependency and replaced usage with native object spread, reducing bundle size and eliminating a dependency.

### Fail Fast on Unset Network ID (#604)
Network ID validation now fails immediately with a clear error message when the network ID is not set, instead of silently proceeding and causing cryptic failures downstream.

### TransactionContext Excluded from Circuit Call Arguments
Fixed an issue where `TransactionContext` was incorrectly included in circuit call arguments, which could cause unexpected behavior in contract interactions.

### Direnv Installation Auth (#562)
Fixed direnv installation to use `GITHUB_TOKEN` for authentication, resolving CI failures.

### Dependabot NPM Registry Auth (#505)
Added npm registry authentication for Dependabot to access private packages.

## Refactoring

### Wallet State Provider Types (#529)
Updated wallet state provider to use `ShieldedWalletAPI` and `UnshieldedWalletAPI` types for improved type specificity.

## Dependencies

### Runtime Dependencies Updated
- `@midnight-ntwrk/wallet-sdk-facade`: 2.0.0
- `@midnight-ntwrk/compact-js`: 2.4.3
- `@midnight-ntwrk/compactc`: 0.29.0

### Development Dependencies Updated
- `@fast-check/vitest`: 0.3.0
- `@rollup/plugin-commonjs`: 29.0.0
- `@graphql-codegen/typescript-operations`: Updated (#539)
- `testcontainers`: 11.12.0
- `tstyche`: 6.2.0
- `jsdom`: 28.1.0
- `glob`: 13.0.4
- `fast-xml-parser`: Updated (#617)
- `typedoc-plugin-markdown`: 4.10.0
- `eslint-plugin-unused-imports`: 4.4.1
- `axios`: Updated for security fixes
- `tar`: Updated for security fixes
- `lodash`: 4.17.23 (then removed in #556)
- `actions/cache`: 5.0.3
- `actions/setup-node`: 6.2.0
- `peter-evans/create-pull-request`: 8.1.0
- `MishaKav/jest-coverage-comment`: 1.0.30

## Testing

- Added comprehensive integration tests for Level Private State Provider export/import functionality (#578)
- Added test environments for preprod and preview networks in testkit (#592)

## Documentation

- Added llms.txt, AGENTS.md, and CLAUDE.md for AI agent guidance (#579)
- Comprehensive README update for `levelPrivateStateProvider` (#563)
- README updates for various Midnight.js modules with installation and usage details (#576)
- HTTP client proof provider documentation with usage examples (#575)
- API documentation updates (#504, #531, #544, #557, #559)
- Storage architecture and data flow diagrams
- Password requirements and security specifications
- Updated `compact` references to `compactc` (#580)
- Added containers configuration section to testkit-js README (#613)
- Added development documentation (#590)

## Links

- [Breaking Changes Details](./breaking-changes.md)
- [New Features Guide](./new-features.md)
- [Migration Guide](./migration-guide.md)
- [API Changes Reference](./api-changes.md)
- [GitHub Repository](https://github.com/midnightntwrk/midnight-js)
