function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    const queue = [];
    queue.push([0, 0]);
    
    while (queue.length > 0) {
        const [y, x] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if (0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] === 1) {
                maps[ny][nx] = maps[y][x] + 1;
                
                queue.push([ny, nx]);
            }
        }
    }
    return maps[n - 1][m - 1] > 1 ? maps[n - 1][m - 1] : -1;
}