function solution(numbers, target) {
    
     // dfs 3단계 공식
    // 1. 탈출 조건 : "언제 끝낼 것인가?" (가장 중요, 없으면 무한루프)
    // 2. 수행 동작 : "정답을 찾거나, 방문 체크를 하는 곳"
    // 3. 다음 단계 호출 : "자식 노드나 다음 선택지로 이동"
    
    let answer = 0;
    
    function dfs(index, sum) {
        
        if (numbers.length === index) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return answer;
    
}