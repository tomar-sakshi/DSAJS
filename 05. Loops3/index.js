// Find second largest number in an array.

function secondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if (arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstlargest = arr[i];
        }
    else if (arr[i] > secondLargest){
        secondLargest = arr[i];
    }
    }
   return secondLargest;
}

let arr = [10 ,2 ,7 ,9 ,6 ,11];

let result = secondLargest(arr);        