const fs = require("fs");

// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");
input = Number(input);

let star = "";

for (let i = 0; i < input; i++) {
  star += "*";
  console.log(star);
}
