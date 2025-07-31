const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const checkList = [];

for (let i = 0; i < input.length / 2; i++) {
  if (input[i] === input[input.length - 1 - i]) {
    checkList[i] = 1;
  } else {
    checkList[i] = 0;
  }
}

console.log(checkList.includes(0) ? 0 : 1);
