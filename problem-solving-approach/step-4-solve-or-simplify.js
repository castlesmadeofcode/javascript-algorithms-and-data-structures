
//  

// SOLVE THE PROBLEM
// If you can't...
// SOLVE A SIMPLER PROBLEM!

// Simplify:
// Find the core difficulty in what you're trying to do
// Temporarily ignore that difficulty
// Write a simplified solution
// Then incorporate that difficulty back in


function charCount(str) {
  //make object to return at end
  var result = {}
  //loop over string, for each caracter
  for (var i = 0; i < str.length; i++) {
    // make keys lowercase
    var char = str[i].toLowerCase()
    //if the char is a number/letter AND key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    //if the char is a number/letter AND is not in object, add it and set value to 1
    else {
      result[char] = 1;
    };
  }
  //if the char is something else (space, period, etc) dont do anything
  //return object at end
  console.log(result)
  return result;
}

charCount("Hello hi")