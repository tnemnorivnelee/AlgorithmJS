const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let arr = Array(30)
  .fill(0)
  .map((_, idx) => idx + 1);

for (const num of input) {
  if (arr.includes(num)) arr = arr.filter((el) => el !== num);
}

console.log(arr.join("\n"));
