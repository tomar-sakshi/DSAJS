// Loops within loops
// 1.
// for (let i = 0; i < 3; i++) {
//   for (let k = 0; k < 3; k++) {
//     console.log("i=" + i + " k=" + k);
//   }
// }
// i=0 k=0
// i=0 k=1
// i=0 k=2
// i=1 k=0
// i=1 k=1
// i=1 k=2
// i=2 k=0
// i=2 k=1
// i=2 k=2

//2. k < i

// for (let i = 0; i < 3; i++) {
//   for (let k = 0; k < i; k++) {
//     console.log("i=" + i + " k=" + k);
//   }
// }
// i=0 k=x
// i=1 k=0
// i=2 k=0,1

// 3. k <=i

// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k <= i; k++) {
//     console.log("i=" + i + " k=" + k);
//   }
// }

// i         j
// i=0       1 times (k = 0)
// i=1       2 times (0-1)
// i=2       3 times (0-2)
// i=3       4 times (0-3)
// i=4       5 times (0-4)

// 4. j > 0

// for(let i = 0; i < 3; i++){
//     for(k = i; k > 0; k--){
//       console.log("i=" + i + " k=" + k);    
//     }
// }
// i      j  
// 0      X
// 1      1
// 2      2 (2,1)   

// 5. 

// for(i = 5; i > 0; i--){
//     for(k = 0; k < i; k++){
//      console.log("i=" + i + " k=" + k);  
//     }
// }
//  i          j
//  5          0-4(0,1,2,3,4)
//  4          0-3(0,1,2,3)
//  3          0-2(0,1,2)
//  2          0-1(0,1)
//  1          0

