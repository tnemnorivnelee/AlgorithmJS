function solution(rny_string) {
    return [...rny_string].reduce((prev, cur) => cur === "m" ? prev + "rn" : prev + cur, "");
}