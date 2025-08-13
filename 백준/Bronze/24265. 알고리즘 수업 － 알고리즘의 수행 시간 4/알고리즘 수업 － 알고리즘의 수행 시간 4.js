const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const n = BigInt(input);

const count = ((n - 1n) * n) / 2n;

console.log(String(count));

console.log(2);
