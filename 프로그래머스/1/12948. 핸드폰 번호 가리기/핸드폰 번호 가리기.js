function solution(phone_number) {
    return [...phone_number].reduce((acc, cur, i) => i < phone_number.length - 4 ? acc + "*" : acc + cur, "");
}