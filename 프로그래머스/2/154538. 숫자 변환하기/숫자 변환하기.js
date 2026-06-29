// 프로그래머스 숫자 변환하기

// 자연수 x를 y로 변환하려고 한다
// 아래와 같은 연산이 가능하다
// 1. x + n
// 2. x * 2
// 3. x * 3

// x를 y로 변환하기 위해 필요한 최소 연산 횟수를 구하는 함수를 완성하라
// 이때, 변환할 수 없다면 -1를 반환하도록 해라

function solution(x, y, n) {
    let currentSet = new Set([x]);
    let count = 0;
    
    while (currentSet.size > 0) {
        const nextSet = new Set();
        
        for (const num of currentSet) {
            for (let nextNum of [num + n, num * 2, num * 3]) {
                if (nextNum === y) return count + 1;
                
                if (nextNum < y) nextSet.add(nextNum);
            }
        }
        count++;
        currentSet = nextSet;
    }
    return x === y ? 0 : -1;
}