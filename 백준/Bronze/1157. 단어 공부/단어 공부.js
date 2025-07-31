const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const checkList = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  let char = input[i].charCodeAt(0);
  if (char >= 97) {
    char -= 32;
  }
  checkList[char - 65]++;
}

const manyUsedNumber = Math.max(...checkList);

const result = checkList.filter((item) => item === manyUsedNumber);

if (result.length === 1) {
  const manyUsedNumberIndex = checkList.findIndex(
    (value) => value === manyUsedNumber
  );
  console.log(String.fromCharCode(manyUsedNumberIndex + 65));
} else {
  console.log("?");
}
