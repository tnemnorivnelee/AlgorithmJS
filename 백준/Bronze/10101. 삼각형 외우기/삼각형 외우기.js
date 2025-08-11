const fs = require('fs');
const angles = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const sum = angles.reduce((acc, cur) => acc + cur, 0);

if (sum !== 180) {
  console.log('Error');
} else {
  const uniqueAngles = new Set(angles);

  if (uniqueAngles.size === 1) {
    console.log('Equilateral');
  } else if (uniqueAngles.size === 2) {
    console.log('Isosceles');
  } else { 
    console.log('Scalene');
  }
}