function solution(dirs) {
    let x = 0;
    let y = 0;
    
    const ns = new Set();
    
    for (let i = 0; i < dirs.length; i++) {
        let order = dirs[i];
        
        let nextX = x;
        let nextY = y;
        
        switch (order) {
            case 'U':
                nextY++;
                break;
            case 'D':
                nextY--;
                break;
            case 'R':
                nextX++;
                break;
            case 'L':
                nextX--;
                break;
        }
        
        if (-5 <= nextX && nextX <= 5 && -5 <= nextY && nextY <= 5) {
            ns.add(`${x},${y}/${nextX},${nextY}`);
            ns.add(`${nextX},${nextY}/${x},${y}`);
            x = nextX;
            y = nextY;
        }
        
    }
    
    return ns.size / 2;
}