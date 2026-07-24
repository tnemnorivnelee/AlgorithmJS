// 프로그래머스 경주로 건설

// 건설회사의 설계사인 죠르디는 고객사로부터 자당차 경주로 건설에 필요한 견적을 의뢰받았다
// 제공된 경루조 설계 도면에 따르면 경주로 부지는 N*N 크기의 정사각형 격자 형태이며 각 격자는 1*1 크기이다
// 설계 도면에는 각 격자 칸은 0 또는 1 로 채워져 있으며, 0 은 칸이 비어 있음을 1 은 해당 칸이 벽으로 채줘져 있음을 의미한다

// 경주로 출발점은 (0, 0)칸(좌측상단)이며, 도착점은 (N-1, N-1) 이다
// 죠르디는 출발점 칸에서 출발한 자동차가 도착점 칸까지 무사히 도달할 수 있게 중간에 끊기지 않도록 경주로를 컨설해야 한다
// 경주로는 상하좌우로 인접한 두 빈 칸을 연결하여 건설할 수 있으며, 벽이 있는 칸에는 경주로를 건설할 수 없다
// 이때, 인접한 두 빈 칸을 상하 또는 좌우로 연결한 경주로를 '직선 도로' 라고 한다
// 또한 두 '직선 도로' 가 서로 직각으로 만나는 지점을 코너라고 부른다

// 건설 비용을 계산해 보니 직선도로 하나 만들 때는 100원이 소요되며
// 코너 하나 만들 때는 500원이 추가로 든다

// 죠르디는 견적서 작성을 위해 경주로를 건설하는 데 필요한 최소 비용을 계산해야 한다
// 예를 들어, 아래 그림은 직선도로 6개와 코너 4개로 구성된 임의의 경주로 예시이며, 건설 비용은 6*100+4*500=2600원 이다

// 도면의 상태(0은 비어 있음, 1은 벽)을 나타내는 2차원 배열 board가 매개변수로 주어질 때
// 경주로를 건설하는데 필요한 최소 비용을 반환하는 함수를 완성하라

// 1. 25*25 크기는 완전탐색 가능
// 2. 최소 비용이므로 bfs 방식
// 3. 방문 처리 필요
// 4. 상하 -> 좌우 혹은 좌우 -> 상하 로 바뀌는 경우 코너 계산을 추가
// 5. 

function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    
    const visited = Array.from({ length: rows }, () => (
        Array.from({ length: cols }, () => Array(4).fill(Infinity))
    ));
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [[0, 0, 0, -1]];
    
    
    while (queue.length > 0) {
        const [x, y, cost, direction] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            const nd = i;
            let nc = 0;
            
            if (0 <= nx && nx < rows
               && 0 <= ny && ny < cols
               && board[nx][ny] !== 1) {
                if (direction === -1 || direction === nd) {
                    nc = cost + 100;
                } else {
                    nc = cost + 100 + 500;
                }
                if (nc < visited[nx][ny][nd]) {
                    visited[nx][ny][nd] = nc;
                    queue.push([nx, ny, nc, nd]);
                }
            }
        }
    }
    return Math.min(...visited[rows - 1][cols - 1]);
}