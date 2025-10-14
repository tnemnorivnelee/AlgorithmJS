const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const pairs = input.slice(1);

const dance = new Set(["ChongChong"]);

for (const pair of pairs) {
  const [A, B] = pair.split(" ");

  if (dance.has(A) || dance.has(B)) {
    dance.add(A);
    dance.add(B);
  }
}

console.log(dance.size);
