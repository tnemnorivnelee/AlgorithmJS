const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const currentLine = input[1].split(" ").map(Number);

let currentOrder = 1;

const waitingStack = [];

for (let i = 0; i < N; i++) {
  const student = currentLine[i];

  // 현재 학생이 받을 차례가 아니라면
  if (student !== currentOrder) {
    while (
      waitingStack.length > 0 &&
      waitingStack[waitingStack.length - 1] === currentOrder
    ) {
      waitingStack.pop();
      currentOrder++;
    }

    if (student !== currentOrder) {
      waitingStack.push(student);
    } else {
      currentOrder++;
    }
  } else {
    currentOrder++;
  }
}

while (waitingStack.length > 0) {
  if (waitingStack[waitingStack.length - 1] === currentOrder) {
    waitingStack.pop();
    currentOrder++;
  } else {
    break;
  }
}

if (currentOrder === N + 1) {
  console.log("Nice");
} else {
  console.log("Sad");
}
