const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);


let result = '';
input.map((el, i) => {
    const stack = [];
    if (i === input.length - 1) return;

    for (let j = 0; j < el.length; j++) {
        const c = el[j];
        const length = stack.length;

        if (c === '(' || c === '[') {
            stack.push(c);
        } else if (c === ')') {
            length === 0 || stack[length - 1] !== '(' ? stack.push(c) : stack.pop();
        } else if (c === ']') {
            length === 0 || stack[length - 1] !== '[' ? stack.push(c) : stack.pop();
        }
    }
    stack.length === 0 ? result += 'yes\n' : result += 'no\n';
});

console.log(result);