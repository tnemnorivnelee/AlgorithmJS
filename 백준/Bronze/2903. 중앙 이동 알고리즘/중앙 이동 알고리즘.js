const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const initialValue = 4;

const rootValue = Math.sqrt(initialValue);

const temp = rootValue + 2 ** input - 1;

console.log(temp ** 2);
