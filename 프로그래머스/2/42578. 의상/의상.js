function solution(clothes) {
    const clothesMap = new Map();
    
    for (let i = 0; i < clothes.length; i++) {
        const [wear, category] = clothes[i];
        
        if (clothesMap.has(category)) {
            clothesMap.get(category).push(wear);
        } else {
            clothesMap.set(category, [wear]);
        }
    }
    
   let answer = 1;
    
    for (const [key, value] of clothesMap) {
        answer *= value.length + 1;
    }
    
    return answer - 1;
    
}