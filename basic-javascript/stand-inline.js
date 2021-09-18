// Buat fungsi nectInLine yang mengambil array(arr) dan number(item) sbg arguments
// add number di akhir array, lalu hapus elemen pertama array
//fungsi harus mengembalikan elemen yang sudah dihapus

function nextInLine(arr, item) {
  // Only change code below this line

  arr.push(item);

  var removed = arr.shift(item);

  return removed;
  // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));

/* OUTPUT
nextInLine([], 5) should return a number.

Passed
nextInLine([], 1) should return 1

Passed
nextInLine([2], 1) should return 2

Passed
nextInLine([5,6,7,8,9], 1) should return 5

Passed
After nextInLine(testArr, 10), testArr[4] should be 10
*/
