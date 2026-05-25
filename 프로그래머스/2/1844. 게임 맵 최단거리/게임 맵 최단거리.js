function solution(maps) {
    const n = maps.length;      // 맵의 세로(y) 길이
    const m = maps[0].length;   // 맵의 가로(x) 길이
    
    // 1. 상하좌우 이동을 위한 방향 배열
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // 2. 큐(Queue) 초기화: [x좌표, y좌표, 현재까지의 이동 거리]
    // 문제 조건에서 시작 칸도 거리 1로 포함하므로 거리는 1부터 시작합니다.
    const queue = [[0, 0, 1]];
    
    // JS 배열의 shift()는 O(N)이라 효율성 테스트에서 불리하므로, 인덱스 포인터를 사용합니다.
    let head = 0; 
    
    // 3. 큐가 빌 때까지 반복
    while (head < queue.length) {
        // 큐에서 현재 위치와 거리를 꺼냄
        const [x, y, distance] = queue[head];
        head++;
        
        // [핵심 포인트 ✨] 조기 종료 조건!
        // 큐에서 꺼낸 좌표가 목적지(n-1, m-1)라면? 
        // 뒤도 돌아보지 않고 현재까지의 거리를 반환(return)하고 끝냅니다.
        if (x === n - 1 && y === m - 1) {
            return distance;
        }
        
        // 4. 현재 위치에서 상하좌우 4방향으로 이동해 보기
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 다음 이동할 좌표(nx, ny)가 맵의 범위를 벗어나지 않는지 확인
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                
                // 맵에서 해당 좌표가 벽(0)이 아니고 길(1)이라면 이동 가능!
                if (maps[nx][ny] === 1) {
                    
                    // 🚨 [이곳을 직접 채워보세요!] 🚨
                    // 1) 다시 이 칸으로 되돌아오지 않도록 '방문 처리'를 해야 합니다. (예: 맵의 값을 0으로 변경)
                    maps[nx][ny] = 0;
                    // 2) 다음 탐색을 위해 큐(queue)에 [nx, ny, distance + 1]을 넣어줍니다(push).
                    queue.push([nx, ny, distance + 1]);
                }
            }
        }
    }
    
    // 5. 큐를 다 탐색했는데도 목적지에 도착(return)하지 못했다면 도달할 수 없는 것!
    return -1;
}