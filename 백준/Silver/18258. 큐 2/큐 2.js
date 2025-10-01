const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const queue = [];
let head = 0;
let tail = 0; 

const result = [];

for (let i = 1; i <= N; i++) {
  const [order, value] = input[i].split(" ");

  switch (order) {
    case "push":
      queue[tail] = value;
      tail++;
      break;
    case "pop":
      if (head === tail) {
        result.push(-1);
      } else {
        result.push(queue[head]);
        head++;
      }
      break;
    case "size":
      result.push(tail - head);
      break;
    case "empty":
      result.push(head === tail ? 1 : 0);
      break;
    case "front":
      if (head === tail) {
        result.push(-1);
      } else {
        result.push(queue[head]); // 큐의 가장 앞 원소
      }
      break;
    case "back":
      if (head === tail) {
        result.push(-1);
      } else {
        result.push(queue[tail - 1]); // 큐의 가장 뒤 원소
      }
      break;
  }
}

console.log(result.join("\n"));
