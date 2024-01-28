

// this program will show you how to access variables in different scopes
// there are two types of scopes
// 1. global scope 2. local scope


let a = 10;

function outer() {
    let b = 20;
// tip: inner function can access outer function's variables
    function inner() {
        let c = 30;
        console.log(a , b ,c);
    }

    inner();
}
outer(); // 10 20 30
/* a is global variable and b is outer function's variable and c is inner function's variable.
 inner function can access outer function's variables
 but outer function can't access inner function's variables
 so, a and b are accessible in inner function
 but c is not accessible in outer function
 this is called lexical scoping
 lexical scoping means inner function can access outer function's variables
 but outer function can't access inner function's variables
*/
