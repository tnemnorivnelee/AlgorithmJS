const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

const number = Number(input);

const arr = [];

for (let i = 666; ; i++) {
  if (i.toString().includes("666")) arr.push(i);
  if (arr.length === number) break;
}

console.log(arr[arr.length - 1]);
