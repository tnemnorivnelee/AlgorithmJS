function solution(arr) {
    var answer = [];
    
    arr.forEach((v, i) => {
       for (let j = 0; j < v; j++) answer.push(arr[i]); 
    });
    
    return answer;
}