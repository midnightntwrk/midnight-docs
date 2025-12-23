[**@midnight-ntwrk/compact-runtime v0.11.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / PublicAddress

# Type Alias: PublicAddress

```ts
type PublicAddress = 
  | {
  address: UserAddress;
  tag: "user";
}
  | {
  address: ContractAddress;
  tag: "contract";
};
```

A public address that an entity can be identified by
