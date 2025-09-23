const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);

// 주어진 최대값이 1,000,000
const MAX = 1000000;

const Ns = input.slice(1);

// 일단 모두 소수라고 설정.
// 근데 왜 MAX + 1 인지??
const isPrime = new Array(MAX + 1).fill(true);

// 소수는 1보다 큰 자연수 중에 자기 자신만 약수로 가지는 수
// 따라서 0과 1은 소수가 아님
isPrime[0] = isPrime[1] = false;

// 2부터 최대 범위의 제곱근까지만 반복
// 만약 i 가 소수가 아니라면
// 약수로 반드시 루트 i 보다 작거나 같은 약수만 가짐
// 이로써 불필요한 반복을 줄여 성능 향상
for (let i = 2; i * i <= MAX; i++) {
  // i 의 값이 소수라면?
  if (isPrime[i]) {
    // i의 배수를 모두 false 로 설정
    // j 는 i * i 부터 시작
    // 그 이전의 배수들은 이미 다른 소수들에 의해 처리 -> 뭔말???

    // i 가 소수라면 i 자기 자신을 제외한 i 의 모든 배수들은 소수가 아님.
    // i 의 배수들은 i 를 약수로 가지기 때문에 소수가 아니게 되는 것.
    // 그래서 i 의 배수들을 찾아 false 로 처리

    // i * i 부터 시작인 이유
    // i 가 5 인 경우, 5*2, 5*3 의 경우에 이미 2와 3일 때 지워진 상태.
    // 그래서 5*5 부터 시작하는 것이 효율적.
    // 후에 i 만큼 수를 더하여 i의 배수들을 찾아 false 처리하는 방식.
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

// 여기까지가 주어진 최대의 수까지의 모든 수가 소수인지 아닌지 판별한 것.

const result = [];

for (const N of Ns) {
  let count = 0;

  // 이후는 문제의 추가 조건을 검사하기 위한 로직.

  for (let j = 2; j <= N / 2; j++) {
    // 두 수가 모두 소수라면 count 수 증가
    if (isPrime[j] && isPrime[N - j]) {
      count++;
    }
  }
  result.push(count);
}

console.log(result.join("\n"));