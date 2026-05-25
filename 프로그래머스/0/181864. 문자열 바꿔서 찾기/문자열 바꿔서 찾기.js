function solution(myString, pat) {
    return +[...myString].reduce((prev, cur) => cur === "A" ? prev + "B" : prev + "A", "").includes(pat);
}