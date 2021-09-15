// Use Recursion to Create a Range of Numbers

// buat fungsi bernama rangeOfNumbers dg 2 params
// mengembalikan array dg nilai dari startNum hingga 1 sebelum endNum
//

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    let num = rangeOfNumbers(startNum, endNum - 1);
    num.push(endNum);
    return num;
  }
}

rangeOfNumbers(1, 5);
console.log(rangeOfNumbers(6, 9));

/* 
Your function should return an array.

Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).

rangeOfNumbers should use recursion (call itself) to solve this challenge.

rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].

rangeOfNumbers(6, 9) should return [6, 7, 8, 9].

rangeOfNumbers(4, 4) should return [4].
*/
