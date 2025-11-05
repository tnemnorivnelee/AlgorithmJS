function solution(array, commands) {
    var answer = [];
    
    for(const [start, end, location] of commands) {
        const slicedArr = array.slice(start - 1, end);
        const sortedSlicedArr = slicedArr.sort((a, b) => a - b);
        answer.push(sortedSlicedArr[location - 1]);
    }
    
    
    return answer;
}