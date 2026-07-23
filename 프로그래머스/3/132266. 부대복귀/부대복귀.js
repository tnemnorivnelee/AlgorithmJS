// 프로그래머스 부대복귀

// 강철부대의 각 부대원이 여러 지역에 뿔뿔이 흩어져 특수 임무를 수행 중이다
// 지도에서 강철부대가 위치한 지역을 포함한 각 지역은 유일한 번호로 구분되며
// 두 지역 간의 길을 통과하는 데 걸리는 시간은 모두 1로 동일하다

// 임무를 수행한 각 부대원은 지도 정보를 이용하여 최단시간에 부대로 복귀하고자 한다
// 다만 적군의 방해로 인해, 임무의 시작 때와 다르게 되돌아오는 경로가 없어져 복귀가 불가능한 분대원도 있을 수 있다

// 강철부대가 위치한 지역을 포함한 총지역의 수
// 두 지역을 왕복할 수 있는 길 정보를 담은 2차원 정수 배열,
// 각 부대원이 위치한 서로 다른 지역들을 나타내는 정수 배열,
// 강철부대의 지역이 매개변수로 주어졌을 때
// 주어진 원소 순서대로 강철부대로 복귀할 수 있는 최단 시간을 담은 배열을 반환하는 함수를 완성하라

// 단, 복귀가 불가능한 경우 해당 부대원의 최단시간은 -1 이다
// 제한사항 기준 완전탐색 가능
// bfs 방식
// 방문처리 필요
 

function solution(n, roads, sources, destination) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of roads) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const dist = Array(n + 1).fill(-1);
    
    dist[destination] = 0;
    
    const queue = [destination];
    let head = 0;
    
    // BFS 탐색 시작
    while (head < queue.length) {
        const current = queue[head++]; // shift() 대신 head 포인터 증가
        
        // ----------------------------------------------------
        // [질문] 이 안에서 current와 연결된 다음 노드(next)들을 탐색해야 합니다.
        // 아직 방문하지 않은(dist[next] === -1) 노드를 발견했다면, 
        // 1) 거리를 어떻게 갱신하고 
        // 2) 큐에 어떻게 넣어야 할까요?
        // ----------------------------------------------------
        for (let i = 0; i < graph[current].length; i++) {
            const next = graph[current][i];
            
            if (dist[next] === -1) {
                dist[next] = dist[current] + 1;
                queue.push(next);
            }
        }
        
    }
    
    // sources에 있는 각 부대원들의 위치에 해당하는 최단 거리를 매핑해서 반환
    return sources.map(source => dist[source]);
}