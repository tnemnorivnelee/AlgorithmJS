const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const deq = {};

const result = [];

let head = 0;
let tail = 0;

const size = () => tail - head;

for (let i = 1; i <= N; i++) {
  const [order, X] = input[i].split(" ").map(Number);

  switch (order) {
    case 1:
      head--;
      deq[head] = X;
      break;
    case 2:
      deq[tail] = X;
      tail++;
      break;
    case 3:
      if (size()) {
        result.push(deq[head]);
        delete deq[head];
        head++;
      } else {
        result.push(-1);
      }
      break;
    case 4:
      if (size()) {
        tail--;
        result.push(deq[tail]);
        delete deq[tail];
      } else {
        result.push(-1);
      }
      break;
    case 5:
      result.push(size());
      break;
    case 6:
      result.push(size() > 0 ? 0 : 1);
      break;
    case 7:
      result.push(size() > 0 ? deq[head] : -1);
      break;
    case 8:
      result.push(size() > 0 ? deq[tail - 1] : -1);
      break;
  }
}

console.log(result.join("\n"));
