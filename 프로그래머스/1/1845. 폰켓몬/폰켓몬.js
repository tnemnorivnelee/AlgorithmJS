function solution(nums) {
    var answer = 0;

    const ns = new Set(nums);
    
    answer = Math.min(ns.size, nums.length / 2);
    
    return answer;
}