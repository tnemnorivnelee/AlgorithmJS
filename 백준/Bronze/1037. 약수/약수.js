const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(max * min);
