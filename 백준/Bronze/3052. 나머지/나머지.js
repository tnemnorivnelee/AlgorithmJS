const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const remainders = input.map((value) => value % 42);

const setRemainders = new Set(remainders);

console.log(setRemainders.size);
