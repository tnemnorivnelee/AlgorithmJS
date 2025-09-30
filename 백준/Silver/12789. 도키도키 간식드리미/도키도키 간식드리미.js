const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let number = 1;
const stack = [];

for (let i = 0; i < N; i++) {
  stack.push(arr[i]);

  while (true) {
    if (stack[stack.length - 1] !== number) {
      break;
    }
    stack.pop();
    number++;
  }
}

console.log(stack.length === 0 ? "Nice" : "Sad");
