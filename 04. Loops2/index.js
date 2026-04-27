//Q1: Write an Function that seraches for an elements in an array and return the index, if the elemets is not presents just return -1.

// Sol: let arr = [10, 7, 8, 0, 20, 34, 6, 7];

// function searchElements (arr, x){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]== x){
//             return i;
//         }
//     }
//      return -1;
// }

// let result = searchElements(arr, 10);
// console.log(result);

// Q2: Write a function that returns the number of negative numbers in an array.

// Sol: let arr = [2 ,4 ,-2, 5, -8, 8, -7, 9];
// function countNegatives(arr){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] <0){
//             count = count + 1;
//         }
//     }
//     return count;
// }

// let res = countNegatives(arr);
// console.log(res);

// Q3: Write a function that returns the largest number in an array.

// let arr = [2, 5, 45, 5, 77, 9];

// function findLargest(arr){
//     let largest = -1;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > largest){
//         largest = arr[i]
//     }
// }
// return largest;
// }

// let res = findLargest(arr);
// console.log(res);

// Q4: Write a function that returns the smallest number in an array.

// let arr = [2, 5, 6, 1, 0, -4, -1, -6];
//   function findSmallest(arr){
//     let smallest = arr[0];
//     for (let i= 1; i< arr.length; i++){
//         if (arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }
//     return smallest;
// }

// let res = findSmallest(arr);
// console.log(res);
