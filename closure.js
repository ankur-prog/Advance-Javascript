function outer() {
    let counter =0;
    function inner() {
        counter++;
        console.log(counter);
    }
    
     return inner;

}
let counter1 = outer();
counter1(); // 1
counter1(); // 3
counter1(); // 2
/*
Closure is a function that has access to its outer function's variables even after the outer function has returned. it has three scope chains
1. it has access to its own scope
2. it has access to outer function's variables
3. it has access to global variables

in this program, we have two functions outer and inner and a variable counter in outer function and we are returning inner function from outer function.
when we call outer function, it will return inner function and we are storing it in counter1 variable. now counter1 variable is pointing to inner function.
when we call counter1 function, it will increment counter variable and print it.
when we call counter1 function again, it will increment counter variable and print it.
when we call counter1 function again, it will increment counter variable and print it.
so, we are able to access counter variable even after outer function is returned.
this is called closure.
*/
// Path: closure.js
// Compare this snippet from scope.js: 
