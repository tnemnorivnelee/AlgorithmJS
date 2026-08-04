// 프로그래머스 지형 이동

// N * N 크기인 정사각 격자 형태의 지형이 있다
// 각 격자 칸은 1 * 1 크기이며, 숫자가 하나씩 적혀있다
// 격자 칸에 적힌 숫자는 그 칸의 높이를 나타낸다

// 이 지형의 아무 칸에서나 출발해 모든 칸을 방문하는 탐험을 떠나려 한다
// 칸을 이동할 때는 상하좌우 한 칸씩 이동할 수 있는데
// 현재 칸과 이동하려는 칸의 높이 차가 height 이하여야 한다
// 높이 차가 height 보다 많이 나는 경우에는 사다리를 설치해서 이동할 수 있다
// 이때, 사다리를 설치하는데 두 격자 칸의 높이차만큼 비용이 든다
// 따라서, 최대한 적은 비용이 들도록 사다리를 설치해서 모든 칸으로 이동 가능하도록 해야 한다
// 설치할 수 있는 사다리 대수에 제한은 없으며, 설치한 사다리는 철거하지 않는다

// 각 격자칸의 높이가 담긴 2차원 배열 land
// 이동 가능한 최대 높이차 height 가 매개변수로 주어진다
// 모든 칸을 방문하기 위해 필요한 사다리 설치 비용의 최솟값을 반환하는 함수를 완성하라

// 최대 크기는 300 * 300 -> 90000
// height 는 10000 이하 자연수


function solution(land, height) {
    const landLen = land.length;
    const group = Array.from({ length: landLen }, () => Array(landLen).fill(0));
    let groupId = 0;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    for (let i = 0; i < landLen; i++) {
        for (let j = 0; j < landLen; j++) {
            // 이미 구역이 할당되었다면 건너뛰기
            if (group[i][j] !== 0) continue;
            
            groupId++;
            
            const queue = [[i, j]];
            let head = 0;
            group[i][j] = groupId; // groupId 가 뭐길래 group[i][j] 에 할당하는 거지? 상관관계를 모르겠음.
            
            while (queue.length > head) {
                const [x, y] = queue[head++];
                
                for (let k = 0; k < 4; k++) {
                    const [nx, ny] = [x + dx[k], y + dy[k]];
                    
                    if (0 <= nx && nx < landLen
                       && 0 <= ny && ny < landLen
                       && group[nx][ny] === 0) {
                        if (Math.abs(land[x][y] - land[nx][ny]) <= height) {
                            group[nx][ny] = groupId;
                            queue.push([nx, ny]);
                        }
                    }
                }
                
            }
        }
    }
    
    
    const edges = [];
    
    for (let i = 0; i < landLen; i++) {
        for (let j = 0; j < landLen; j++) {
            for (let k = 0; k < 4; k++) {
                const [nx, ny] = [i + dx[k], j + dy[k]];
                
                if (0 <= nx && nx < landLen
                   && 0 <= ny && ny < landLen) {
                    const g1 = group[i][j];
                    const g2 = group[nx][ny];
                    
                    if (g1 !== g2) {
                        const cost = Math.abs(land[i][j] - land[nx][ny]);
                        edges.push({ u: g1, v: g2, cost });
                    }
                }
            }
        }
    }
    
    edges.sort((a, b) => a.cost - b.cost);
    
    const parent = Array.from({ length: groupId + 1 }, (_, i) => i);
    
    function find(x) {
        if (parent[x] === x) return x;
        return (parent[x] = find(parent[x]));
    }
    
    function union(a, b) {
        const [rootA, rootB] = [find(a), find(b)];
        
        if (rootA !== rootB) {
            if (rootA < rootB) {
                parent[rootB] = rootA;
            } else {
                parent[rootA] = rootB;
            }
            return true;
        }
        return false;
    }
    
    let totalCost = 0;
    
    for (const {u, v, cost} of edges) {
        if (union(u, v)) {
            totalCost += cost;
        }
    }
    
    return totalCost;
}