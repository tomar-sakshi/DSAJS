//1.  Four Star Pattern
// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
// ****
// ****
// ****
// ****
//2.

// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {// j < i + 1 or j <=i.........both are same.
//     row = row + "*";
//   }
//   console.log(row);
// }
// *
// **
// ***
// ****

//3.

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }
// 1;
// 12;
// 123;
// 1234;
// 12345;

// 4.

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + i;
//   }
//   console.log(row);
// }
// 1;
// 22;
// 333;
// 4444;
// 55555;

//5.
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }
// 12345;
// 1234;
// 123;
// 12;
// 1;

// 6.
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
// *****
// ****
// ***
// **
// *
// 7.
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - (i + 1); j++) {
//     row = row + ".";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
// ....*
// ...**
// ..***
// .****
// *****