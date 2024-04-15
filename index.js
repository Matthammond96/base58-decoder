import { base58_to_binary } from "base58-js";

const bin = base58_to_binary(process.argv[2]);
console.log(bin);
