const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const result = [];

for (let i = 0; input[i] !== "0 0 0"; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  const total = a + b + c;

  const maxSide = Math.max(a, b, c);

  if (total - maxSide <= maxSide) {
    result.push("Invalid");
  } else {
    const setSides = new Set([a, b, c]);

    if (setSides.size === 1) {
      result.push("Equilateral");
    } else if (setSides.size === 2) {
      result.push("Isosceles");
    } else {
      result.push("Scalene");
    }
  }
}

console.log(result.join("\n"));
