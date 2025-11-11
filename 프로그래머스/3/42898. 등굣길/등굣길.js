function solution(m, n, puddles) {
    
    const route = Array.from({length: n}, () => new Array(m).fill(0));
    route[0][0] = 1;
    
    puddles = puddles.map(([x, y]) => [y - 1, x - 1]);    
    
    puddles.forEach((value, index) => {
        route[value[0]][value[1]] = -1;
    })
    
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {

            // 1. 현재 칸이 웅덩이(-1)인지 확인
            if (route[y][x] === -1) {
                route[y][x] = 0; // 웅덩이는 0으로 확정 (이후 계산을 위해)
                continue;        // 다음 칸으로 이동
            }

            // 2. 웅덩이가 아니라면, 위쪽(y-1)과 왼쪽(x-1)의 값을 더함
            // (y > 0 이어야 위쪽이 존재, x > 0 이어야 왼쪽이 존재)

            if (y > 0) {
                route[y][x] = (route[y][x] + route[y - 1][x]) % 1000000007;
            }

            if (x > 0) {
                route[y][x] = (route[y][x] + route[y][x - 1]) % 1000000007;
            }

            // (시작점 route[0][0] = 1 은 이 덧셈에 포함되지 않고 1로 유지됩니다)
        }
    }
    
    return route[n - 1][m - 1];
}