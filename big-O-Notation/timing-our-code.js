
// Section 2:5 - Timing Our Code

//write a function that calculates sum of all numbers from 1 up to and including n

// example 1 (slower - 0.013 seconds)

// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total
// }

// example 2 (faster - 0.000045 seconds)

let addUpTo = (n) => {
    return n * (n + 1) / 2;
}


//performance.now tells us miliseconds since document was created
//call function and subtract initial time from second time
//divide by 1000 to convert miliseconds to seconds
var t1 = performance.now()
addUpTo(10000000)
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)


// console.log(addUpTo(6))



//The Problem With Time:
//different machines will record different times
//the same machine will record different times
//for fast algorithms, speed measurements may not be precise enough
