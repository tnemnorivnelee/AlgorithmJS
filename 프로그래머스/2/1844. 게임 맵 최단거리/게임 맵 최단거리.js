/*
[
    [1,0,1,1,1],
    [1,0,1,0,1],
    [1,0,1,1,1],
    [1,1,1,0,1],
    [0,0,0,0,1]
]
*/

function solution(maps) {
    const row = maps[0].length;
    const col = maps.length;
    
    const direction = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0]
    ]; // 동서남북 순서
    
    const queue = [];
    queue.push([0, 0]);
    
    while (queue.length > 0) {
        const [y, x] = queue.shift();
        
        for (let i = 0; i < direction.length; i++) {
            const [dy, dx] = direction[i];
            
            const ny = y + dy;
            const nx = x + dx;
            
            if (0 <= nx && nx < row && 0 <= ny && ny < col && maps[ny][nx] === 1) {
                maps[ny][nx] = maps[y][x] + 1;
                
                queue.push([ny, nx]);
            }
        }
    }
    
    return maps[col - 1][row - 1] > 1 ? maps[col - 1][row - 1] : -1;
}