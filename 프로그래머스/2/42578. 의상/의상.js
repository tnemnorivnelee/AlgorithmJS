function solution(clothes) {
    var answer = 1;
    
    const nMap = new Map();
    
    clothes.forEach((value) => {
        const [name, category] = value;
        
        if (nMap.has(category)) {
            nMap.set(category, [...nMap.get(category), name]);
        } else {
            nMap.set(category, [name]);
        }
    });
    
    for (const [key, value] of nMap) {
        answer *= value.length + 1;
    }
    
    return answer - 1;
    
    return answer;
}