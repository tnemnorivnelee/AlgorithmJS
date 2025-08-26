const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = +input[0];

const coords = input[1].split(" ").map(Number);

const setCoords = [...new Set(coords)].sort((a, b) => a - b);

const mapCoords = new Map();

setCoords.forEach((value, index) => {
  mapCoords.set(value, index);
});

let answer = "";

for (let i = 0; i < coords.length; i++) {
  answer += mapCoords.get(coords[i]) + " ";
}

console.log(answer.trim());
