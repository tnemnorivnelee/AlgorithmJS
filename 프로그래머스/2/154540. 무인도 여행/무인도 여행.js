// 프로그래머스 무인도 여행
// 메리는 여름을 맞아 무인도로 여행을 가기 위해 지도를 보는 중
// 지도에는 바다와 무인도들에 대한 정보가 표시돼 있음

// 지도에는 1*1크기의 사각형들로 이루어진 직사각형 격자 형태이며
// 격자의 각 칸에는 X 또는 1에서 9사이의 자연수가 적혀있음

// 지도의 X 는 바다를 나타냄
// 숫자는 무인도를 나타냄
// 이때 상하좌우로 연결되는 땅들은 하나의 무인도를 이룸
// 지도의 각 칸에 적힌 숫자는 식량을 나타내는데
// 상하좌우로 연결되는 칸에 적힌 숫자를 모두 합한 값은 해당 무인도에서 최대 며칠동안 머물 수 있는지 나타냄

// 어떤 섬으로 놀러 갈지 못 정한 메리는 우선 각 섬에서 최대 며칠을 머물 수 있는지 알아본 후 놀러갈 섬을 결정

// 지도를 나타내는 문자열 배열이 매개변수로 주어질 때
// 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 반환하는 함수를 완성해라
// 만약 지낼 수 없는 무인도가 없다면 -1 을 배열에 담아 반환해라

function solution(maps) {
    var answer = [];
    
    const queue = [];
    
    const visited = Array.from({ length: maps.length }, () => (
        Array(maps[0].length).fill(false)
    ));
        
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            let sum = 0;
            
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                queue.push([i, j]);
                sum += Number(maps[i][j]);
                visited[i][j] = true;
            }
            
            while (queue.length > 0) {
                const currentLoc = queue.shift();
                
                for (let k = 0; k < 4; k++) {
                    const nextX = currentLoc[0] + dx[k];
                    const nextY = currentLoc[1] + dy[k];
                    
                    if (0 <= nextX && nextX < maps.length
                       && 0 <= nextY && nextY < maps[i].length
                       && !visited[nextX][nextY]
                       && maps[nextX][nextY] !== 'X') {
                        queue.push([nextX, nextY]);
                        sum += Number(maps[nextX][nextY]);
                        visited[nextX][nextY] = true;
                    }
                }
            }
            if (sum > 0) answer.push(sum);
        }
    }

    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}