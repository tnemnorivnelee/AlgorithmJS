const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const testcase = Number(input[0]);

const result = [];

for (let i = 1; i <= testcase; i++) {
  const [repeat, str] = input[i].split(" ");

  let temp = "";

  for (let j = 0; j < str.length; j++) {
    temp += str[j].repeat(Number(repeat));
  }

  result.push(temp);
}

console.log(result.join("\n"));
