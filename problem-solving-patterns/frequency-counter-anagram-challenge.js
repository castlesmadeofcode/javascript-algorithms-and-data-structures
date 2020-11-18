// Section 5:28 - Frequency Counter Anagram Challenge

// FREQUENCY COUNTERS:
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram
// of the first. An anagram is a word, phrase, or name formed by rearranging the letters
// of another, such as cinema, formed from iceman.

// create an object that is going to represent the occurence of each letter in a string
// one loop to create object one loop to compare object and (update)?

// all inputs single words, lowercase, no nums/spaces/etc.

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  // if letters in arr 1 === letters in arr 2

  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // if key in frequencyCounter1 is not a a key in frequencyCounter2 return false
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    // make sure values correspond if not return false
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log("true");
  return true;
}

validAnagram("anagram", "margana");
validAnagram("mnop", "omnp");
validAnagram("n", "n");
validAnagram("iceman", "cinema");

// Teachers solution

function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram2("anagrams", "nagaramm");
