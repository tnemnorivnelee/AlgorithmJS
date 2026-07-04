// 프로그래머스 거리두기 확인하기

// 개발자를 희망하는 조르디가 카카오에 면접을 보러 왔다

// 코로나 바이러스 감염 예방을 위해 응시자들은 거리를 둬서 대기를 해야하는데
// 개발 직군 면접인 만큼 아래와 같은 규칙으로 대기실에서 거리를 두고 앉도록 안내하고 있다

// 1. 대기실은 5개이며, 각 대기실 크기는 5*5 이다
// 2. 거리두기를 위하여 응시자들 끼리는 맨해튼 거리가 2 이하로 앉지 말아야 한다
// 3. 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀있을 경우에는 허용한다

// 5개의 대기실을 본 조르디는 각 대기실에서 응시자들이 거리두기를 잘 지키고 있는지 알고 싶어졌다
// 자리에 앉아있는 응시자들의 정보와 대기실 구조를 대기실별로 담은 2차월 문자열 배열이 매개변수로 주어진다
// 각 대기실별로 거리두기를 지키고 있으면 1을
// 한 명이라도 지키지 않고 있으면 0 을 배열에 담아 반환하도록 함수를 완성하라

// 1. P = 응시자, 0 = 테이블, X = 파티션
// 2. 맨해튼 거리 = Math.abs(좌표1x - 좌표2x) + Math.abs(좌표1y - 좌표2y)

function solution(places) {
    var answer = [];
    
    const rows = places.length;
    const cols = places[0].length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    function bfs(room, r, c) {
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        const queue = [[r, c, 0]];
        
        visited[r][c] = true;
        
        while (queue.length > 0) {
            const [x, y, distance] = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (0 <= nx && nx < rows
                   && 0 <= ny && ny < cols
                   && !visited[nx][ny]) {
                    if (places[room][nx][ny] === 'P' && distance + 1 <= 2) {
                        return false;
                    } else if (places[room][nx][ny] === 'O') {
                        queue.push([nx, ny, distance + 1]);
                        visited[nx][ny] = true;
                    }
                }
            }
        }
        return true;
    }
    

    
    for (let room = 0; room < 5; room++) {
        const currentRoom = places[room];
        let isSafe = true;
        
        loop1:
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (currentRoom[i][j] === 'P') {
                    if (!bfs(room, i, j)) {
                        isSafe = false;
                        break loop1;
                    }
                }
            }
        }
        if (isSafe) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    
    return answer;
}