// 프로그래머스 아이템 줍기

// 다음과 같은 다격형 모양 지형에서 캐릭터가 아이템을 줍기 위해 이동하려 한다
// 지형은 각 변이 x축, y축과 평핸한 직사각형이 겹쳐진 형태로 표현하며
// 캐릭터는 이 다각형의 둘레(굵은 선)를 따라서 이동한다

// 만약 직사각형을 겹친 후 다음과 같이 중앙에 빈 공간이 생기는 경우
// 다각형의 가장 바깥쪽 테두리가 캐릭터의 이동 경로가 된다

// 단, 서로 다른 두 직사각형의 x축 좌표 또는 y축 좌표가 같은 경우는 없다
// 즉, 위 그림처럼 서로 다른 두 직사각형이 꼭짓점에서 만나거나 변이 겹치는 경우 등은 없다
// 다음 그림과 같이 지형이 2개 이상으로 분리된 경우도 없다

// 한 직사각형이 다른 직사각형 안에 완전히 포함되는 경우 또한 없다

// 지형을 나타내는 직사각형이 담긴 2차원 배열, 초기 캐릭터의 위치, 아이템의 위치가 매개변수로 주어질 때
// 캐릭터가 아이템을 줍기 위해 이동해야 하는 가장 짧은ㄴ 거리를 반환하는 함수를 완성하라

// 1. 제한사항으로 인해 완전탐색 가능
// 2. bfs 방식으로 진행
// 3. 방문처리 필요


function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 1. 모든 위치 좌표 2배로 늘리기 (순간이동 방지)
    const startX = characterX * 2;
    const startY = characterY * 2;
    const endX = itemX * 2;
    const endY = itemY * 2;
    
    // 2. 맵(도화지)과 방문 배열 준비 (크기는 101 x 101)
    // 맵은 0(빈 공간)으로 초기화, 방문 배열은 false로 초기화
    const map = Array.from({ length: 101 } , () => Array(101).fill(0));
    const visited = Array.from({ length: 101 }, () => Array(101).fill(false));
    
    const cols = map.length;
    const rows = map[0].length;
    
    // 3. 직사각형 맵에 그리기
    rectangle.forEach(([x1, y1, x2, y2]) => {
        const [nx1, ny1, nx2, ny2] = [x1 * 2, y1 * 2, x2 * 2, y2 * 2];
        
        for (let i = nx1; i <= nx2; i++) {
            for (let j = ny1; j <= ny2; j++) {
                // 이미 다른 직사각형의 '내부(2)'로 칠해진 곳은 건드리지 않음
                if (map[i][j] === 2) continue;
                
                // 현재 칠하는 좌표가 직사각형의 테두리라면?
                if (i === nx1 || i === nx2 || j === ny1 || j === ny2) {   
                    map[i][j] = 1; // 테두리니까 1
                } else {
                    map[i][j] = 2; // 내부니까 2
                }
            }
        }
    });
    
    // 4. BFS 이동 방향 세팅 (상하좌우)
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // 큐 초기화 및 시작점 방문 처리
    const queue = [[startX, startY, 0]];
    visited[startX][startY] = true;
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (x === endX && y === endY) {
            return dist / 2;
        }
        
        for (let i = 0; i < 4; i++) { 
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (0 <= nx && nx < cols
               && 0 <= ny && ny < rows
               && map[nx][ny] === 1 
               && !visited[nx][ny]) {
                queue.push([nx, ny, dist + 1]);
                visited[nx][ny] = true;
            }
        }
        
    }
    
}