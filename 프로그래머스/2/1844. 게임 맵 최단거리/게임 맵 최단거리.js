function solution(maps) {
    const queue = [];
    
    const direction = [
        [-1, 0], // 상 (row - 1)
        [1, 0],  // 하 (row + 1)
        [0, -1], // 좌 (col - 1)
        [0, 1]   // 우 (col + 1)
    ];
    
    function bfs(row, col, distance) {
        maps[row][col] = 0;
        queue.push([row, col, distance]);
        
        while (queue.length > 0) {
            const [currentRow, currentCol, currentDist] = queue.shift();
            
            const n = maps.length;
            const m = maps[0].length;
            
            if (currentRow === n - 1 && currentCol === m - 1) {
                return currentDist;
            }            
            
            for (let i = 0; i < direction.length; i++) {
                const nextRow = currentRow + direction[i][0];
                const nextCol = currentCol + direction[i][1];

                if (0 <= nextRow && nextRow < n && 0 <= nextCol && nextCol < m && maps[nextRow][nextCol] === 1) {    
                    maps[nextRow][nextCol] = 0;
                    queue.push([nextRow, nextCol, currentDist + 1]);
                }
            }
        }
        return -1;
    }
    return bfs(0, 0, 1);
}