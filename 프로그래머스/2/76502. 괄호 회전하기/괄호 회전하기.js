// 올바른 괄호 문자열 정의

// (), [], {} 는 모두 올바른 괄호 문자열
// 만약 a 가 올바른 괄호 문자열이라면 (a), [a]. {a} 도 모두 올바른 괄호 문자열
// [] 가 올바른 괄호 문자열이므로 ([]) 도 올바른 괄호 문자열

// 대괄호 중괄호 소괄호로 이루어진 문자열 매개변수 s
// s 를 왼쪽으로 x 칸만큼 회전시켰을 때 s 가 올바른 괄호 문자열이 되게 하는 x 의 개수를 return

function solution(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        const stack = [];
        const firstChar = s[0];
        
        s = s.slice(1);
        s += firstChar;
        
        let j = 0;
        
        while (j < s.length) {
            const head = stack[stack.length - 1];

            if ((head === "{" && s[j] === "}") 
                || (head === "[" && s[j] === "]") 
                || (head === "(" && s[j] === ")")) {
                stack.pop();
            } else {
                stack.push(s[j]);
            }
            j++;
        }
        if (stack.length === 0) count++;
    }
    return count;
}