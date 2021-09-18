// casino game BlackJack
/* rules
Count Change	Cards
+1	            2, 3, 4, 5, 6
0	            7, 8, 9
-1	            10, 'J', 'Q', 'K', 'A'
*/
// gunakan switch statement
//  fungsi countingCard akan menerima card sbg parameter, nilainya bisa string atau number
// lalu sesuai aturan, jumlahkan kepada variable count
// fungsi akan mengembalikan string dg current count dan string "Bet" jika count positif
// "Hold" jika count negatif
// ex: -3 Hold atau 5 Bet

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;

  // Only change code above this line
}

cc(3);
cc(7);
cc('Q');
cc(8);
let result = cc('A');
// console.log(cc(2), cc(3), cc(4), cc(5), cc(6));
console.log(result);

/* OUTPUT
Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet

Cards Sequence 7, 8, 9 should return the string 0 Hold

Cards Sequence 10, J, Q, K, A should return the string -5 Hold

Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold

Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet

Cards Sequence 2, 2, 10 should return the string 1 Bet

Cards Sequence 3, 2, A, 10, K should return the string -1 Hold
*/
