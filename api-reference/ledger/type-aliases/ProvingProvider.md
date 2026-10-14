[**@midnight/ledger v8.1.2**](../README.md)

***

[@midnight/ledger](../globals.md) / ProvingProvider

# Type Alias: ProvingProvider

```ts
type ProvingProvider = {
  check: Promise<(bigint | undefined)[]>;
  prove: Promise<Uint8Array<ArrayBufferLike>>;
};
```

## Methods

### check()

```ts
check(serializedPreimage, keyLocation): Promise<(bigint | undefined)[]>;
```

#### Parameters

##### serializedPreimage

`Uint8Array`

##### keyLocation

`string`

#### Returns

`Promise`\<(`bigint` \| `undefined`)[]\>

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
