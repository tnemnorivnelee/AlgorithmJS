function solution(n, control) {
    const operations = {
        "w": 1,
        "s": -1,
        "d": 10,
        "a": -10,
    };
    
    return [...control].reduce((prev, cur) => prev + operations[cur], n);
}