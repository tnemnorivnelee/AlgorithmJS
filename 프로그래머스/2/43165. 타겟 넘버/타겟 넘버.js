function solution(numbers, target) {
    let answer = 0;
    
    // dfs 3단계 공식
    // 1. 탈출 조건 : "언제 끝낼 것인가?" (가장 중요, 없으면 무한루프)
    // 2. 수행 동작 : "정답을 찾거나, 방문 체크를 하는 곳"
    // 3. 다음 단계 호출 : "자식 노드나 다음 선택지로 이동"
    
    function dfs(index, currentSum) {
        if (index === numbers.length) {
            if (target === currentSum) {
                answer++;
            }
            return;
        }
        
        dfs(index + 1, currentSum + numbers[index]);
        dfs(index + 1, currentSum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return answer;
}