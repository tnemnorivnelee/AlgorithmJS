const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input.slice(0, 1));

const orders = input.slice(1);

const stack = [];
const result = [];

for (let i = 0; i < N; i++) {
  const command = orders[i].split(" ").map(Number);

  switch (command[0]) {
    case 1:
      stack.push(Number(command[1]));
      break;
    case 2:
      if (stack.length) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
      break;
    case 3:
      result.push(stack.length);
      break;
    case 4:
      if (!stack.length) {
        result.push(1);
      } else {
        result.push(0);
      }
      break;
    case 5:
      if (stack.length) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
      break;
  }
}

console.log(result.join("\n"));
