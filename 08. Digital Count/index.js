//Q1- Write a Function that returns the count of digits in a number.

// Ans-

function countDigits(n) {
  if (n==0) return 1;
  // n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = 23456789;
let result = countDigits(num);
console.log(result);


// Maths abs give the number postive.