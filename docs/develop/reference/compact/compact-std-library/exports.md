**CompactStandardLibrary** ∙ [README](README.md) ∙ [API](exports.md)

***

# API

## Structs

### `Maybe`

Encapsulates an optionally present value. If `is_some` is `false`, `value`
should be `null(a)` by convention.

```compact
struct Maybe<a> {
  is_some: Boolean;
  value: a;
}
```

### `Either`

Disjoint union of `a` and `b`. Iff `is_left` if `true`, `left` should be
populated, otherwise `right`. The other should be `null(_)` by convention.

```compact
struct Either<a, b> {
  is_left: Boolean;
  left: a;
  right: b;
}
```

### `CurvePoint`

A point on the proof systems embedded curve, in affine coordinates.

Only outputs of elliptic curve operations are actually guaranteed to lie on the
curve.

```compact
struct CurvePoint {
  x: Field;
  y: Field;
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
  goes_left: Boolean;
}
```

### `MerkleTreePath`

A path in a depth `n` Merkle tree, leading to a leaf of type `a`.
Primarily used for [`merkle_tree_path_root`](#merkle_tree_path_root).

This can be constructed from `witness`es that use the compiler output's
`find_path_for_leaf` and `path_for_leaf` functions.

```compact
struct MerkleTreePath<#n, a> {
  leaf: a;
  path: Vector<n, MerkleTreePathEntry>;
}
```

### `ContractAddress`

The address of a contract, used as a recipient in [`send`](#send),
[`send_immediate`](#send_immediate),
[`create_zswap_output`](#create_zswap_output), and [`mint_token`](#mint_token).

```compact
struct ContractAddress { bytes: Bytes<32>; }
```

### `CoinInfo`

The description of a newly created coin, used in outputting coins, or
spending/receiving coins that originate in the current transaction.

`nonce` can be deterministically derived with [`evolve_nonce`](#evolve_nonce).

Used in:
- [`receive`](#receive)
- [`send_immediate`](#send_immediate)
- [`merge_coin`](#merge_coin)
- [`merge_coin_immediate`](#merge_coin_immediate)
- [`create_zswap_output`](#create_zswap_output)

```compact
struct CoinInfo {
  nonce: Bytes<32>;
  color: Bytes<32>;
  value: Uint<128>;
}
```

### `QualifiedCoinInfo`

The description of an existing coin in the ledger, ready to be spent.

Used in:
- [`send`](#send)
- [`merge_coin`](#merge_coin)
- [`merge_coin_immediate`](#merge_coin_immediate)
- [`create_zswap_input`](#create_zswap_input)

```compact
struct QualifiedCoinInfo {
  nonce: Bytes<32>;
  color: Bytes<32>;
  value: Uint<128>;
  mt_index: Uint<64>;
}
```

### `ZswapCoinPublicKey`

The public key used to output a [`CoinInfo`](#coininfo) to a user, used as a
recipient in [`send`](#send), [`send_immediate`](#send_immediate), and
[`create_zswap_output`](#create_zswap_output).

```compact
struct ZswapCoinPublicKey { bytes: Bytes<32>; }
```

### `SendResult`

The output of [`send`](#send) and [`send_immediate`](#send_immediate),
detailing the created coin, and the change from spending the input, if
applicable.

```compact
struct SendResult {
  change: Maybe<CoinInfo>;
  sent: CoinInfo;
}
```

## Circuits

### `some`

Constructs a [`Maybe<a>`](#maybe) containing an element of type `a`

```compact
circuit some<a>(value: a): Maybe<a>;
```

### `none`

Constructs a [`Maybe<a>`](#maybe) containing nothing

```compact
circuit none<a>(): Maybe<a>;
```

### `left`

Construct an [`Either<a, b>`](#either) containing the `a` item of the disjoint
union

```compact
circuit left<a, b>(value: a): Either<a, b>;
```

### `right`

Constructs an [`Either<a, b>`](#either) containing the `b` item of the disjoint
union

```compact
circuit right<a, b>(value: b): Either<a, b>;
```

### `transient_hash`

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
circuit transient_hash<a>(value: a): Field;
```

### `transient_commit`

Builtin transient commitment function

This function is a circuit-efficient commitment function over arbitrary
types, and a field element commitment opening, to field elements, which is not
guaranteed to persist between upgrades. It should not be used to derive state
data, but can be used for consistency checks.

Unlike `transient_hash`, this function is considered sufficient to protect
its input from disclosure, under the assumption that the `rand` argument is
sufficiently random.
Thus, even if its input contains a value or values returned from one or more
witnesses, the program need not acknowledge disclosure (via a `disclose` wrapper) if
the result can be stored in the public ledger, returned from an exported circuit, or
passed to another contract via a cross-contract call.

```compact
circuit transient_commit<a>(value: a, rand: Field): Field;
```

### `persistent_hash`

Builtin persistent hash compression function

This function is a non-circuit-optimised compression function from arbitrary values
to a 256-bit bytestring. It is guaranteed to persist between
upgrades, and to consistently use the SHA-256 compression algorithm. It
*should* be used to derive state data, and not for consistency checks where
avoidable.

The note about disclosing under `transient_hash` also applies to this function.

```compact
circuit persistent_hash<a>(value: a): Bytes<32>;
```

### `persistent_commit`

Builtin persistent commitment function

This function is a non-circuit-optimised commitment function from arbitrary
values representable in Compact, and a 256-bit bytestring opening, to a 256-bit
bytestring. It is guaranteed to persist between upgrades, and use the SHA-256
compression algorithm. It *should* be used to derive state data, and not for
consistency checks where avoidable.

The note about disclosing under `transient_commit` also applies to this function.

```compact
circuit persistent_commit<a>(value: a, rand: Bytes<32>): Bytes<32>;
```

### `degrade_to_transient`

This function "degrades" the output of a [`persistent_hash`](#persistent_hash)
or [`persistent_commit`](#persistent_commit) to a field element, which can then
be used in [`transient_hash`](#transient_hash) or
[`transient_commit`](#transient_commit).

```compact
circuit degrade_to_transient(x: Bytes<32>) : Field;
```

### `upgrade_from_transient`
This function "upgrades" a field element to the output of a
[`persistent_hash`](#persistent_hash) or [`persistent_commit`](#persistent_commit).

```compact
circuit upgrade_from_transient(x: Field): Bytes<32>;

```

### `ec_add`

This function add two elliptic [`CurvePoint`](#curvepoint)s (in multiplicative
notation)

```compact
circuit ec_add(a: CurvePoint, b: CurvePoint): CurvePoint;
```

### `ec_mul`

This function multiplies an elliptic [`CurvePoint`](#curvepoint) by a scalar
(in multiplicative notation)

```compact
circuit ec_mul(a: CurvePoint, b: Field): CurvePoint;
```

### `ec_mul_generator`

This function multiplies the primary group generator of the embedded curve
by a scalar (in multiplicative notation)

```compact
circuit ec_mul_generator(b: Field): CurvePoint;
```

### `hash_to_curve`

This function maps arbitrary types to [`CurvePoint`](#curvepoint)s.

Outputs are guaranteed to have unknown discrete logarithm with respect to
the group base, and any other output, but are not guaranteed to be unique (a
given input can be proven correct for multiple outputs).

Inputs of different types `a` may have the same output, if they have the same
field-aligned binary representation.

```compact
circuit hash_to_curve<a>(value: a): CurvePoint;
```

### `merkle_tree_path_root`

Derives the Merkle tree root of a [`MerkleTreePath`](#merkletreepath), which
should match the root of the tree that this path originated from.

```compact
circuit merkle_tree_path_root<#n, a>(path: MerkleTreePath<n, a>): MerkleTreeDigest;
```

### `merkle_tree_path_root_no_leaf_hash`

Derives the Merkle tree root of a [`MerkleTreePath`](#merkletreepath), which
should match the root of the tree that this path originated from. As opposed to
[`merkle_tree_path_root`](#merkle_tree_path_root), this variant assumes that
the tree leaves have already been hashed externally.

```compact
circuit merkle_tree_path_root_no_leaf_hash<#n>(path: MerkleTreePath<n, Bytes<32>>): MerkleTreeDigest;
```

### `native_token`

Returns the token type of the native token

```compact
circuit native_token(): Bytes<32>;
```

### `token_type`

Transforms a domain seperator for the given contract into a globally namespaced
token type. A contract can issue tokens for its domain seperators, which lets
it create new tokens, but due to collision resistance, it cannot mint tokens
for another contract's token type. This is used as the `color` field in [`CoinInfo`](#coininfo).

```compact
circuit token_type(domain_sep: Bytes<32>, contract: ContractAddress): Bytes<32>;
```

### `mint_token`

Creates a new coin, minted by this contract, and sends it to the given
recipient. Returns the corresponding [`CoinInfo`](#coininfo). This requires
inputting a unique nonce to function securely, it is left to the user how to
produce this.

```compact
circuit mint_token(
  domain_sep: Bytes<32>,
  value: Uint<128>,
  nonce: Bytes<32>,
  recipient: Either<ZswapCoinPublicKey, ContractAddress>
): CoinInfo;
```

### `evolve_nonce`

Deterministically derives a [`CoinInfo`](#coininfo) nonce from a counter index,
and a prior nonce.

```compact
circuit evolve_nonce(
  index: Uint<64>,
  nonce: Bytes<32>
): Bytes<32>;
```

### `burn_address`

Returns a payment address that guarantees any coins sent to it are burned.

```compact
circuit burn_address(): Either<ZswapCoinPublicKey, ContractAddress>;
```

### `receive`

Receives a coin, adding a validation condition requiring this coin to be
present as an output addressed to this contract, and not received by another
call

```compact
circuit receive(coin: CoinInfo): [];
```

### `send`

Sends given value from a coin owned by the contract to a recipient. Any change
is returned and should be managed by the contract.

Note that this does not currently create coin ciphertexts, so sending to a user
public key except for the current user will not lead to this user being
informed of the coin they've been sent.

```compact
circuit send(input: QualifiedCoinInfo, recipient: Either<ZswapCoinPublicKey, ContractAddress>, value: Uint<128>): SendResult;
```

### `send_immediate`

Like [`send`](#send), but for coins created within this transaction

```compact
circuit send_immediate(input: CoinInfo, target: Either<ZswapCoinPublicKey, ContractAddress>, value: Uint<128>): SendResult;
```

### `merge_coin`

Takes two coins stored on the ledger, and combines them into one

```compact
circuit merge_coin(a: QualifiedCoinInfo, b: QualifiedCoinInfo): CoinInfo;
```

### `merge_coin_immediate`

Takes one coin stored on the ledger, and one created within this transaction,
and combines them into one

```compact
circuit merge_coin_immediate(a: QualifiedCoinInfo, b: CoinInfo): CoinInfo;
```

### `own_public_key`

Returns the [`ZswapCoinPublicKey`](#zswapcoinpublickey) of the end-user
creating this transaction.

```compact
circuit own_public_key(): ZswapCoinPublicKey;
```

### `create_zswap_input`

Notifies the context to create a new Zswap input originating from this call.
Should typically not be called manually, prefer [`send`](#send) and
[`send_immediate`](#send_immediate) instead.

The note about disclosing under `transient_hash` also applies to this function.

```compact
circuit create_zswap_input(coin: QualifiedCoinInfo): [];
```

### `create_zswap_output`

Notifies the context to create a new Zswap output originating from this call.
Should typically not be called manually, prefer [`send`](#send) and
[`send_immediate`](#send_immediate), and [`receive`](#receive) instead.

The note about disclosing under `transient_hash` also applies to this function.

```compact
circuit create_zswap_output(coin: CoinInfo, recipient: Either<ZswapCoinPublicKey, ContractAddress>): [];
```
