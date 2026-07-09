// 프로그래머스 가장 먼 노드

// n개의 노드가 있는 그래프가 있다
// 각 노드는 1부터 n까지 번호가 적혀있다
// 1번 노드에서 가장 멀리 떨어진 노드의 개수를 구하려고 한다
// 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드를 의미한다

// 노드의 개수와 간선에 대한 정보가 담긴 2차원 배열이 배개변수로 주어질 때
// 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 반환하는 함수를 완성하다

// 1. 노드의 개수 20000 이하 -> 완전탐색 가능
// 2. 간선 양방향 가능 50000개 이하의 간선 -> 완전 탐색 가능
// 3. 간선 배열 각 행 [a, b]는 a노드 와 b노드 사이에 간선이 있다는 의미
// 4. 최단거리이므로 방문처리 필요
// 5. queue 내부에 [노드번호, 연결된다음노드번호, 간선카운트] 형태로 저장


function solution(n, edge) {
    var answer = 0;
    
    const adj = Array.from({ length: n + 1 }, () => []);
    const distances = Array.from({ length: n + 1 }).fill(-1);
    
    for(const [a, b] of edge) {
        adj[a].push(b);
        adj[b].push(a);
    }
    
    const queue = [1];
    distances[1] = 0;
    
    while (queue.length > 0) {
        const currentNode = queue.shift();
        
        for (let i = 0; i < adj[currentNode].length; i++) {
            const nextNode = adj[currentNode][i];
            
            if (distances[nextNode] === -1) {
                queue.push(nextNode);
                distances[nextNode] = distances[currentNode] + 1;
            }
        }
        
    }
    
    const maxDistance = Math.max(...distances);
    
    console.log(maxDistance);
    
    return distances.filter((v) => v === maxDistance).length;
}