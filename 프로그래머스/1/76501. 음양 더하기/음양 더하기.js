function solution(absolutes, signs) {
    return absolutes.map((v, i) => {
        if (!signs[i]) return "" + "-" + v;
        else return v;
    }).reduce((acc, cur) => +acc + +cur, 0);
}