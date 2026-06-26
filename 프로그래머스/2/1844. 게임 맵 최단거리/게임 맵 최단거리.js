// ROR 게임은 두 팀으로 나누어 진행. 상대팀 진영을 먼저 파괴하면 이기는 게임
// 각 팀은 상대 팀 진영에 최대한 빨리 도착해야 함

// 나의 캐릭터는 1,1 위치에 있고 상대팀은 5,5 위치 있는 예시가 있음
// 최솟값으로 갈 수 있는 방법의 칸 수를 리턴하도록 하는 함수를 완성

// 1. n, m 이 1 이상 100 이하의 자연수
// 100 * 100 = 10000 이므로 완전 탐색 방식도 가능

// 2. DFS vs BFS 
// 가장 짧은 거리 하나만을 구해야 한다면? -> 하나를 가지고 끝까지 탐색할 필요가 없음
// 넓게 퍼지게 찾다가 짧게 끝나는 것 하나만 구하면 되기 때문에
// BFS 방식이 더 적절

// 3. 움직일 수 있는 방향
// 동 서 남 북 -> 총 4 방향
// 현재 위치에서 동 서 남 북 으로 이동하는 경우 0 인지 1 인지 
// 0 이면 못감, 1 이면 갈 수 있음
// 카운트 증가?? 그리고 방문 처리?? 

function solution(maps) {
    const n = maps.length
    const m = maps[0].length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [[0, 0]];
    
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (0 <= nx && nx < n && 0 <= ny && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    const total = maps[n - 1][m - 1];
    return total === 1 ? -1 : total;
}