function solution(n, computers) {
    // 1. 미방문 처리된 배열을 생성.
    const visited = new Array(n).fill(false);
    
    // 2. 네트워크 개수를 샐 변수 생성.
    let answer = 0;
    
    // 3. dfs 함수 생성
    function dfs(node) {
        // 3-1. 종료조건
        if (visited[node]) {
            return;
        }
        
        // 3-2. 실행조건
        visited[node] = true;
        
        // 3-3. 다음 실행
        for (let i = 0; i < n; i++) {
            // 연결되어 있고, 아직 방문하지 않았다면?
            // i 로 이동해서 dfs 다시 실행.
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    // 4. 모든 컴퓨터를 하나씩 돌아보기.
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            dfs(i);
        }
    }

    return answer;
}