function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    else {
        const arr1Total = arr1.reduce((prev, cur) => prev + cur, 0);
        const arr2Total = arr2.reduce((prev, cur) => prev + cur, 0);
        
        if (arr1Total === arr2Total) return 0;
        
        return arr1Total > arr2Total ? 1 : -1;
    }
    
}