const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

class minHeap {
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

    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex] >= this.heap[parentIndex]) {
        break;
      }

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const returnValue = this.heap[0];

    this.heap[0] = this.heap.pop();

    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {
      const leftIndex = currentIndex * 2 + 1;
      const rightIndex = currentIndex * 2 + 2;

      let smallerIndex = leftIndex;

      if (
        rightIndex < this.heap.length &&
        this.heap[leftIndex] > this.heap[rightIndex]
      ) {
        smallerIndex = rightIndex;
      }

      if (this.heap[currentIndex] <= this.heap[smallerIndex]) {
        break;
      }

      this.swap(currentIndex, smallerIndex);

      currentIndex = smallerIndex;
    }

    return returnValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(input) {
  const times = input
    .slice(1)
    .map((value) => value.split(" ").map(Number))
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  // console.log(times);

  const mHeap = new minHeap();

  mHeap.push(times[0][1]);

  for (let i = 1; i < times.length; i++) {
    const [nextStartTime, nextEndTime] = times[i];

    if (mHeap.peek() <= nextStartTime) {
      mHeap.pop();
    }

    mHeap.push(nextEndTime);
  }

  console.log(mHeap.heap.length);
}

solution(input);
