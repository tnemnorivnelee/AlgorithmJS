function solution(s) {
    const arr = s.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [...arr[i]].reduce((acc, cur, i) => i % 2 === 0 ? acc + cur.toUpperCase() : acc + cur.toLowerCase(), "");
    }

    return arr.join(" ");
}