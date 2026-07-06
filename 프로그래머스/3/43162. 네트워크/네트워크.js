// 프로그래머스 네트워크

// 네트워크랑 컴퓨터 상호 간에 교환할 수 있도록 연결된 형태를 의미한다
// 예를 들어, 컴퓨터a와 컴퓨터b가 직접적으로 연결되어있고
// 컴퓨터b와 컴퓨터c가 직접적으로 연결되어 있을 때 
// 컴퓨터a와 컴퓨터c도 간접적으로 연결되어 정보를 교환할 수 있다
// 따라서 컴퓨터 a b c는 모두 같은 네트워크 상에 있다고 할 수 있다

// 컴퓨터의 개수 n
// 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질때
// 네트워크 개수를 반환하도록 하는 함수를 작성해라

// 1. 200 이하의 개수 -> 완전탐색 가능
// 2. bfs 방식 접근
// 3. queue 필요
// 4. 방문처리 필요한가??
// 5. computers[i][j] === 1 이면 i 랑 j 는 서로 연결된 컴퓨터
// 6. 한 덩어리의 카운트가 n-1 에 도달하면 answer++ -> 결국 방문처리 필요

function solution(n, computers) {
    var answer = 0;
    
    const visited = Array.from({ length: n }).fill(false);
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            
            const queue = [i];
            visited[i] = true;
            
            while (queue.length > 0) {
                const current = queue.shift();
                
                for (let j = 0; j < n; j++) {
                    if (computers[current][j] === 1 && !visited[j]) {
                        queue.push(j);
                        visited[j] = true;
                    }
                }
                
            }
        }
    }
    
    return answer;
}