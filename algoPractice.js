// function printAverage(x) {
//   var sum = 0; // Create new Variable for the sum
//   for (let i = 0; i < x.length; i++) { // Loop through array
//     sum = sum + x[i]; // Changing sums value by adding each item of the array together
//   }
//   return sum / x.length; //Dividing sum by length of array for the average
//   // your code here
// }
// var y = printAverage([1, 2, 3]);
// console.log(y); // should log 2

// y = printAverage([5, 2, 8]);
// console.log(y); // should log 5

// Write a function that would print all the odd numbers from 1 to 255

//   for (var i=0; i<=255; i++) //loop through the numbers
//   {
//     if (i%2 !==0) // if the number is not divisible by two console log the number
//       console.log(i);
//   }

// function squareValue(x) {
//   squaredArray = []; // Create a variable to hold new squared array
//   for (let i = 0; i < x.length; i++) { // loop to go through each index of the array
//     var squaredNumber = x[i] * x[i]; // multiply each index by eachother to square
//     squaredArray.push(squaredNumber); // push squared number into the squared array
//   }

//   return squaredArray;
// }
// var y = squareValue([1, 2, 3]);
// console.log(y); // should log [1,4,9]

// y = squareValue([2, 5, 8]);
// console.log(y); // should log [4,25,64]

// Given an array and a value Y, count and print the number of array values greater than Y.

// function foo(x, y) {
//   count = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] > y) {
//       count++;
//       console.log(x[i]);
//     }
//   }
//   console.log(count);
// }

// foo([1, 2, 3, 4], 3);

// Given an array, print the max, min and average values for that array.

// function foo(x) {
//   max = x[0]; // variable for the max number in the array equaled to first number of array
//   min = x[0]; // variable for the min number in the array equaled to first number of array
//   average = 0; // variable for the average of the array
//   sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     //
//     if (min > x[i + 1]) {
//       // If minimum is greater than next index switch them out
//       min = x[i + 1];
//     }
//     if (max < x[i + 1]) {
//       // If maximum is less than the next index switch them out
//       max = x[i + 1];
//     }
//     sum = sum + x[i]; // sum up all indexes in the array
//     average = sum / x.length; // divide sum by array length to get average
//   }
//   console.log(max);
//   console.log(min);
//   console.log(average);
// }

// foo([4, 2, 32, 20]);

// function changeNegatives(x) {
//   newArray = [];
//   for (let i = 0; i < x.length; i++)
//     if (x[i] < 0) {
//       x[i] = "dojo";
//       newArray.push(x[i]);
//     } else {
//       newArray.push(x[i]);
//     }
//   return newArray;
// }

// console.log(changeNegatives([1, 5, -32, 4, -9]));

// function removeVals(x, y, z) {
//   newArray = []; // Create variable for new Array
//   for (let i = 0; i < x.length; i++) {
//     // Loop through array
//     if (i < y || i > z) {
//       // if index is less than y (index provided) or greater than z push into newArray
//       newArray.push(x[i]);
//     }
//   }
//   return newArray;
// }

// console.log(removeVals([20, 30, 40, 50, 60, 70], 2, 4));

// function resetNegatives(x) {
//   newArray = [];
//   for (let i = 0; i < x.length; i++)
//     if (x[i] < 0) {
//       x[i] = 0;
//       newArray.push(x[i]);
//     } else {
//       newArray.push(x[i]);
//     }
//   return newArray;
// }

// console.log(resetNegatives([1, 2, -1, -3]));

// function swapNext(x) {
//   for (let i = 0; i < x.length; i++) {
//     x[i] = x[i + 1];
//   }
//   if ((i = x.length - 1)) {
//     x[i] = 0;
//   }

//   return x;
// }

// console.log(swapNext([1, 2, 3]));

// function reverseArray(x) {
//   newArray = []; //
//   for (let i = x.length - 1; i >= 0; i--) {
//     newArray.push(x[i]);
//   }
//   return newArray;
// }

// console.log(reverseArray([1, 2, 3, 4]));

// function repeatTwice(x) {
//   newArray = [];
//   for (let i = 0; i < x.length; i++) {
//     newArray.push(x[i]);
//     newArray.push(x[i]);
//   }
//   return newArray;
// }

// console.log(repeatTwice([4, "dog", 42, false]));

function sigma(num) {
  sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sigma(3));
