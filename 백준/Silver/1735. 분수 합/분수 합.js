const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\r?\n/);

const [child1, parent1] = input[0].split(" ").map(Number);
const [child2, parent2] = input[1].split(" ").map(Number);

const resultChild = child1 * parent2 + child2 * parent1;
const resultParent = parent1 * parent2;


const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const commonDivisor = gcd(resultChild, resultParent);

const finalChild = resultChild / commonDivisor;
const finalParent = resultParent / commonDivisor;

console.log(`${finalChild} ${finalParent}`);