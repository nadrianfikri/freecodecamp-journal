// banyak kondisi seperti if, else-if, dan else

// Contoh if-else
// function findGreaterOrEqual(a, b) {
//     if (a === b) {
//       return "a and b are equal";
//     }
//     else if (a > b) {
//       return "a is greater";
//     }
//     else {
//       return "b is greater";
//     }
//   }
//ternary
// function findGreaterOrEqual(a, b) {
//     return (a === b) ? "a and b are equal"
//       : (a > b) ? "a is greater"
//       : "b is greater";
//   }

// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

function checkSign(num) {
  return num === 0 ? 'zero' : num > 0 ? 'positive' : 'negative';
}

checkSign(10);
console.log(checkSign(-2));

/* OUTPUT
checkSign should use multiple conditional operators

checkSign(10) should return the string positive. Note that capitalization matters

checkSign(-12) should return the string negative. Note that capitalization matters

checkSign(0) should return the string zero. Note that capitalization matters
*/
