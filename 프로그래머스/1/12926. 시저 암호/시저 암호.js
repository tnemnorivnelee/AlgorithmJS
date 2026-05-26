function solution(s, n) {
    return [...s].reduce((acc, cur) => {
        if (cur === " ") return acc + " ";
        
        let asciiCode = cur.charCodeAt();
        
        if (65 <= asciiCode && asciiCode <= 90) {
            asciiCode += n;
            if (asciiCode > 90) asciiCode -= 26;
        }
        else if (97 <= asciiCode && asciiCode <= 122) {
            asciiCode += n;
            if (asciiCode > 122) asciiCode -= 26;
        }
        
        return acc + String.fromCharCode(asciiCode);
    }, "");
}