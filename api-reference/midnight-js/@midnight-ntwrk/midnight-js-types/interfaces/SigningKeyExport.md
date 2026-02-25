[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / SigningKeyExport

# Interface: SigningKeyExport

Represents the exported signing key data structure.
All metadata is included in the encrypted payload to prevent tampering.

## Properties

### encryptedPayload

> `readonly` **encryptedPayload**: `string`

Encrypted payload containing version, metadata, and signing keys.
Format: base64-encoded AES-256-GCM encrypted JSON.

***

### format

> `readonly` **format**: `"midnight-signing-key-export"`

Format identifier. Must be 'midnight-signing-key-export'.

***

### salt

> `readonly` **salt**: `string`

Salt used for key derivation (hex-encoded, 32 bytes / 64 characters).
Required for decryption with the export password.
