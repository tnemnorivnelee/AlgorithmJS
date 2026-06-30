// ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팁 진영을 먼저 파괴하면 이기는 게임이다
// 각 탐은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리하다

// 지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 한다
// 다음은 5*5 크기의 맵에 당신의 캐릭터가 (1,1)에 위치해있고
// 상대 팀 진영은 (5,5)위치에 있다

// 조건
// 1. 검은색 부분은 벽으로 막혀 있어 갈 수 없다
// 2. 흰색 부분은 갈 수 있다
// 3. 캐릭터는 동 서 남 북 방향으로 한 칸씩 이동할 수 있다
// 4. 게임 맵을 벗어난 길은 갈 수 없다
// 5. 단, 상대 팀 진영에 도착할 수 없을 때는 -1 를 반환해라
// 6. 최솟값을 구하는 함수이니 BFS 방식 사용
// 7. Queue 자료구조
// 8. 방문 처리 -> 지나온 자리는 0 으로 처리
// 9. 종료 조건 -> 현재 위치가 목표 위치와 같은 경우 
// 10. 검은색은 0, 흰색은 1

// 게임 맵의 상태가 매개변수로 주어질 때 캐릭터가 상대 진영에 도착하기 위해서
// 지나가야 하는 칸의 개수의 최솟값을 반환하는 함수를 완성하라
function solution(maps) {
    const queue = [[0, 0, 1]];
    maps[0][0] = 0;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const rowLen = maps[0].length;
    const colLen = maps.length;
    
    while (queue.length > 0) {
        const [cx, cy, count] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];
            
            if (nx === rowLen - 1 && ny === colLen - 1) return count + 1;
            
            if (0 <= nx && nx < rowLen && 0 <= ny && ny < colLen
               && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                queue.push([nx, ny, count + 1]);
            }
        }
    }
    return -1;
}