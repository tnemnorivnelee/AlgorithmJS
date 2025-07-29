const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);

const baskets = Array.from({ length: N }, (_, idx) => idx + 1);

for (let i = 1; i <= M; i++) {
  const [num1, num2] = input[i].split(" ").map(Number);

  if (num1 === num2) continue;

  const temp = baskets.slice(num1 - 1, num2);

  temp.reverse();

  let k = 0;

  for (let j = num1 - 1; j < num2; j++) {
    baskets[j] = temp[k++];
  }
}

console.log(baskets.join(" "));
