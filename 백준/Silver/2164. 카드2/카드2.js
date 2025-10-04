const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

const N = Number(input);

const cards = Array.from({length: N}, (_, i) => i + 1);

let head = 0;

// 카드의 개수가 1개 초과라면 계속 진행행
while (cards.length - head > 1) {
  // 제일 위 카드를 버림
  // 실제 데이터를 지우는게 아니라 인덱스를 증가시켜
  // 첫번째 카드를 없는 셈 치는 것
  head++;

  // 그 다음 카드를 맨 뒤로 이동
  // 현재 맨 앞 카드를 꺼내서
  const front = cards[head];

  // 꺼낸 카드를 맨 뒤로 이동
  cards.push(front);

  // 꺼낸 카드도 없는 셈 치기 위해서 헤드 인덱스 증가시킴
  head++;
}

// 루프가 끝나면 헤드 위치에 있는 카드가 마지막으로 남은 카드 취급 할 수 있음
console.log(cards[head]);