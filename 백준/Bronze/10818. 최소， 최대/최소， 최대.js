const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

let result = "";

const numbers = input[1].split(" ").map(Number);

result += Math.min(...numbers) + " ";
result += Math.max(...numbers);

console.log(result);
