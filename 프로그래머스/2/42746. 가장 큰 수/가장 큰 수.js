function solution(numbers) {
    var answer = '';
    
    const numbersToString = numbers.map(String);
    
    const sortedNumbersToString = numbersToString.sort((a, b) => Number(b + a) - Number(a + b));
    
    answer = sortedNumbersToString.join("");
    
    if (answer[0] === "0") {
        answer = "0";
    }
    
    return answer;
}