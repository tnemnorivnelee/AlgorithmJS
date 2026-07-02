// 프로그래머스 미로 탈출

// 1*1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 한다
// 각 칸은 통로 또는 벽으로 구성되어 있으며
// 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있다

// 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데
// 이 문은 레버를 당겨서만 열 수 있다. 레버 또한 통로들 중 한 칸에 있다

// 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후
// 미로를 빠져가나는 문이 있는 칸으로 이동하면 된다
// 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있다
// 미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때
// 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려고 한다.

// 미로를 나타낸 문자열 배열이 매개변수로 주어질 때
// 미로를 탈출하는데 필요한 최소 시간을 반환하는 함수를 완성하라

// 만약, 탈출할 수 없다면 -1을 반환하라

// 1. 탈출할 수 없다면 -1 반환
// 2. 출구 칸에 도착했을 때, 레버 칸을 다녀왔다면 탈출 가능. 아니면 불가능.
// 3. 미로 한 칸 이동 시 1초씩 누적
// 4. BFS 방식 이용 -> 최소 시간 구하는 것이기 때문에
// 5. 방문처리는 오로지 L(레버)에 도착 시에 처리

function solution(maps) {
    var answer = 0;
    
    const rows = maps.length;
    const cols = maps[0].length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

        
    function bfs(startChar, targetChar) {
        let queue = [];

        const visited = Array.from({ length: rows }, () => (
            Array(cols).fill(false)
        ));
    
        loop1:
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (maps[i][j] === startChar) {
                    queue.push([i, j, 0]);
                    visited[i][j] = true;
                    break loop1;
                }
            }
        }
        
        while (queue.length > 0) {
            const [x, y, time] = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (0 <= nx && nx < rows
                   && 0 <= ny && ny < cols
                   && maps[nx][ny] !== 'X'
                   && !visited[nx][ny]) {
                    if (maps[nx][ny] === targetChar) {
                        return time + 1;
                    }
                    queue.push([nx, ny, time + 1]);
                    visited[nx][ny] = true;
                }
            }
        }
        return -1;
    }
    const timeToLever = bfs('S', 'L');
    const timeToExit = bfs('L', 'E');
    
    if (timeToLever === -1 || timeToExit === -1) {
        return -1
    } else {
        return timeToLever + timeToExit;
    }
}