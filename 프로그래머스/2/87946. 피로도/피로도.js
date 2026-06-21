// 피로도 시스템이 있는 게임에서 일정 피로도를 사용해서 던전을 탐험할 수 있다
// 각 던전마다 탐험을 시작하기 위해 필요한 최소 필요 필요도와
// 던전 탐험을 마쳤을 때 소모되는 소모 피로도가 있다

// 최소 필요 피로도는 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
// 소모 피로도는 단전을 탐험한 후 소모되는 피로도



function solution(k, dungeons) {
    var answer = -1;
    
    const visited = new Array(dungeons.length).fill(0);
    
    function dfs(k, count) {
        answer = Math.max(answer, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= k) {
                visited[i] = true;
                dfs(k - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
    }
    
    
    dfs(k, 0);
    
    return answer;
}