function solution(maps) {
    const answer = []; // var 대신 const 사용
    
    // 2. 반복되는 길이 캐싱
    const rows = maps.length;
    const cols = maps[0].length;
    
    const visited = Array.from({ length: rows }, () => 
        Array(cols).fill(false)
    );
        
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // 3. BFS 로직을 별도의 함수로 분리
    const bfs = (startX, startY) => {
        const queue = [[startX, startY]];
        let sum = Number(maps[startX][startY]);
        visited[startX][startY] = true;
        
        // 4. shift() 대신 인덱스(head)를 사용한 큐 최적화
        let head = 0; 
        
        while (head < queue.length) {
            // 1. 구조 분해 할당
            const [x, y] = queue[head++]; 
            
            for (let k = 0; k < 4; k++) {
                const nextX = x + dx[k];
                const nextY = y + dy[k];
                
                if (0 <= nextX && nextX < rows && 
                    0 <= nextY && nextY < cols && 
                    !visited[nextX][nextY] && 
                    maps[nextX][nextY] !== 'X') {
                    
                    queue.push([nextX, nextY]);
                    sum += Number(maps[nextX][nextY]);
                    visited[nextX][nextY] = true;
                }
            }
        }
        return sum; // 탐색이 끝난 섬의 총 식량 반환
    };

    // 메인 로직이 훨씬 직관적으로 변함
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                answer.push(bfs(i, j));
            }
        }
    }

    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}