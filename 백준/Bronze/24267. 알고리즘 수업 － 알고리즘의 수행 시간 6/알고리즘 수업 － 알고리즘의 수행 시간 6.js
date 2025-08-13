const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const n = BigInt(input);

const count = (n * (n - 1n) * (n - 2n)) / 6n;

console.log(count.toString());

console.log(3);
