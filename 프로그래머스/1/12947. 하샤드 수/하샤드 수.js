function solution(x) {
    return Number.isInteger(x / [...x + ""].reduce((acc, cur) => +acc + +cur, 0));
}