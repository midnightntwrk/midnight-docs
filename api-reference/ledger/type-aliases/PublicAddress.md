[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / PublicAddress

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
