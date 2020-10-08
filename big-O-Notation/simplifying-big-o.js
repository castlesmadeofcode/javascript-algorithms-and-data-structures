
// Section 2:9 - Simplifying Big O Expressions

// Constants Don't Matter

//O(2n) simplifies to O(n) - linear
//O(500) simplifies to O(1) - constant
//O(13n²) simplifies to O(n²) - quadratic


//Smaller Terms Don't Matter

// O(n+10) simplifies to O(n)
// O(1000n +50) simplifies to O(n)
// O(n² + 5n + 8) simplifies to O(n²)

//Big O Shorthands

// 1.Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by index) or object (by key) is constant
// 4. In a loop the complexity is the length of the loop times the complexity 
// of whatever happens inside the loop.



// O(n) - linear
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log('at least', i)
    }
}

logAtLeast5(10)


// O(1) - constant
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log('at most', i)
    }
}

logAtMost5(10)
