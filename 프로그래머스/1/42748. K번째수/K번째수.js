function solution(array, commands) {
    return commands.map(([start, end, index]) => array.slice(start - 1, end).sort((a,b) => a - b)[index - 1]);
}