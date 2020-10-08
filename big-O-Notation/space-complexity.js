
// Section 2:10 - Space Complexity

// Space Complexity: how much additional memory do we need to allocate in order
// to run the code in our algorithm / the amount of memory taken up


// Auxilary Space Complexity: space required by the algorithm, not including space
// taken up by the inputs

// Space Complexity in JS - Rules of Thumb

// 1. Most primitives (booleans, numbers, undefined, null) are constant space
// 2. Strings require O(n) space (where n is the string length)
// 3. Reference types are generally O(n), where n is the length (for arrays) or
// the number of keys (for objects)

// constant space O(1)
let sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

// linear space O(n)
let double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}


