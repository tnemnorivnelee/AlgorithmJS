function solution(arr)
{
    var answer = [];
    
    arr.forEach((value) => {
        if (answer[answer.length - 1] !== value) answer.push(value);
    });

    return answer;
}