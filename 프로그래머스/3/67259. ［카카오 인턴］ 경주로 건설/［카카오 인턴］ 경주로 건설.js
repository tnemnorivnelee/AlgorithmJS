function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    
    const visited = Array.from({ length: rows }, () => (
        Array.from({ length: cols }, () => Array(4).fill(Infinity))
    ));
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [];
    queue.push([0, 0, 0, -1]); // x, y, 비용, 방향
    
    let head = 0;
    
    while (queue.length > head) {
        const [x, y, cost, direction] = queue[head++];
        
        for (let i = 0; i < 4; i++) {
            let [nx, ny, nc, nd] = [x + dx[i], y + dy[i], 0, i];
            
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