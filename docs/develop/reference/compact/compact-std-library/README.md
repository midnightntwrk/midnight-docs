# Compact standard library

**CompactStandardLibrary** ∙ [README](README.md) ∙ [API](exports.md)

***

# Compact standard library

This API provides standard types and `circuit`s for use in Compact programs.
Key parts of the API are:

- Common data types:
  - [`Maybe`](exports.md#maybe)
  - [`Either`](exports.md#either)
  - [`CurvePoint`](exports.md#curvepoint)
  - [`MerkleTreeDigest`](exports.md#merkletreedigest)
  - [`MerkleTreePathEntry`](exports.md#merkletreepathentry)
  - [`MerkleTreePath`](exports.md#merkletreepath)
  - [`ContractAddress`](exports.md#contractaddress)
  - [`ZswapCoinPublicKey`](exports.md#zswapcoinpublickey)
  - [`UserAddress`](exports.md#useraddress)
- Coin management data types:
  - [`CoinInfo`](exports.md#coininfo)
  - [`QualifiedCoinInfo`](exports.md#qualifiedcoininfo)
  - [`SendResult`](exports.md#sendresult)
- Common functions:
  - [`some`](exports.md#some)
  - [`none`](exports.md#none)
  - [`left`](exports.md#left)
  - [`right`](exports.md#right)
- Hashing functions:
  - [`transientHash`](exports.md#transientHash)
  - [`transientCommit`](exports.md#transientCommit)
  - [`persistentHash`](exports.md#persistentHash)
  - [`persistentCommit`](exports.md#persistentCommit)
  - [`degradeToTransient`](exports.md#degradeToTransient)
- Elliptic curve functions:
  - [`ecAdd`](exports.md#ecAdd)
  - [`ecMul`](exports.md#ecMul)
  - [`ecMulGenerator`](exports.md#ecMulGenerator)
  - [`hashToCurve`](exports.md#hashToCurve)
  - [`upgradeFromTransient`](exports.md#upgradeFromTransient)
- Merkle tree functions:
  - [`merkleTreePathRoot`](exports.md#merkleTreePathRoot)
  - [`merkleTreePathRootNoLeafHash`](exports.md#merkleTreePathRootNoLeafHash)
- Coin management functions
  - [`tokenType`](exports.md#tokenType)
  - [`nativeToken`](exports.md#nativeToken)
  - [`ownPublicKey`](exports.md#ownPublicKey)
  - [`createZswapInput`](exports.md#createZswapInput)
  - [`createZswapOutput`](exports.md#createZswapOutput)
  - [`mintToken`](exports.md#mintToken)
  - [`evolveNonce`](exports.md#evolveNonce)
  - [`receive`](exports.md#receive)
  - [`send`](exports.md#send)
  - [`sendImmediate`](exports.md#sendimmediate)
  - [`mergeCoin`](exports.md#mergeCoin)
  - [`mergeCoinImmediate`](exports.md#mergeCoinImmediate)
  - [`burnAddress`](exports.md#burnAddress)
- Block time functions:
    - [`blockTimeLt`](exports.md#blockTimeLt)
    - [`blockTimeGte`](exports.md#blockTimeGte)
    - [`blockTimeGt`](exports.md#blockTimeGt)
    - [`blockTimeLte`](exports.md#blockTimeLte)
