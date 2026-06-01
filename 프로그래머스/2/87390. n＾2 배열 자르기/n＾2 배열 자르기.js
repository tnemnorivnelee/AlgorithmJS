// n = 3
// (0, 2) -> 3 | 2 / 3 = 0, 2 % 3 = 2
// (1, 0) -> 2 | 3 / 3 = 1, 3 % 3 = 0
// (1, 1) -> 2 | 4 / 3 = 1, 4 % 3 = 1
// (1, 2) -> 3 | 5 / 3 = 1, 5 % 3 = 2
// (몫, 나머지)
// 몫 = i / n
// 나머지 = i % n

function solution(n, left, right) {
    var answer = [];
    
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        
        answer.push(Math.max(row, col) + 1);
    }
    
    return answer;
}