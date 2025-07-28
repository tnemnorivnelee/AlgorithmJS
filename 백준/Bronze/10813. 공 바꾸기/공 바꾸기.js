const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);

const baskets = Array(N)
  .fill(0)
  .map((_, idx) => idx + 1);

for (let i = 1; i <= M; i++) {
  let [first, second] = input[i].split(" ").map(Number);

  if (first === second) continue;

  first--;
  second--;

  let temp = baskets[first];
  baskets[first] = baskets[second];
  baskets[second] = temp;
}

console.log(baskets.join(" "));
