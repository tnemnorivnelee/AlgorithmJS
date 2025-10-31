function solution(nums) {
  var answer = 0;

  const setNums = new Set(nums);

  answer = Math.min(nums.length / 2, setNums.size);

  return answer;
}