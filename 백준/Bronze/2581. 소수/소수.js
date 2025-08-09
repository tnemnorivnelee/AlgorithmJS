const fs = require("fs");

const input = fs
  .readFileSync(0) // 백준 제출 시 '/dev/stdin'
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [M, N] = input;

// 1. 체(sieve) 만들기: N 크기만큼의 배열을 만들고 모두 true로 초기화
const isPrime = new Array(N + 1).fill(true);

// 0과 1은 소수가 아니므로 false로 설정
isPrime[0] = isPrime[1] = false;

// 2. 에라토스테네스의 체 알고리즘 실행
// 2부터 N의 제곱근까지만 순회합니다.
for (let i = 2; i <= Math.sqrt(N); i++) {
  // i가 소수라면 (true 라면)
  if (isPrime[i]) {
    // i의 배수들을 모두 false(소수 아님)로 변경
    // j를 i*i 부터 시작하는 이유는, 그 이전의 배수들은 이미 앞선 소수들에 의해 처리되었기 때문입니다. (최적화)
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

// 3. 결과 계산
const primesInRange = [];
for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    primesInRange.push(i);
  }
}

if (primesInRange.length === 0) {
  console.log(-1);
} else {
  const total = primesInRange.reduce((acc, cur) => acc + cur, 0);
  const min = primesInRange[0]; // 이미 오름차순으로 담기므로 첫 번째 요소가 최솟값
  console.log(`${total}\n${min}`);
}