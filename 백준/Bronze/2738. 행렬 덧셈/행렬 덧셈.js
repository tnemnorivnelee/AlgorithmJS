const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0].split(' ').map(Number)[0];
const M = input[0].split(' ').map(Number)[1];

const A = [];
const B = [];

for (let i = 1; i <= N; i++) {
    const arr = input[i].split(' ').map(Number);
    for (let j = 0; j < M; j++) {
        A.push(arr[j]);
    }
}

for (let i = N + 1; i <= N + N; i++) {
    const arr = input[i].split(' ').map(Number);
    for (let j = 0; j < M; j++) {
        B.push(arr[j]);
    }
}

const result = [];

for (let i = 0; i < N * M; i++) {
    result.push(A[i] + B[i]);
}

for (let i = 0; i < result.length; i += N) {
    console.log(result.slice(i, i + N).join(' '));
}