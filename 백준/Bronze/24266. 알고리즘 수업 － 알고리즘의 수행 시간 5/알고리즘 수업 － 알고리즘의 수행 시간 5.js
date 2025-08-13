const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const n = BigInt(input);

const count = n ** 3n;

console.log(count.toString());

console.log(3);
