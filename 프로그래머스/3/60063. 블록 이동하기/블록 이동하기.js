// 프로그래머스 블록 이동하기

// 로봇개발자 무지는 한 달 앞으로 다가온 카카오배 로봇경진대회에 출품할 로봇을 준비하고 있다
// 준비 중인 로봇은 2*1 크기의 로봇으로 무지는 0과 1로 이루어진 N*N 크기의 지도에서 2*1 크기인 로봇을 움직여
// (N, N) 위치까지 이동할 수 있도록 프로그래밍을 하려고 한다

// 로봇이 이동하는 지도는 가장 왼쪽, 상단의 좌표를 (1, 1) 로 하며
// 지도 내 표시된 숫자 0 은 빈칸을, 1은 벽을 나타낸다

// 로봇은 벽이 있는 칸 또는 지도 밖으로 이동할 수 없다
// 로봇은 처음에 아래 그림과 같이 좌표 (1, 1) 위치에서 가로 방향으로 놓여있는 상태로 시작하며
// 앞뒤 구분없이 움직일 수 있다

// 로봇이 움직일 때는 현재 놓여있는 상태를 유지하면서 이동한다
// 예를 들어, 위 그림에서 오른쪽으로 한 칸 이동한다면 (1, 2), (1, 3) 두 칸을 차지하게 되며
// 아래로 이동한다면 (2, 1), (2, 2) 두 칸을 차지하게 된다
// 로봇이 차지하는 두 칸 중 어느 한 칸이라도 (N, N) 위치에 도착하면 된다

// 위 그림과 같이 로봇은 90도씩 회전할 수 있다
// 단, 로봇이 차지하는 두 칸 중, 어느 칸이든 축이 될 수 있지만,
// 회전하는 방향(축이 되는 칸으로부터 대각선 방향에 있는 칸)에는 벽이 없어야 한다
// 로봇이 한 칸 이동하거나 90도 회전하는 데 걸리는 시간은 정확히 1초 이다

// 0 과 1 로 이루어진 지도인 board 가 주어질 때
// 로봇이 (N, N) 위치까지 이동하는데 필요한 최소 시간을 반환하는 함수를 완성하라

// 1. 100이하 -> 완전탐색
// 2. 최소 시간 반환 -> bfs, 방문처리
// 3. 항상 로봇 좌표는 두 개
// 4. 상하좌우로 움직였을때, 갈 수 있는 길이 없다면 두 좌표 중 하나를 기준으로 회전 가능한지 체크
// 5. 로봇이 항상 목적지에 도착할 수 있는 경우만 입력으로 주어지기 때문에 회전 후에는 무조건 이동 가능할 듯?
// 6. 방문처리는 로봇의 두 좌표 모두를 체크하는 방식으로

function getNextPositions(pos, board) {
    const candidates = [];
    const [[r1, c1], [r2, c2]] = pos;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    for (let i = 0; i < 4; i++) {
        const [nr1, nc1] = [r1 + dx[i], c1 + dy[i]];
        const [nr2, nc2] = [r2 + dx[i], c2 + dy[i]];
        
        if (board[nr1][nc1] === 0 && board[nr2][nc2] === 0) {
            candidates.push([[nr1, nc1], [nr2, nc2]]);
        }
    }
    
    const isHorizontal = (r1 === r2);
    const rotateDirs = [-1, 1];
    
   for (const dir of rotateDirs) {
        if (isHorizontal) {
            if (board[r1 + dir][c1] === 0 && board[r2 + dir][c2] === 0) {
                candidates.push([[r1, c1], [r1 + dir, c1]]);
                candidates.push([[r2, c2], [r2 + dir, c2]]);    
            }
        } else {
            if (board[r1][c1 + dir] === 0 && board[r2][c2 + dir] === 0) {
                candidates.push([[r1, c1], [r1, c1 + dir]]);
                candidates.push([[r2, c2], [r2, c2 + dir]]);
            }
        }
   }
    return candidates;
}

function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    
    const tbPad = Array(rows + 2).fill(1);
    
    for (let i = 0; i < board.length; i++) {
        board[i] = [1, ...board[i], 1];
    }
    
    const newBoard = [tbPad, ...board, tbPad];
    
    const visited = new Set();
    visited.add(`1,1,1,2`);
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [];
    queue.push({ pos: [[1, 1], [1, 2]], cost: 0 });
    
    let head = 0;
    
    while (queue.length > head) {
        const { pos, cost } = queue[head++];
        
        // 1. 목표 도달 확인 로직 작성
        // pos에 있는 두 좌표 중 하나라도 (rows, cols) 라면? 
        // -> 그대로 cost 반환!
        if ((pos[0][0] === rows && pos[0][1] === cols)
           || (pos[1][0] === rows && pos[1][1] === cols)) {
            return cost;
        }
        
        // 2. 현재 위치에서 갈 수 있는 '다음 상태들' 가져오기
        const nextPositions = getNextPositions(pos, newBoard);
        
        // 3. 다음 상태들을 순회하며 visited 체크 후 큐에 삽입
        for (const next of nextPositions) {
            next.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
            
            const posString = `${next[0][0]},${next[0][1]},${next[1][0]},${next[1][1]}`;     
            
            if (!visited.has(posString)) {
                visited.add(posString);
                queue.push({ pos: next, cost: cost + 1 })
            }
        }
        
    }
}