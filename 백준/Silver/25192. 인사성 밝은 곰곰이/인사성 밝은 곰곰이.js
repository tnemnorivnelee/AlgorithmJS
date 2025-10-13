const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const enterIndex = [];

input.forEach((value, index) => {
  if (value === "ENTER") enterIndex.push(index);
});

let result = 0;

for (let i = 0; i < enterIndex.length; i++) {
  const arr = input.slice(enterIndex[i] + 1, enterIndex[i + 1]);
  const setArr = new Set(arr);
  result += setArr.size;
}

console.log(result);
