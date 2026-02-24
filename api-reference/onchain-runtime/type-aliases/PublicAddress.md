[**@midnight-ntwrk/onchain-runtime v2.0.0-rc.2**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / PublicAddress

# Type Alias: PublicAddress

```ts
type PublicAddress: {
  address: UserAddress;
  tag: "user";
 } | {
  address: ContractAddress;
  tag: "contract";
};
```

A public address that an entity can be identified by
