function sum(a,b,c) {
    return a+b+c;
}
console.log(sum(1,2,3)); // 6

// we can use currying to convert this function to a function that takes one argument at a time.
// so, we can call it like this sum(1)(2)(3)

function sum(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}
console.log(sum(1)(2)(3)); // 6

// we can use arrow functions to make it more concise
const sum = a => b => c => a+b+c;
console.log(sum(1)(2)(3)); // 6


// Path: currying.js
// Compare this snippet from closure.js: 


