// Find second largest number in an array.

// function secondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }
//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = arr[i];
//     } else if (arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }
// let arr = [10];
// // let arr = [2, 10, 7, 9, 6, 11];

// let result = secondLargest(arr);
// console.log(result);

// Think about Coner case........
//what if arr is empty.........[] it will give object Object
//if arr has one value............[10].........return object object
// if arr has two value...........[10,2].......return 2

// If the interview says arr has less than two elements then return null.
//  if(arr.length < 2){
//     return null;
//  }

// if arr has negative numbers.....
// const arr = [-2, -4, -25, -1, 0]............firstLargest = -1 , secondLargest = -2.

//if arr has duplicate value
//const arr = [10, 20, 35, 30, 35].................firstLargest = 35 , secondLargest = 35.
// else if (arr[i] > secondLargest && arr[i] != firstLargest).............so it return sL.......20
