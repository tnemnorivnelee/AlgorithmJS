const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

input = Number(input);

let repeat = Math.floor(input / 4);

let result = "";

for (let i = 0; i < repeat; i++) {
  result += "long ";
}

console.log(result + "int");
