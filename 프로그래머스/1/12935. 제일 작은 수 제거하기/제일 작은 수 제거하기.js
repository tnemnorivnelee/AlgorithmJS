function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const min = Math.min(...arr);
    
    const filteredArr = arr.filter((num) => num !== min);
    
    return filteredArr;
}