function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let answer = 0;
    
    function dfs(current) {
        // 1. 종료 조건
        if (visited[current]) {
            return;
        }
        
        // 2. 실행 조건
        visited[current] = true;
        
        // 3. 다음 실행
        for (let i = 0; i < n; i++) {
            if (computers[i][current] === 1 && !visited[i]) {
                dfs(i);
            }
        }
        
        
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}