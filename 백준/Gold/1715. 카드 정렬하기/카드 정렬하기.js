const fs = require("fs");

// 백준 제출용 입력 처리 (로컬 테스트 시에는 "./input.txt"를 사용하세요)
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  push(value) {
    this.heap.push(value);

    let currentIdx = this.heap.length - 1;

    while (currentIdx > 0) {
      let parrentIdx = Math.floor((currentIdx - 1) / 2);

      if (this.heap[currentIdx] >= this.heap[parrentIdx]) {
        break;
      }

      this.swap(currentIdx, parrentIdx);
      currentIdx = parrentIdx;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];

    this.heap[0] = this.heap.pop();

    let currentIdx = 0;

    while (currentIdx * 2 + 1 < this.heap.length) {
      let leftIdx = currentIdx * 2 + 1;
      let rightIdx = currentIdx * 2 + 2;

      let smallerIdx = leftIdx;

      if (this.heap[rightIdx] && this.heap[leftIdx] > this.heap[rightIdx]) {
        smallerIdx = rightIdx;
      }

      if (this.heap[smallerIdx] >= this.heap[currentIdx]) {
        break;
      }

      this.swap(smallerIdx, currentIdx);

      currentIdx = smallerIdx;
    }
    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(input) {
  // console.log(input);

  const minHeap = new MinHeap();

  input.forEach((value) => minHeap.push(value));

  let total = 0;

  while (minHeap.heap.length > 1) {
    let card1 = minHeap.pop();
    let card2 = minHeap.pop();
    let sum = card1 + card2;

    total += sum;
    minHeap.push(sum);
  }

  console.log(total);
}

solution(input);
