# Detailed API reference

## Type Aliases

### `JubjubPoint`

The type of the embedded native elliptic curve points.  This is a nominal type
alias for an underlying builtin type.  The alias is used to hide the
representation of the underlying type, which might change.

`JubjubPoint`s are constructed from their coordinates using
[`constructJubjubPoint`](#constructjubjubpoint).  The X and Y coordinates can be
extracted from a `JubjubPoint` using respectively
[`jubjubPointX`](#jubjubpointx) and [`jubjubPointY`](#jubjubpointy).

## Structs

### `Maybe`

Encapsulates an optionally present value. If `isSome` is `false`, `value`
should be `default<T>` by convention.

```compact
struct Maybe<T> {
  isSome: Boolean;
  value: T;
}
```

### `Either`

Disjoint union of `A` and `B`. Iff `isLeft` if `true`, `left` should be
populated, otherwise `right`. The other should be `default< >` by convention.

```compact
struct Either<A, B> {
  isLeft: Boolean;
  left: A;
  right: B;
}
```

### `JubjubSchnorrSignature`

A Schnorr signature over the JubJub embedded curve. Contains an announcement
point and a scalar response, used with [`jubjubSchnorrVerify`](#jubjubschnorrverify).

```compact
struct JubjubSchnorrSignature {
  announcement: JubjubPoint;
  response: Field;
}
```

### `JubjubSchnorrSignature`

A Schnorr signature over the JubJub embedded curve. Contains an announcement
point and a scalar response, used with [`jubjubSchnorrVerify`](#jubjubschnorrverify).

```compact
struct JubjubSchnorrSignature {
  announcement: JubjubPoint;
  response: Field;
}
```

### `MerkleTreeDigest`

The root hash of a Merkle tree, represented by a single `Field`.

```compact
struct MerkleTreeDigest { field: Field; }
```

### `MerkleTreePathEntry`

An entry in a Merkle tree path, indicating if the path leads left or right, and
the root of the sibling node. Primarily used in [`MerkleTreePath`](#merkletreepath)

```compact
struct MerkleTreePathEntry {
  sibling: MerkleTreeDigest;
  goesLeft: Boolean;
}
```

### `MerkleTreePath`

A path in a depth `n` Merkle tree, leading to a leaf of type `T`.
Primarily used for [`merkleTreePathRoot`](#merkletreepathroot).

This can be constructed from `witness`es that use the compiler output's
`findPathForLeaf` and `pathForLeaf` functions.

```compact
struct MerkleTreePath<#n, T> {
  leaf: T;
  path: Vector<n, MerkleTreePathEntry>;
}
```

### `ContractAddress`

The address of a contract, used as a recipient in [`sendShielded`](#sendshielded),
[`sendImmediateShielded`](#sendimmediateshielded),
[`createZswapOutput`](#createzswapoutput), and [`mintShieldedToken`](#mintshieldedtoken).

```compact
struct ContractAddress { bytes: Bytes<32>; }
```

### `ShieldedCoinInfo`

The description of a newly created shielded coin, used in outputting shielded coins, or
spending/receiving shielded coins that originate in the current transaction.

`nonce` can be deterministically derived with [`evolveNonce`](#evolvenonce).

Used in:
- [`receiveShielded`](#receiveshielded)
- [`sendImmediateShielded`](#sendimmediateshielded)
- [`mergeCoin`](#mergecoin)
- [`mergeCoinImmediate`](#mergecoinimmediate)
- [`createZswapOutput`](#createzswapoutput)

```compact
struct ShieldedCoinInfo {
  nonce: Bytes<32>;
  color: Bytes<32>;
  value: Uint<128>;
}
```

### `QualifiedShieldedCoinInfo`

The description of an existing shielded coin in the ledger, ready to be spent.

Used in:
- [`sendShielded`](#sendshielded)
- [`mergeCoin`](#mergeCoin)
- [`mergeCoinImmediate`](#mergecoinimmediate)
- [`createZswapInput`](#createzswapinput)

```compact
struct QualifiedShieldedCoinInfo {
  nonce: Bytes<32>;
  color: Bytes<32>;
  value: Uint<128>;
  mtIndex: Uint<64>;
}
```

### `ZswapCoinPublicKey`

The public key used to output a [`ShieldedCoinInfo`](#shieldedcoininfo) to a user, used as a
recipient in [`sendShielded`](#sendshielded), [`sendImmediateShielded`](#sendimmediateshielded), and
[`createZswapOutput`](#createzswapoutput).

```compact
struct ZswapCoinPublicKey { bytes: Bytes<32>; }
```

### `ShieldedSendResult`

The output of [`sendShielded`](#sendshielded) and [`sendImmediateShielded`](#sendimmediateshielded),
detailing the created shielded coin, and the change from spending the input, if
applicable.

```compact
struct ShieldedSendResult {
  change: Maybe<ShieldedCoinInfo>;
  sent: ShieldedCoinInfo;
}
```

### `UserAddress`

The public key of a user, used as a recipient in [`sendUnshielded`](#sendunshielded)
and [`mintUnshieldedToken`](#mintunshieldedtoken).

```compact
struct UserAddress { bytes: Bytes<32>; }
```

## Events

Events are struct types that can be emitted using an `emit` operation.

### `ShieldedSpend`

Shielded coin consumed, new coin created for a user recipient.

Serialized size is 32.

```compact
struct ShieldedSpend {
  nullifier: Bytes<32> // indexed
}
```

### `ShieldedReceive`

A contract accepts an incoming shielded coin.

`contractAddress` set when received by a contract, absent for user recipients.

 Serialized size is 578.

```compact
struct ShieldedReceive {
  commitment: Bytes<32>, // indexed
  contractAddress: Maybe<Bytes<32>>,
  ciphertext: Maybe<Bytes<512>>
}
```

### `ShieldedMint`

New shielded tokens created.

`tokenType` derived by the consumer from `domainSep` + `ContractLog.address`.

 Serialized size is 81.
 
```compact
struct ShieldedMint {
  commitment: Bytes<32>, // indexed
  domainSep: Bytes<32>, // indexed
  amount: Maybe<Uint<128>>
}
```

### `ShieldedBurn`

Shielded coin sent to the burn address.

Supply tracking — tokens permanently removed from circulation.

Serialized size is 49.
 
```compact
struct ShieldedBurn {
  nullifier: Bytes<32>, // indexed
  amount: Maybe<Uint<128>>
}
```

### `UnshieldedSpend`

Public token sent from a sender.

Serialized size is 145.

```compact
struct UnshieldedSpend {
  sender: Either<ZswapCoinPublicKey, ContractAddress>, // indexed
  domainSep: Bytes<32>, // indexed
  tokenType: Bytes<32>, // indexed
  amount: Uint<128>
}
```

### `UnshieldedReceive`

Public token sent to a recipient.

Serialized size is 145.

```compact
struct UnshieldedReceive {
  recipient: Either<ZswapCoinPublicKey, ContractAddress>, // indexed
  domainSep: Bytes<32>, // indexed
  tokenType: Bytes<32>, // indexed
  amount: Uint<128>
}
```

### `UnshieldedMint`

New unshielded tokens created.

Serialized size is 80.

```compact
struct UnshieldedMint {
  domainSep: Bytes<32>, // indexed
  tokenType: Bytes<32>, // indexed
  amount: Uint<128>
}
```

### `UnshieldedBurn`

Unshielded coin sent to the burn address.

Serialized size is 113.

```compact
struct UnshieldedBurn {
  sender: Either<ZswapCoinPublicKey, ContractAddress>, // indexed
  tokenType: Bytes<32>, // indexed
  amount: Uint<128>
}
```

### `Paused`

Contract operations suspended.

Serialized size is 0.

```compact
struct Paused {}
```

### `Unpaused`

Contract operations resumed.

Serialized size is 0.

```compact
struct Unpaused {}
```

### `Misc`

Miscellaneous event type.

Serialized size is 288.

```compact
struct Misc {
  name: Bytes<32>,
  payload: Bytes<256>
}
```

## Circuits

### `some`

Constructs a [`Maybe<T>`](#maybe) containing an element of type `T`

```compact
circuit some<T>(value: T): Maybe<T>;
```

### `none`

Constructs a [`Maybe<T>`](#maybe) containing nothing

```compact
circuit none<T>(): Maybe<T>;
```

### `left`

Construct an [`Either<A, B>`](#either) containing the `A` item of the disjoint
union

```compact
circuit left<A, B>(value: A): Either<A, B>;
```

### `right`

Constructs an [`Either<A, B>`](#either) containing the `B` item of the disjoint
union

```compact
circuit right<A, B>(value: B): Either<A, B>;
```

### `transientHash`

Builtin transient hash compression function

This function is a circuit-efficient compression function from arbitrary values
to field elements, which is not guaranteed to persist between upgrades. It
should not be used to derive state data, but can be used for consistency
checks.

Although this function returns a hash of its inputs, it is not considered sufficient
to protect its input from disclosure.
If its input contains any value returned from a witness, the program must acknowledge
disclosure (via a `disclose` wrapper) if the result can be stored in the public ledger,
returned from an exported circuit, or passed to another contract via a cross-contract call.

```compact
circuit transientHash<T>(value: T): Field;
```

### `transientCommit`

Builtin transient commitment function

This function is a circuit-efficient commitment function over arbitrary
types, and a field element commitment opening, to field elements, which is not
guaranteed to persist between upgrades. It should not be used to derive state
data, but can be used for consistency checks.

Unlike `transientHash`, this function is considered sufficient to protect
its input from disclosure, under the assumption that the `rand` argument is
sufficiently random.
Thus, even if its input contains a value or values returned from one or more
witnesses, the program need not acknowledge disclosure (via a `disclose` wrapper) if
the result can be stored in the public ledger, returned from an exported circuit, or
passed to another contract via a cross-contract call.

```compact
circuit transientCommit<T>(value: T, rand: Field): Field;
```

### `persistentHash`

Builtin persistent hash compression function

This function is a non-circuit-optimised compression function from arbitrary values
to a 256-bit bytestring. It is guaranteed to persist between
upgrades, and to consistently use the SHA-256 compression algorithm. It
*should* be used to derive state data, and not for consistency checks where
avoidable.

The note about disclosing under `transientHash` also applies to this function.

```compact
circuit persistentHash<T>(value: T): Bytes<32>;
```

### `persistentCommit`

Builtin persistent commitment function

This function is a non-circuit-optimised commitment function from arbitrary
values representable in Compact, and a 256-bit bytestring opening, to a 256-bit
bytestring. It is guaranteed to persist between upgrades, and use the SHA-256
compression algorithm. It *should* be used to derive state data, and not for
consistency checks where avoidable.

The note about disclosing under `transientCommit` also applies to this function.

```compact
circuit persistentCommit<T>(value: T, rand: Bytes<32>): Bytes<32>;
```

### `degradeToTransient`

This function "degrades" the output of a [`persistentHash`](#persistenthash)
or [`persistentCommit`](#persistentcommit) to a field element, which can then
be used in [`transientHash`](#transienthash) or
[`transientCommit`](#transientcommit).

```compact
circuit degradeToTransient(x: Bytes<32>) : Field;
```

### `upgradeFromTransient`
This function "upgrades" a field element to the output of a
[`persistentHash`](#persistenthash) or [`persistentCommit`](#persistentcommit).

```compact
circuit upgradeFromTransient(x: Field): Bytes<32>;

```

### `keccak256`

This function hashes its input using the Keccak-256 algorithm.  It returns the
32-byte digest.

```compact
circuit keccak256<T>(value: T): Bytes<32>;
```

### `constructJubjubPoint`

This function constructs a [`JubjubPoint`](#jubjubpoint) from its X and Y
coordinates.  Neither the standard library nor the Compact JavaScript runtime
package will actually verify that a constructed point actually lies on the
Jubjub curve.  The behavior of constructing or operating on an invalid curve
point is undefined.

```compact
circuit constructJubjubPoint(x: Field, y: Field): JubjubPoint;
```

### `jubjubPointX`

This function extracts the X coordinate from a [`JubjubPoint`](#jubjubpoint).

```compact
circuit jubjubPointX(pt: JubjubPoint): Field;
```

### `jubjubPointY`

This function extracts the Y coordinate from a [`JubjubPoint`](#jubjubpoint).

```compact
circuit jubjubPointY(pt: JubjubPoint): Field;
```

### `ecAdd`

This function adds two elliptic [`JubjubPoint`](#jubjubpoint)s.

```compact
circuit ecAdd(a: JubjubPoint, b: JubjubPoint): JubjubPoint;
```

### `ecNeg`

This function negates an elliptic [`JubjubPoint`](#jubjubpoint). On the JubJub
twisted Edwards curve, the negation of `(x, y)` is `(-x, y)`.

```compact
circuit ecNeg(a: JubjubPoint): JubjubPoint;
```

### `ecMul`

This function multiplies an elliptic [`JubjubPoint`](#jubjubpoint) by a Jubjub
scalar.  The scalar should be in the range of the Jubjub scalar field (see
[`jubjubScalarFromNative`](#jubjubscalarfromnative)).

```compact
circuit ecMul(a: JubjubPoint, b: Field): JubjubPoint;
```

### `ecMulGenerator`

This function multiplies the primary group generator of the embedded curve by a
Jubjub scalar.  The scalar should be in the range of the Jubjub scalar field
(see [`jubjubScalarFromNative`](#jubjubscalarfromnative)).

```compact
circuit ecMulGenerator(b: Field): JubjubPoint;
```

### `hashToCurve`

This function maps arbitrary types to [`JubjubPoint`](#nativepoint)s.

Outputs are guaranteed to have unknown discrete logarithm with respect to
the group base, and any other output, but are not guaranteed to be unique (a
given input can be proven correct for multiple outputs).

Inputs of different types `T` may have the same output, if they have the same
field-aligned binary representation.

```compact
circuit hashToCurve<T>(value: T): JubjubPoint;
```

### `jubjubSchnorrVerify`

Verifies a Schnorr signature over the JubJub embedded curve. Takes a message
as a vector of `N` field elements, a [`JubjubSchnorrSignature`](#jubjubschnorrsignature),
and a verification key (a [`JubjubPoint`](#nativepoint) on the embedded curve).
Returns true if the signature is valid; false if the signature does not verify.

To actually enforce that a signature is valid in a Compact circuit, use an
`assert` that the result is true.

```compact
circuit jubjubSchnorrVerify<#N>(
          msg: Vector<N, Field>,
          signature: JubjubSchnorrSignature,
          pk: JubjubPoint
          ): Boolean;
```

### `jubjubSchnorrVerify`

Verifies a Schnorr signature over the JubJub embedded curve. Takes a message
as a vector of `n` field elements, a [`JubjubSchnorrSignature`](#jubjubschnorrsignature),
and a verification key (a [`JubjubPoint`](#nativepoint) on the embedded curve).
Asserts that the signature is valid; fails if the signature does not verify.

```compact
circuit jubjubSchnorrVerify<#n>(msg: Vector<n, Field>, signature: JubjubSchnorrSignature, vk: JubjubPoint): [];
```

### `merkleTreePathRoot`

Derives the Merkle tree root of a [`MerkleTreePath`](#merkletreepath), which
should match the root of the tree that this path originated from.

```compact
circuit merkleTreePathRoot<#n, T>(path: MerkleTreePath<n, T>): MerkleTreeDigest;
```

### `merkleTreePathRootNoLeafHash`

Derives the Merkle tree root of a [`MerkleTreePath`](#merkletreepath), which
should match the root of the tree that this path originated from. As opposed to
[`merkleTreePathRoot`](#merkletreepathroot), this variant assumes that
the tree leaves have already been hashed externally.

```compact
circuit merkleTreePathRootNoLeafHash<#n>(path: MerkleTreePath<n, Bytes<32>>): MerkleTreeDigest;
```

### `nativeToken`

Returns the token type of the native token

```compact
circuit nativeToken(): Bytes<32>;
```

### `tokenType`

Transforms a domain separator for the given contract into a globally namespaced
token type. A contract can issue tokens for its domain separators, which lets
it create new tokens, but due to collision resistance, it cannot mint tokens
for another contract's token type. This is used as the `color` field in 
[`ShieldedCoinInfo`](#shieldedcoininfo) and as arguments to functions like 
[`sendUnshielded`](#sendunshielded) and [`receiveUnshielded`](#receiveunshielded).

```compact
circuit tokenType(domainSep: Bytes<32>, contract: ContractAddress): Bytes<32>;
```

### `mintShieldedToken`

Creates a new shielded coin, minted by this contract, and sends it to the given
recipient. Returns the corresponding [`ShieldedCoinInfo`](#shieldedcoininfo). This requires
inputting a unique nonce to function securely, it is left to the user how to
produce this. To mint a shielded token to the current contract, pass
`right<ZswapCoinPublicKey, ContractAddress>(kernel.self())` as the `recipient`.

```compact
circuit mintShieldedToken(
  domainSep: Bytes<32>,
  value: Uint<64>,
  nonce: Bytes<32>,
  recipient: Either<ZswapCoinPublicKey, ContractAddress>
): ShieldedCoinInfo;
```

### `evolveNonce`

Deterministically derives a [`ShieldedCoinInfo`](#shieldedcoininfo) nonce from a counter index,
and a prior nonce.

```compact
circuit evolveNonce(
  index: Uint<128>,
  nonce: Bytes<32>
): Bytes<32>;
```

### `shieldedBurnAddress`

Returns a payment address that guarantees any shielded coins sent to it are burned.

```compact
circuit shieldedBurnAddress(): Either<ZswapCoinPublicKey, ContractAddress>;
```

### `receiveShielded`

Receives a shielded coin, adding a validation condition requiring this coin to be
present as an output addressed to this contract, and not received by another
call

```compact
circuit receiveShielded(coin: ShieldedCoinInfo): [];
```

### `sendShielded`

Sends given value from a shielded coin owned by the contract to a recipient. Any change
is returned and should be managed by the contract.

Note that this does not currently create coin ciphertexts, so sending to a user
public key except for the current user will not lead to this user being
informed of the coin they've been sent. To send a shielded token to the current contract, pass
`right<ZswapCoinPublicKey, ContractAddress>(kernel.self())` as the `recipient`.

```compact
circuit sendShielded(input: QualifiedShieldedCoinInfo, recipient: Either<ZswapCoinPublicKey, ContractAddress>, value: Uint<128>): ShieldedSendResult;
```

### `sendImmediateShielded`

Like [`sendShielded`](#sendshielded), but for coins created within this transaction

```compact
circuit sendImmediateShielded(input: ShieldedCoinInfo, target: Either<ZswapCoinPublicKey, ContractAddress>, value: Uint<128>): ShieldedSendResult;
```

### `mergeCoin`

Takes two coins stored on the ledger, and combines them into one

```compact
circuit mergeCoin(a: QualifiedCoinInfo, b: QualifiedCoinInfo): CoinInfo;
```

### `mergeCoinImmediate`

Takes one coin stored on the ledger, and one created within this transaction,
and combines them into one

```compact
circuit mergeCoinImmediate(a: QualifiedCoinInfo, b: CoinInfo): CoinInfo;
```

### `ownPublicKey`

Returns the [`ZswapCoinPublicKey`](#zswapcoinpublickey) of the end-user
creating this transaction.

```compact
circuit ownPublicKey(): ZswapCoinPublicKey;
```

### `createZswapInput`

Notifies the context to create a new Zswap input originating from this call.
Should typically not be called manually, prefer [`sendShielded`](#sendshielded) and
[`sendImmediateShielded`](#sendimmediateshielded) instead.

The note about disclosing under `transientHash` also applies to this function.

```compact
circuit createZswapInput(coin: QualifiedShieldedCoinInfo): [];
```

### `createZswapOutput`

Notifies the context to create a new Zswap output originating from this call.
Should typically not be called manually, prefer [`sendShielded`](#sendshielded) and
[`sendImmediateShielded`](#sendimmediateShielded), and [`receiveShielded`](#receiveshielded) instead.

The note about disclosing under `transientHash` also applies to this function.

```compact
circuit createZswapOutput(coin: ShieldedCoinInfo, recipient: Either<ZswapCoinPublicKey, ContractAddress>): [];
```

### `mintUnshieldedToken`

Creates a new unshielded coin, minted by this contract, and sends it to the given
recipient. Returns the corresponding coin color. To mint an unshielded token to the current contract, pass
`left<ContractAddress, UserAddress>(kernel.self())` as the `recipient`.

```compact
export circuit mintUnshieldedToken(
  domainSep: Bytes<32>,
  value: Uint<64>,
  recipient: Either<ContractAddress, UserAddress>
): Bytes<32>;
```

### `sendUnshielded`

Sends the given amount of the given unshielded token (identified by the color) to the given recipient. No change is 
returned from this function. To send an unshielded token to the current contract, pass
`left<ContractAddress, UserAddress>(kernel.self())` as the `recipient`.

```compact
export circuit sendUnshielded(color: Bytes<32>, amount: Uint<128>, recipient: Either<ContractAddress, UserAddress>): [];
```

### `receiveUnshielded`

Receives the given amount of the unshielded token identified by the color.

```compact
circuit receiveUnshielded(color: Bytes<32>, amount: Uint<128>): [];
```

### `unshieldedBalance`

Returns the contract's balance of the unshielded token of the given type. Note that this balance is not updated
during contract execution as a result of unshielded sends and receives. It is always fixed to the value provided
at the start of execution. Also note that using this function means transaction application will fail unless the
token balance at the time of transaction construction is exactly the same as the balance at the time of transaction
application. Unless you want to require that, prefer to use the balance comparison functions [`unshieldedBalanceLt`](#unshieldedbalancelt), 
[`unshieldedBalanceGte`](#unshieldedbalancegte), [`unshieldedBalanceGt`](#unshieldedbalancegt), and 
[`unshieldedBalanceLte`](#unshieldedbalancelte).

```compact
circuit unshieldedBalance(color: Bytes<32>): Uint<128>;
```

### `unshieldedBalanceLt`

Returns true if the unshielded balance of the contract for the given token type is less than the given value.

```compact
circuit unshieldedBalanceLt(color: Bytes<32>, amount: Uint<128>): Boolean;
```

### `unshieldedBalanceGte`

Returns true if the unshielded balance of the contract for the given token type is greater than or equal to the given value.

```compact
circuit unshieldedBalanceGte(color: Bytes<32>, amount: Uint<128>): Boolean;
```

### `unshieldedBalanceGt`

Returns true if the unshielded balance of the contract for the given token type is greater than the given value.

```compact
circuit unshieldedBalanceGt(color: Bytes<32>, amount: Uint<128>): Boolean
```

### `unshieldedBalanceLte`

Returns true if the unshielded balance of the contract for the given token type is less than or equal to the given value.

```compact
circuit unshieldedBalanceLte(color: Bytes<32>, amount: Uint<128>): Boolean;
```


### `blockTimeLt`

Returns true if the current block time is less than the given value.

```compact
circuit blockTimeLt(time: Uint<64>): Boolean;
```

### `blockTimeGte`

Returns true if the current block time is greater than or equal to the given value.

```compact
circuit blockTimeGte(time: Uint<64>): Boolean;
```

### `blockTimeGt`

Returns true if the current block time is greater than the given value.

```compact
circuit blockTimeGt(time: Uint<64>): Boolean;
```

### `blockTimeLte`

Returns true if the current block time is less than or equal to the given value.

```compact
circuit blockTimeLte(time: Uint<64>): Boolean;
```

### `serialize<T, #n>`

Returns the canonical byte encoding of for a given value of event type. 
Note that `serialize` can only be instantiated for an event type and its
canonical serialized size.

```compact
circuit serialize<T, #n> (x: T): Bytes<n>;
```

### `deserialize<T, #n>`

Reconstructs a value of type event from its canonical byte encoding.
Note that `deserialize` can only be instantiated for an event type and its
canonical serialized size.

```compact
circuit deserialize<T, #n> (x: Bytes<n>): T;
```
