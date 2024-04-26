This package decodes base58 strings to binary arrays. Base58 is commonly used when encoding Solana KeyPairs, however, some apps only support binary arrays. Recently added support for optional writing the output to a path.

### Install required packages

`npm install`

### Decoding your encoded string

`npm run decode exampleEncodedString`

### Decoding your encoded string and save to file

`npm run decode exampleEncodedString decoded.txt`

_Please note when setting a path the script will recursively check for the directories existence and will automatically create the directory if the location does not exist._
