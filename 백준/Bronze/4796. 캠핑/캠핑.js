  const fs = require("fs");

  const input = fs.readFileSync(0).toString().trim().split("\n");

  function solution(input) {
    for (let i = 0; i < input.length; i++) {
      const [L, P, V] = input[i].split(" ").map(Number);

      if (L === 0 && P === 0 && V === 0) {
        break;
      }

      const a = P * Math.floor(V / P);
      const b = V - a;
      const c = L * Math.floor(V / P) + Math.min(b, L);

      console.log(`Case ${i + 1}: ${c}`);
    }
  }

  solution(input);
