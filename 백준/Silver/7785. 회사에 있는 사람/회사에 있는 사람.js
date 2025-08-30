const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\r?\n/);

input.shift();

const map = new Map();

input.forEach(value => {
  let [name, log] = value.split(" ");
  
  map.set(name, log);
});

const result = [];

for (const [key, value] of map) {
  if (value === "enter") result.push(key);
}

result.sort().reverse();

console.log(result.join("\n"));
