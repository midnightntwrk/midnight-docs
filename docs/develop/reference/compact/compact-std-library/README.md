# Compact standard library

**CompactStandardLibrary** ∙ [README](README.md) ∙ [API](exports.md)

***

# Compact standard library

This API provides standard types and `circuit`s for use in Compact programs.
Key parts of the API are:

- [`CoinInfo`](exports.md#coininfo) and
  [`QualifiedCoinInfo`](exports.md#qualifiedcoininfo), data types for contracts
  to manage funds
- Hashing functions:
  - [`transient_hash`](exports.md#transient_hash)
  - [`transient_commit`](exports.md#transient_commit)
  - [`persistent_hash`](exports.md#persistent_hash)
  - [`persistent_commit`](exports.md#persistent_commit)
  - [`degrade_to_transient`](exports.md#degrade_to_transient)
- Elliptic curve functions:
  - [`ec_add`](exports.md#ec_add)
  - [`ec_mul`](exports.md#ec_mul)
  - [`ec_mul_generator`](exports.md#ec_mul_generator)
  - [`hash_to_curve`](exports.md#hash_to_curve)
- Merkle path root computations with [`merkle_tree_path_root`](exports.md#merkle_tree_path_root)
- Coin management functions
  - [`token_type`](exports.md#token_type)
  - [`mint_token`](exports.md#mint_token)
  - [`evolve_nonce`](exports.md#evolve_nonce)
  - [`receive`](exports.md#receive)
  - [`send`](exports.md#send) and [`send_immediate`](exports.md#send_immediate)
  - [`merge_coin`](exports.md#merge_coin) and [`merge_coin_immediate`](exports.md#merge_coin_immediate)
