// 프로그래머스 네트워크

// 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미한다
// 예를 들어, 컴퓨터1과 컴퓨터2가 직접적으로 연결되어있고, 컴퓨터2와 컴퓨터3이 직접적으로 연결되어 있을 때
// 컴퓨터1과 컴퓨터3도 간접적으로 연결되어 정보를 교환할 수 있다
// 따라서 컴퓨터1,2,3은 모두 같은 네트워크 상에 있다고 볼 수 있다

// 컴퓨터의 개수 n
// 연결에 대한 정보가 담긴 2차원 배열 computers
// 네트워크의 개수를 반환하는 함수를 작성하라

// 200 이하인 자연수
// 각 컴퓨터는 0 ~ n - 1 인 정수로 표현 -> 배열 인덱스 번호
// i 번 컴퓨터와 j 번 컴퓨터가 연결되어 있으면 computers[i][j] 로 표현
// computers[i][i] 는 항상 1 이다


function solution(n, computers) {
    const parent = Array.from({ length: n }, (_, i) => i);
    
    function find(x) {
        if (parent[x] === x) return x;
        return (parent[x] = find(parent[x]));
    }
    
    function union(c1, c2) {
        const rootA = find(c1);
        const rootB = find(c2);
        
        if (rootA !== rootB) {
            if (rootA < rootB) {
                parent[rootA] = rootB;
            } else {
                parent[rootB] = rootA;
            }
            return true;
        }
        return false;
    }
    
    let answer = n;
 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < computers[i].length; j++) {
            if (computers[i][j] === 1) 
                if (union(i, j)) {
                    answer--;
                }
        }
    }
    
    return answer;
}