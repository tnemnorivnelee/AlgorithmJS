const fs = require('fs');

const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const arr = Array.from({length: N}, (_, i) => i + 1);

const result = [];

while (arr.length > 0) {
    // arr.unshift(...arr.splice(K-1, arr.length));
    arr.unshift(...arr.splice((K - 1) % arr.length, arr.length));
    result.push(arr.shift());
}

console.log(`<${result.join(', ')}>`);

