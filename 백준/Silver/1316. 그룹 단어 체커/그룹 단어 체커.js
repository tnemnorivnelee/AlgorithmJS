// 백준 Node.js 환경에서 입력을 받는 표준 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄은 단어의 개수 N
const N = Number(input[0]);
// 그룹 단어의 개수를 셀 변수
let groupWordCount = 0;

// 두 번째 줄부터 각 단어를 순회
for (let i = 1; i <= N; i++) {
  const word = input[i];
  const seen = new Set(); // 이미 나타난 문자를 기록할 Set
  let lastChar = ''; // 바로 이전 문자를 저장할 변수
  let isGroupWord = true; // 현재 단어가 그룹 단어인지 판별하는 플래그

  for (const char of word) {
    // 이전 문자와 현재 문자가 다를 때
    if (char !== lastChar) {
      // 이전에 이미 나타났던 문자라면 그룹 단어가 아님
      if (seen.has(char)) {
        isGroupWord = false;
        break; // 더 이상 확인할 필요가 없으므로 현재 단어의 루프를 종료
      }
      // 처음 보는 문자라면 seen에 추가
      seen.add(char);
      // 이전 문자 업데이트
      lastChar = char;
    }
    // 이전 문자와 현재 문자가 같으면 아무것도 하지 않고 계속 진행
  }

  // 루프를 무사히 통과했다면 그룹 단어이므로 카운트 증가
  if (isGroupWord) {
    groupWordCount++;
  }
}

// 최종 결과 출력
console.log(groupWordCount);