const fs = require("fs");

// 백준 제출용 입력 처리 (로컬 테스트 시에는 "./input.txt"를 사용하세요)
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

class maxHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  push(value) {
    this.heap.push(value);

    let currentIdx = this.heap.length - 1;

    while (currentIdx > 0) {
      let parrentIdx = Math.floor((currentIdx - 1) / 2);

      if (this.heap[currentIdx] <= this.heap[parrentIdx]) {
        break;
      }

      this.swap(currentIdx, parrentIdx);
      currentIdx = parrentIdx;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const popValue = this.heap[0];

    this.heap[0] = this.heap.pop();

    let currentIdx = 0;

    while (currentIdx * 2 + 1 < this.heap.length) {
      const leftIdx = currentIdx * 2 + 1;
      const rightIdx = currentIdx * 2 + 2;

      let biggerIdx = leftIdx;

      if (this.heap[rightIdx] && this.heap[leftIdx] < this.heap[rightIdx]) {
        biggerIdx = rightIdx;
      }

      if (this.heap[currentIdx] >= this.heap[biggerIdx]) {
        break;
      }

      this.swap(currentIdx, biggerIdx);
      currentIdx = biggerIdx;
    }

    return popValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(input) {
  // console.log(input);

  const [N, K] = input[0].split(" ").map(Number);

  const sortedGemsByAsc = input
    .slice(1, N + 1)
    .map((value) => value.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  const sortedBagsByAsc = input
    .slice(N + 1)
    .map(Number)
    .sort((a, b) => a - b);

  // console.log(sortedGemsByAsc);

  let result = 0;

  const heap = new maxHeap();

  let gemIdx = 0;

  for (let i = 0; i < K; i++) {
    const currentBagWeight = sortedBagsByAsc[i];

    while (gemIdx < N && sortedGemsByAsc[gemIdx][0] <= currentBagWeight) {
      heap.push(sortedGemsByAsc[gemIdx][1]);
      gemIdx++;
    }

    if (heap.heap.length > 0) result += heap.pop();
  }

  console.log(result);
}

solution(input);
