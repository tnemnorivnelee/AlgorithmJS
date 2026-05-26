function solution(my_string, letter) {
    // return [...my_string].filter((v) => v !== letter).join("");
    return my_string.split(letter).join("");
}