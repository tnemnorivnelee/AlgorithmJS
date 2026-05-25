function solution(arr) {
    return arr.reduce((prev, cur) => [...prev, ...new Array(cur).fill(cur)], []);
}