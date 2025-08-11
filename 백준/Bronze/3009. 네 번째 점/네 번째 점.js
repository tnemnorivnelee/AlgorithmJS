const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const [x1, y1] = input[0].split(" ").map(Number);
const [x2, y2] = input[1].split(" ").map(Number);
const [x3, y3] = input[2].split(" ").map(Number);

const x4 = x1 ^ x2 ^ x3;
const y4 = y1 ^ y2 ^ y3;

console.log(x4, y4);
