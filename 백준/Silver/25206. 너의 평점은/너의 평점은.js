const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

const gradeList = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let total = 0;
let timeTotal = 0;

for (let i = 0; i < input.length; i++) {
  let [major, time, grade] = input[i]
    .split(" ")
    .map((value) => value.replace("\r", ""));

  if (grade === "P") continue;

  time = Number(time);
  total += time * gradeList[grade];
  timeTotal += time;
}

console.log(total / timeTotal);
