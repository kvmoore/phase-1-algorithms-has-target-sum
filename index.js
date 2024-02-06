


// an array of integers
// a target integer
// The function should return true if any pair of numbers in the array adds up to the target number.

// Rewrite the Problem in Your Own Words
// Write Your Own Test Cases
// Pseudocode
// Code
// Make It Clean and Readable
// Optimize

function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
      const firstNum = array[i];

      for (let j = i + 1; j < array.length; j++) {
          const secondNum = array[j];

          const sum = firstNum + secondNum;

          if (sum === target) {
              return true;
          }
      }
  }

  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

//O(n2)


/* 
  Add your pseudocode here
*/
// Iterate through array and get a number i

//   Iterate through array again and get number j

//   Compare i and j..does sum equal target

//   if so true


/*
  Add written explanation of your solution here

//Iterates through array number by number
//Iterates through the next number
//sums the the two numbers and compares to target number


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  // add your own custom tests in here


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
