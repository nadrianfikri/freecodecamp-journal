// Use Recursion to Create a Countdown

//Buat fungsi countDown yg menerima 1 parameter (n)
// fungsi harus menggunakan rekursi untuk mengembalikan array yg berisi integer (n) sampai 1 berdasarkan parameter (n)
//jika (n) kurang dari 1, fungsi mengembalikan array kosong
// contoh fungsi dg n = 5, maka return array [5, 4, 3, 2, 1]
// tidak boleh menggunakan looping

// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n); //jika push dari belakang, unshift dari depan
    return countArray;
  }
}

// countdown(5);
console.log(countdown(5));

/* OUTPUT
  countdown(-1) should return an empty array.

countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

countdown(5) should return [5, 4, 3, 2, 1]
  */
