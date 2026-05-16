function solution(s){
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === "(") {
            stack.push(char);
        } else {
            if (!stack.length) return false;
            stack.pop();
        }
    }
    

    return stack.length ? false : true;
}