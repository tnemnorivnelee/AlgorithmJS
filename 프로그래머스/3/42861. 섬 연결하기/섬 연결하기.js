function solution(n, costs) {
  // 1. Union-Find를 위한 부모 테이블 초기화 (각 노드의 부모를 자기 자신으로 설정)
  const parent = Array.from({ length: n }, (_, i) => i);

  // find 함수: 루트 노드를 찾고 경로 압축(Path Compression) 진행
  function find(x) {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x])); // 부모를 루트 노드로 직접 갱신
  }

  // union 함수: 두 집합을 합치고, 합쳐졌는지 여부(boolean)를 반환
  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);

    // 루트가 다르면 사이클이 형성되지 않으므로 연결 실행
    if (rootA !== rootB) {
      if (rootA < rootB) {
        parent[rootB] = rootA;
      } else {
        parent[rootA] = rootB;
      }
      return true; // 성공적으로 연결됨
    }
    return false; // 이미 같은 집합 (연결 시 사이클 발생)
  }

  // 2. [그리디] 건설 비용(costs[i][2]) 기준 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  let totalCost = 0;
  let bridgesBuilt = 0;

  // 3. [크루스칼] 가장 저렴한 다리부터 선택하며 MST 완성
  for (const [u, v, cost] of costs) {
    // union이 true를 반환할 때만(사이클이 생기지 않을 때만) 비용 추가
    if (union(u, v)) {
      totalCost += cost;
      bridgesBuilt += 1;

      // 간선 개수가 (정점 - 1)개가 되면 모든 섬이 연결된 것이므로 조기 종료
      if (bridgesBuilt === n - 1) break;
    }
  }

  return totalCost;
}