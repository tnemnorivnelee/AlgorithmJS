function solution(clothes) {
    
    const clothesMap = new Map();
    
    for (let i = 0; i < clothes.length; i++) {
        const [value, key] = clothes[i];
        
        if (clothesMap.has(key)) {
            clothesMap.get(key).push(value);
        } else {
            clothesMap.set(key, [value]);
        }
    }
    
    console.log(clothesMap);

    let answer = 1;
    
    for (let [key, value] of clothesMap) {
        answer *= value.length + 1;
    }
    
    return answer - 1;
}