function solution(clothes) {
    var answer = 1;
    
    const nm = new Map();
    
    clothes.forEach((v) => {
        const [name, category] = v;
        
        if (nm.has(category)) {
            nm.set(category, nm.get(category) + 1);
        } else {
            nm.set(category, 1);
        }
    });
    
    for (const v of nm.values()) answer *= v + 1;
    
    return answer - 1;
}