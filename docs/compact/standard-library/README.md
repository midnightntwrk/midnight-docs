# Compact standard library

**CompactStandardLibrary** ∙ [Detailed API reference](exports.md)

This API provides standard types and circuits for use in Compact programs.
Key parts of the API are:

- Common data types:
  - [`Maybe`](exports.md#maybe)
  - [`Either`](exports.md#either)
  - [`NativePoint`](exports.md#nativepoint)
  - [`MerkleTreeDigest`](exports.md#merkletreedigest)
  - [`MerkleTreePathEntry`](exports.md#merkletreepathentry)
  - [`MerkleTreePath`](exports.md#merkletreepath)
  - [`ContractAddress`](exports.md#contractaddress)
  - [`ZswapCoinPublicKey`](exports.md#zswapcoinpublickey)
  - [`UserAddress`](exports.md#useraddress)
- Coin management data types:
  - [`ShieldedCoinInfo`](exports.md#shieldedcoininfo)
  - [`QualifiedShieldedCoinInfo`](exports.md#qualifiedshieldedcoininfo)
  - [`ShieldedSendResult`](exports.md#shieldedsendresult)
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
    - [`mintShieldedToken`](exports.md#mintshieldedtoken)
    - [`evolveNonce`](exports.md#evolvenonce)
    - [`receiveShielded`](exports.md#receiveshielded)
    - [`sendShielded`](exports.md#sendshielded)
    - [`sendImmediateShielded`](exports.md#sendimmediateshielded)
    - [`mergeCoin`](exports.md#mergecoin)
    - [`mergeCoinImmediate`](exports.md#mergecoinimmediate)
    - [`shieldedBurnAddress`](exports.md#shieldedburnaddress)
    - [`mintUnshieldedToken`](exports.md#mintunshieldedtoken)
    - [`sendUnshielded`](exports.md#sendunshielded)
    - [`receiveUnshielded`](exports.md#receiveunshielded)
    - [`unshieldedBalance`](exports.md#unshieldedbalance)
    - [`unshieldedBalanceLt`](exports.md#unshieldedbalancelt)
    - [`unshieldedBalanceGte`](exports.md#unshieldedbalancegte)
    - [`unshieldedBalanceGt`](exports.md#unshieldedbalancegt)
    - [`unshieldedBalanceLte`](exports.md#unshieldedbalancelte)
    - [`shieldedburnaddress`](exports.md#shieldedburnaddress)
- Block time functions:
  - [`blockTimeLt`](exports.md#blocktimelt)
  - [`blockTimeGte`](exports.md#blocktimegte)
  - [`blockTimeGt`](exports.md#blocktimegt)
  - [`blockTimeLte`](exports.md#blocktimelte)
