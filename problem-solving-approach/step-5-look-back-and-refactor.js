
// Section 4:23 - Step 5: Look Back and Refactor

// REFACTORING QUESTIONS
// Can you check the result?
// Can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method for some other problem?
// Can you improve the performance of your solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?
// (ask interviewer)


function charCount(str) {
  //make object to return at end
  var result = {}
  //loop over string, for each caracter
  for (var i = 0; i < str.length; i++) {
    // make keys lowercase
    var char = str[i].toLowerCase()
    //if the char is a number/letter AND key in object, add one to count
    // (check to see if input is alphanumeric)
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++
      }
      //if the char is a number/letter AND is not in object, add it and set value to 1
      else {
        result[char] = 1;
      };
    }
  }
  //if the char is something else (space, period, etc) dont do anything
  //return object at end
  console.log(result)
  return result;
}


// use for of loop 

function charCount2(str) {
  var obj = {}
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      // combine if else to single line
      // obj[char] = obj[char] + 1 or if falsy set equal to one
      obj[char] = ++obj[char] || 1;
    }
  }
  console.log(obj)
  return obj;
}

// more effiecient than reguar expression
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) {
    return false
  }
  return true
}


charCount2("Hello hi!")