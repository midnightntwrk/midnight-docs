# Compact standard library

**CompactStandardLibrary** ∙ [Detailed API reference](exports.md)

This API provides standard types and circuits for use in Compact programs.
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
  - [`transientHash`](exports.md#transienthash)
  - [`transientCommit`](exports.md#transientcommit)
  - [`persistentHash`](exports.md#persistenthash)
  - [`persistentCommit`](exports.md#persistentcommit)
  - [`degradeToTransient`](exports.md#degradetotransient)
- Elliptic curve functions:
  - [`ecAdd`](exports.md#ecadd)
  - [`ecMul`](exports.md#ecmul)
  - [`ecMulGenerator`](exports.md#ecmulgenerator)
  - [`hashToCurve`](exports.md#hashtocurve)
  - [`upgradeFromTransient`](exports.md#upgradefromtransient)
- Merkle tree functions:
  - [`merkleTreePathRoot`](exports.md#merkletreepathroot)
  - [`merkleTreePathRootNoLeafHash`](exports.md#merkletreepathrootnoleafhash)
- Coin management functions
  - [`tokenType`](exports.md#tokentype)
  - [`nativeToken`](exports.md#nativetoken)
  - [`ownPublicKey`](exports.md#ownpublickey)
  - [`createZswapInput`](exports.md#createzswapinput)
  - [`createZswapOutput`](exports.md#createzswapoutput)
  - [`mintToken`](exports.md#minttoken)
  - [`evolveNonce`](exports.md#evolvenonce)
  - [`receive`](exports.md#receive)
  - [`send`](exports.md#send)
  - [`sendImmediate`](exports.md#sendimmediate)
  - [`mergeCoin`](exports.md#mergecoin)
  - [`mergeCoinImmediate`](exports.md#mergecoinimmediate)
  - [`burnAddress`](exports.md#burnaddress)
- Block time functions:
  - [`blockTimeLt`](exports.md#blocktimelt)
  - [`blockTimeGte`](exports.md#blocktimegte)
  - [`blockTimeGt`](exports.md#blocktimegt)
  - [`blockTimeLte`](exports.md#blocktimelte)
