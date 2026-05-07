function getParent(parent, x) {
    if (parent[x] === x) return x;
    
    return getParent(parent, parent[x]);
}

function unionParent(parent, a, b) {
    const rootA = getParent(parent, a);
    const rootB = getParent(parent, b);

    if (rootA < rootB) {
        parent[rootB] = rootA;
    } else {
        parent[rootA] = rootB;
    }
}

function solution(n, costs) {
    var answer = 0;
    
    const parent = Array.from({length: n}, (_, i) => i);
    
    costs.sort((a,b) => a[2] - b[2]);    
    
    for (const c of costs) {
        const [island1, island2, cost] = c;
        
        if (getParent(parent, island1) !== getParent(parent, island2)) {
            unionParent(parent, island1, island2);
            answer += cost;
        }
    }
    
    
    return answer;
}