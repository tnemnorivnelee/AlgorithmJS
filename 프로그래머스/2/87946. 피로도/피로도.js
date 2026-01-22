// 최소 필요 피로도 : 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
// 소모 피로도 : 던전을 탐험한 후 소모되는 피로도

// ex) 최소 필요 피로도 80, 소모 피로도 20 인 던전을 탐험할 경우
// 유저의 현재 남은 피로도는 80 이상이여야 가능. 던전 탐험 후에는 피로도 20 소모.

// k = 유저의 현재 피로도
// dungeons = [[최소 필요 피로도, 소모 피로도], [최소 필요 피로도, 소모 피로도]]

function solution(k, dungeons) {
    let maxCount = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(currentK, currentCount) {
        maxCount = Math.max(maxCount, currentCount);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && currentK >= dungeons[i][0]) {
                visited[i] = true;
                dfs(currentK - dungeons[i][1], currentCount + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return maxCount;
}