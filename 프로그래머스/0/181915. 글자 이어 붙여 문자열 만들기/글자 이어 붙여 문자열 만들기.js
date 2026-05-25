function solution(my_string, index_list) {
    return index_list.reduce((prev, cur) => prev + my_string[cur], "");
}