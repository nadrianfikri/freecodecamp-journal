// dalam permainan golf, hole mempunyai par, yg berarti rata2 angka pukulan(strokes).
// Fungsi akan melihat argument par dan strokes.
// kembalikan string yg benar berdasarkan tabel di bawah ini
/* 
Strokes	        Return
1	            "Hole-in-one!"
<= par - 2	    "Eagle"
par - 1	        "Birdie"
par	            "Par"
par + 1	        "Bogey"
par + 2	        "Double Bogey"
>= par + 3	    "Go Home!"
*/

var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes - par <= -2) {
    return names[1];
  } else if (strokes - par === -1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes - par === 1) {
    return names[4];
  } else if (strokes - par === 2) {
    return names[5];
  } else {
    return names[names.length - 1];
  }

  // Only change code above this line
}

console.log(golfScore(5, 8));

/* OUTPUT
golfScore(4, 1) should return the string Hole-in-one!

golfScore(4, 2) should return the string Eagle

golfScore(5, 2) should return the string Eagle

golfScore(4, 3) should return the string Birdie

golfScore(4, 4) should return the string Par

golfScore(1, 1) should return the string Hole-in-one!

golfScore(5, 5) should return the string Par

golfScore(4, 5) should return the string Bogey

golfScore(4, 6) should return the string Double Bogey

golfScore(4, 7) should return the string Go Home!

golfScore(5, 9) should return the string Go Home!
*/
