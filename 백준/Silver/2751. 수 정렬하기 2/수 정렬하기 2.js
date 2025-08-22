const fs = require('fs');
const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = input.sort((a, b) => a - b).join('\n');
console.log(result);


