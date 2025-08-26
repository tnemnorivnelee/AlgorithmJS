const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = input.shift();

const members = input.map((value, index) => {
  const [age, name] = value.split(" ");

  return {
    age: Number(age),
    name,
  };
});

members.sort((a, b) => {
  return a.age - b.age;
});

const answer = members.map((value) => `${value.age} ${value.name}`).join("\n");

console.log(answer);
