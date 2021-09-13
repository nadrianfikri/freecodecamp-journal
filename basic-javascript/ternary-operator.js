/* 
ternary operator dipakai untuk pengkondisian seperti if-else. namun lebih ringkas karena hanya satu baris

contoh a ? b : c
jika a adalah kondisi
b akan berjalan ketika kondisi bernilai true
c akan berjalan ketika kondisi false
(? adalah if. 
: adalah else)
*/

// IF-ELSE
// function findGreater(a, b) {
//     if(a > b) {
//       return "a is greater";
//     }
//     else {
//       return "b is greater or equal";
//     }
//   }

// Jadi TERNARY
// function findGreater(a, b) {
//     return a > b ? "a is greater" : "b is greater or equal";
//   }

// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
  return a == b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);
console.log(checkEqual(2, 2));

/*  OUTPUT
checkEqual should use the conditional operator

checkEqual(1, 2) should return the string Not Equal

checkEqual(1, 1) should return the string Equal

checkEqual(1, -1) should return the string Not Equal
*/
