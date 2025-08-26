const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = +input[0];

const setWords = new Set(input.slice(1));

const sortedByAsc = [...setWords].sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return a[i].charCodeAt() - b[i].charCodeAt();
      }
    }
  }
});

console.log(sortedByAsc.join("\n"));
