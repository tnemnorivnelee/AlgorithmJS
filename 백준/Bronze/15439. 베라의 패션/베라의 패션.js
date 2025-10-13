const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

const N = Number(input);

console.log(N * (N - 1));
