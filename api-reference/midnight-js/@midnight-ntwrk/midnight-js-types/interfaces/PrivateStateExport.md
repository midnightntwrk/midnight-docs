[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / PrivateStateExport

# Interface: PrivateStateExport

Represents the exported private state data structure.
All metadata is included in the encrypted payload to prevent tampering.

## Properties

### encryptedPayload

> `readonly` **encryptedPayload**: `string`

Encrypted payload containing version, metadata, and serialized private states.
Format: base64-encoded AES-256-GCM encrypted JSON.

***

### format

> `readonly` **format**: `"midnight-private-state-export"`

Format identifier. Must be 'midnight-private-state-export'.

***

### salt

> `readonly` **salt**: `string`

Salt used for key derivation (hex-encoded, 32 bytes / 64 characters).
Required for decryption with the export password.
