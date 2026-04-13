const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n")

function solution(input) {
  const line = [];
  let temp = "";

  input[1].split("").forEach((seat) => {
    if (seat === "S") temp += "S";
    else if (seat === "L") temp += "L";

    if (temp === "S" || temp === "LL") {
      line.push(temp);
      temp = "";
    }
  });

  if (line.every((value) => value === "S")) {
    console.log(line.length);
  } else {
    console.log(line.length + 1);
  }
}

solution(input);
