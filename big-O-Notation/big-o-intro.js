
// Section 2:8 - Official Intro to Big O

// Intro:
// 1. Big O Notation is a way to formalize fuzzy counting
// 2. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
// 3. We don't care about details, only the trends

// Big O Definition:

// We say that an algorithm is O(f(n)) if the number of simple operations the computer
// has to do is eventually less than a constant times f(n), as n increases

// 1. f(n) could be linear (f(n) = n) - as n scales the runtime scales as well

// linear
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}

// 2. f(n) could be quadratic (f(n) = n²    ) - as n grows the runtime scales related to the square of n

// quadratic
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

// 3. f(n) could be constant (f(n) = 1) - as n grows it doesnt have an impact because runtime is always constant 

// constant
let addUpTo = (n) => {
    return n * (n + 1) / 2;
}






