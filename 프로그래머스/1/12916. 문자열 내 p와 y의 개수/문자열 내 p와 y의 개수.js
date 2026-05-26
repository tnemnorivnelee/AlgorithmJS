function solution(s) {
    const sArr = [...s.toUpperCase()];
    const PCount = sArr.filter(v => v === "P").length;
    const YCount = sArr.filter(v => v === "Y").length;

    return PCount === YCount;
}

