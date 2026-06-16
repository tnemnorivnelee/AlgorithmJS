// XX 게임에는 피로도 시스템이 있으며, 일정 피로도를 사용해서 던전을 탐험할 수 있다
// 이때, 각 던전마자 탐험을 시작하기 위해 필요한 "최소 필요 피로도"와
// 던전 탐험을 마쳤을 때 소모되는 "소모 피로도"가 있다

// "최소 필요 피로도"는 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도.
// "소모 피로도"는 던전을 텀함한 후 소모되는 피로도.

// 이 게임에는 하루에 한 번씩 탐험할 수 있는 던전이 여러개 있는데, 
// 한 유저가 오늘 이 던전들을 최대한 많이 탐험하려 한다.
// 유저의 현재 피로도와 각 던전 별 "최소 필요 피로도", "소모 피로도"가 담긴 2차원 배열이 주어질 때
// 유저가 탐험할 수 있는 최대 던전 수를 반환하는 함수를 완성해라.

function solution(k, dungeons) {
    let answer = 0;
    const visited = Array.from({ length: dungeons.length }).fill(false);
    
    function dfs(currentK, currentCount) {
        answer = Math.max(answer, currentCount);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= currentK) {
                visited[i] = true;
                dfs(currentK - dungeons[i][1], currentCount + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return answer;
}