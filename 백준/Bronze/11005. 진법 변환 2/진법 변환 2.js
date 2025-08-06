const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(' ');

const [N, B] = input;

let result = Number(N).toString(Number(B));

console.log(result.toUpperCase());
