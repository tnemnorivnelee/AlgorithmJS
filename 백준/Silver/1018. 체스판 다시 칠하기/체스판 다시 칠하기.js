const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const N = cases.split(' ')[0];
const M = cases.split(' ')[1];

const wBoard = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
];
const bBoard = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
];

const wCompareBoard = (a, b) => {
    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (input[i + a][j + b] !== wBoard[i][j]) {
                count++;
            }
        }
    }
    return count;
}

const bCompareBoard = (a, b) => {
    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (input[i + a][j + b] !== bBoard[i][j]) {
                count++;
            }
        }
    }
    return count;
}

const result = [];

for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
        result.push(wCompareBoard(i, j));
        result.push(bCompareBoard(i, j));
    }
}

console.log(Math.min(...result));