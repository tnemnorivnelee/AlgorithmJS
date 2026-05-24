function solution(numbers) {
    var answer = '';
    
    const strNums = numbers.map((value) => String(value));
    const sortedNums = strNums.sort((a, b) => Number(b + a) - Number(a + b));
    
    console.log(sortedNums);
    
    sortedNums.forEach((value) => answer += value);
    
    if (answer[0] === "0") {
        return "0";
    } else {
        return answer;
    }
}