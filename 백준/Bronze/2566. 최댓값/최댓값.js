const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let maxInfo = [-1, 0, 0];

for (let i = 0; i < input.length; i++) {
  const rows = input[i].split(" ").map(Number);

  const maxNum = Math.max(...rows);

  if (maxInfo[0] < maxNum) {
    maxInfo[0] = maxNum;
    maxInfo[1] = i + 1;
    maxInfo[2] = rows.findIndex((value) => value === maxNum) + 1;
  }
}

console.log(`${maxInfo[0]}\n${maxInfo[1]} ${maxInfo[2]}`);
