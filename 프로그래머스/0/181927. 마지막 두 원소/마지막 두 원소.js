function solution(num_list) {
    const head = num_list.at(-2);
    const tail = num_list.at(-1);
    
    num_list.push(head < tail ? tail - head : tail * 2);
    
    return num_list;
}