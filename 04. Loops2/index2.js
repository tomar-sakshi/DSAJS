//Q1: Write an Function that seraches for an elements in an array and return the index, if the elemets is not presents just return -1.
//Ans

// function searchElements(arr, elem) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == elem) {
//       return i;
//     }
//   }
//   return -1;
// }
// const arr = [20, 30, 4, 5, 2, 10];
// const result = searchElements(arr, 10);
// console.log(result);

//Q2: Write a function that returns the number of negative numbers in an array.
// Ans

// function countNegatives(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count = count + 1;
//     }
//   }
//   return count;
// }
// const arr = [10, 23, -3, 8, -2, 4, -8, 7, -9, 6];
// const result = countNegatives(arr);
// console.log(result);

//Q3: Write a function that returns the largest number of an array.
// Ans

// function findLargest(arr) {
//   let largest = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// const arr = [20, 3, 4, 0, 34, 2, 10];
// const result = findLargest(arr);
// console.log(result);

//Q4: Write a function that returns the smallest number of an array.
// Ans 
// function findSmallest(arr){ 
//   let smallest = Infinity;
//   for(let i = 0; i < arr.length; i++){
//       if (arr[i] < smallest){
//         smallest = arr[i];
//       }
//   }
//   return smallest;
// }

// const arr = [8, -2, -6, 9, -21, -1, 8 ];
// const result = findSmallest(arr);
// console.log(result);
