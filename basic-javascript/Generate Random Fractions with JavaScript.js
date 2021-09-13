function randomFraction() {
  // Change randomFraction to return a random number instead of returning 0.

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}
function randomWholeNum() {
  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

/* output
randomFraction should return a random number.

The number returned by randomFraction should be a decimal.

You should be using Math.random to generate the random decimal number. */
