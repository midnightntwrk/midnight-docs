[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

A class for compressing and decompressing files using gzip.

## Constructors

### Constructor

> **new GzipFile**(`inputFile`, `outputFile`): `GzipFile`

Creates a new GzipFile instance.

#### Parameters

##### inputFile

`string`

The path to the input file to compress/decompress

##### outputFile

`string`

The path where the compressed file will be saved

#### Returns

`GzipFile`

## Properties

### inputFile

> **inputFile**: `string`

The path to the input file

***

### outputFile

> **outputFile**: `string`

The path to the output file

## Methods

### compress()

> **compress**(): `Promise`\<`void`\>

Compresses the input file using gzip compression.

#### Returns

`Promise`\<`void`\>

A promise that resolves when compression is complete

#### Throws

If there is an error during compression

***

### decompress()

> **decompress**(): `Promise`\<`string`\>

Decompresses the input gzip file and returns its contents as a string.

#### Returns

`Promise`\<`string`\>

A promise that resolves with the decompressed file contents as a string

#### Throws

If there is an error during decompression
