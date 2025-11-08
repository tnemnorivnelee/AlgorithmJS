/**
 * 숫자가 소수인지 판별하는 함수
 * (에라토스테네스의 체의 원리를 차용하여 제곱근까지만 검사)
 */
function isPrime(num) {
    // 1 이하는 소수가 아님
    if (num <= 1) {
        return false;
    }
    // 2는 유일한 짝수 소수
    if (num === 2) {
        return true;
    }
    // 짝수는 2를 제외하고 소수가 아님
    if (num % 2 === 0) {
        return false;
    }

    // 3부터 (숫자의 제곱근)까지의 홀수들로만 나누어 보며 검사
    // (num의 약수는 sqrt(num)을 기준으로 대칭적으로 존재하기 때문)
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            // 나누어 떨어지면 소수가 아님
            return false;
        }
    }
    
    // 위 모든 조건에 걸리지 않으면 소수
    return true;
}

function solution(numbers) {
    let answer = 0;
    const numberArr = numbers.split(""); // 종이 조각 배열
    
    // 1. 방문 여부를 체크할 배열 (조각 사용 여부)
    const visited = new Array(numberArr.length).fill(false);
    
    // 2. 중복을 제거하며 숫자를 저장할 Set
    // (예: "011"로 "1", "01" -> 둘 다 숫자 1이므로 Set이 중복 제거)
    const numberSet = new Set();

    /**
     * [ 핵심 ] DFS (깊이 우선 탐색) 함수
     * @param {string} currentNumStr - 현재까지 조합된 숫자 문자열 (예: "1", "17")
     */
    function dfs(currentNumStr) {
        
        // --- 1. 모든 숫자 조각을 순회하며 다음 조각을 찾는다 ---
        for (let i = 0; i < numberArr.length; i++) {
            
            // 2. 아직 사용하지 않은(방문하지 않은) 조각이라면?
            if (visited[i] === false) {
                
                // 3. 현재 숫자에 새 조각을 이어붙임
                const newNumStr = currentNumStr + numberArr[i];
                
                // 4. Set에 (숫자로 변환하여) 저장
                numberSet.add(Number(newNumStr));
                
                // 5. "사용함"으로 표시 (방문 처리)
                visited[i] = true;
                
                // 6. [재귀] 새 숫자를 기준으로 "더 깊이" 탐색
                dfs(newNumStr); 
                
                // 7. [백트래킹] ★★★ 가장 중요 ★★★
                // newNumStr("17")로 시작하는 탐색이 모두 끝났으므로,
                // "1" 상태로 돌아가기 위해 "7" 조각(visited[i])을 "사용 안 함"으로 되돌림.
                visited[i] = false; 
            }
        }
    }

    // --- 8. DFS 탐색 시작 ---
    // 빈 문자열("")에서 시작해야 "1", "7" 등 한 자리 숫자도 만들 수 있음.
    dfs("");

    // --- 9. Set에 모인 모든 고유한 숫자들을 대상으로 소수 검사 ---
    for (const num of numberSet) {
        if (isPrime(num)) {
            answer++;
        }
    }
    
    return answer;
}