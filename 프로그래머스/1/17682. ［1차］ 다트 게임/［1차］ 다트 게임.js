function solution(dartResult) {
    const stack = [];
    
    let tempScore = 0;
    
    for (let i = 0; i < dartResult.length; i++) {
        const char = dartResult[i];
        
        if (!isNaN(char)) {
            if (char === '0' && dartResult[i - 1] === '1') {
                tempScore = 10;
            } else {
                tempScore = parseInt(char, 10);
            }
        }
        else {
            switch (char) {
                case "S":
                    stack.push(Math.pow(tempScore, 1));
                    break;
                case "D":
                    stack.push(Math.pow(tempScore, 2));
                    break;
                case "T":
                    stack.push(Math.pow(tempScore, 3));
                    break;
                case "*":
                    stack[stack.length - 1] *= 2;
                    if (stack.length > 1) stack[stack.length - 2] *= 2;
                    break;
                case "#":
                    stack[stack.length - 1] *= -1;
                    break;
            }
        }
    }

    return stack.reduce((acc, cur) => acc + cur, 0);
}