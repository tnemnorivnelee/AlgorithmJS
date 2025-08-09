const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; input[i] !== "0 0"; i++) {
  const [A, B] = input[i].split(" ").map(Number);

  if (A < B && B % A === 0) {
    console.log("factor");
  } else if (A > B && A % B === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
