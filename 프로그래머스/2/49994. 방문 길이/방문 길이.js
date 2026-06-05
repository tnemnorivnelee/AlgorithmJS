// 게임 캐릭터를 4가지 명령어를 통해 움직이려고 한다

// U : 위로 한칸 -> y++
// D : 아래로 한칸 -> y--
// R : 오른쪽으로 한칸 -> x++
// L : 왼쪽으로 한칸 -> x--

// 캐릭터는 좌표 (0, 0) 위치에서 시작
// 좌표평면의 경계는 
// 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

function solution(dirs) {
    let x = 0;
    let y = 0;
    
    const ns = new Set();
    
    for (let i = 0; i < dirs.length; i++) {
        const order = dirs[i];
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
            const key1 = `${x},${y}/${nextX},${nextY}`;
            const key2 = `${nextX},${nextY}/${x},${y}`;
            
            if (!ns.has(key1)) {
                ns.add(key1);
                ns.add(key2);
            }
            x = nextX;
            y = nextY;
        }
    }
    return ns.size / 2;    
}