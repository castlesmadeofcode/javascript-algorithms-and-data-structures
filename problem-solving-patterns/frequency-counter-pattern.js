// Section 5:27 - Frequency Counter Pattern

// FREQUENCY COUNTERS:
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// Write a function called same, which accepts two arrays. The function should return true
// if every value in the array has it's corresponding value squared in the second array.
//  The frequency of values must be the same.

// A NAIVE SOLUTION - Time Complexity - N^2 - quadratic time
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if index of arr[i] ** 2 (squared) does not exist in array return false
    if (correctIndex === -1) {
      return false;
    }
    //remove index from array on each loop
    arr2.splice(correctIndex, 1);
  }
  //because we never returned false, return true
  return true;
}

// REFACTORED - Time Complexity - O(n) - linear time
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // for each val in arr1 add 1 to frequency counter if it's already in there, or initialize it to 1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // console.log(frequencyCounter1);
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    // if key ** 2 a key is not in frequencyCounter2 return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // make sure values correspond if not return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

same2([1, 2, 2, 3], [1, 4, 4, 9]);
