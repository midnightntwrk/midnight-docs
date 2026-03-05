[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ProvingProvider

# Type Alias: ProvingProvider

```ts
type ProvingProvider = {
  check: Promise<(undefined | bigint)[]>;
  prove: Promise<Uint8Array<ArrayBufferLike>>;
};
```

## Methods

### check()

```ts
check(serializedPreimage, keyLocation): Promise<(undefined | bigint)[]>;
```

#### Parameters

##### serializedPreimage

`Uint8Array`

##### keyLocation

`string`

#### Returns

`Promise`\<(`undefined` \| `bigint`)[]\>

***

### prove()

```ts
prove(
   serializedPreimage, 
   keyLocation, 
overwriteBindingInput?): Promise<Uint8Array<ArrayBufferLike>>;
```

#### Parameters

##### serializedPreimage

`Uint8Array`

##### keyLocation

`string`

##### overwriteBindingInput?

`bigint`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>
