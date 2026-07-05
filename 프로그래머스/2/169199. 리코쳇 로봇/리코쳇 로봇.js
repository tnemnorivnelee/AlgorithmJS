// 프로그래머스 리코쳇 로봇

// 리코쳇 로봇이라는 보드게임이 있다
// 이 보드게임은 격자모양 게임판 위에서 말을 움직이는 게임으로
// 시작 위치에서 출발한 뒤 목표 위치에 정확하게 멈추기 위해 
// 최소 몇 번의 이동이 필요한지 말하는 게임이다

// 이 게임에서 말의 이동은 현재 위치에서 상하좌우 중 한 방향으로
// 게임판 위의 장애물이나 게임판 가장자리까지 부딪힐 때까지 
// 미끄러져 움직이는 것을 한 번의 이동으로 정의한다

// 빈 공간 = .
// 로봇 처음 위치 = R
// 장애물 = D
// 목표지점 = G

// 게임판의 상태를 나타내는 문자열 배열이 주어질 때
// 말의 목표위치에 도달하는데 최소 몇 번 이동해야 하는지 반환하는 함수를 완성하라
// 단, 목표 위치에 도달할 수 없다면 -1 을 반환하라

// 1. 상하좌우 방향
// 2. 100이하의 길이 -> 완전 탐색(bfs dfs 다 가능?)
// 3. 최솟값 구하기 -> 방문처리 필요
// 4. 장애물 혹은 가장자리에 닿을 때까지의 이동을 한 번으로 취급
// 5. 

function solution(board) {
    var answer = 0;
    
    const rows = board.length;
    const cols = board[0].length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    
    const queue = [];
    
    loop1:
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'R') {
                queue.push([i, j, 0]);
                visited[i][j] = true;
                break loop1;
            }
        }
    }
    
    while (queue.length > 0) {
        const [x, y, count] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            while (0 <= nx && nx < rows
               && 0 <= ny && ny < cols
               && board[nx][ny] !== 'D') {
                nx = nx + dx[i];
                ny = ny + dy[i];
            }
            nx = nx - dx[i];
            ny = ny - dy[i];
            
            if (board[nx][ny] == 'G') {
                return count + 1;
            } 
            
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }
    
    return -1;
}