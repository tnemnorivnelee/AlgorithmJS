function solution(numbers) {
    return numbers.reduce((prev, cur) => prev + cur, 0) / numbers.length;
}