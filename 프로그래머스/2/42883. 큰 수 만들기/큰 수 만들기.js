function solution(number, k) {
    let answer = '';
    
    const stack = [];
    
    for (const num of number) {
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    
    if (k > 0) {
        answer = stack.slice(0, stack.length - k).join("");
    } else {
        answer = stack.join("");
    }
    return answer;
}