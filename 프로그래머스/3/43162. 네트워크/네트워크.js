// i번과 j번이 연결되어 있다면 [i][j] === 1
// 예시 1
// 0, 0 번 [0][0] === 1 -> 1번, 1번 컴 연결
// 0, 1 번 [0][1] === 1 -> 1번, 2번 컴 연결
// 0, 2 번 [0][2] === 0 -> 1번, 3번 컴 미연결

function solution(n, computers) {
    var answer = 0;
    
    const visited = new Array(n).fill(false);
    
    function dfs(currentComputer) {
        visited[currentComputer] = true;  
        
        for (let nextComputer = 0; nextComputer < n; nextComputer++) {
            if (computers[currentComputer][nextComputer] === 1 && !visited[nextComputer]) {
                dfs(nextComputer);
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