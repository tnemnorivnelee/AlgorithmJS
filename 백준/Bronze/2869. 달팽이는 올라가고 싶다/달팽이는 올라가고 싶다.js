const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [A, B, V] = input;

console.log(Math.ceil((V - B) / (A - B)));
