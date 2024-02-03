/*
 * In java scrpit functions are first class methods.
 * Just like an object, a function can be passed as an argument to another function.
 * A function can return another function.
 * A function can be assigned to a variable.
 * A function can be stored in an array, object, or any other data structure.
 * Any function that is passed as an argument is called a callback function.
 */

// Example 1
// A simple example of a callback function is the setTimeout function. The setTimeout function takes a callback function and a time in milliseconds as arguments. The
// callback function is called after the specified time has passed. For example, the following code will log "Hello, world!" to the console after 1 second:
setTimeout(() => {
  console.log('Hello, world!');
}, 1000);

// Example 2

function greet() {
  console.log('Hello!');
}

function greetUser(callback) {
  callback();
}

greetUser(greet);

// more advanced example
// Example 3
// The following code simulates fetching data from a server after 1 second:
function fetchData(callback) {
  setTimeout(() => {
    callback('Data from server');
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});


/**
 * A function which takes another function as an argument is called a higher-order function.
 * A function which is passed as an argument is called a callback function.
 */

// q why we need callback function? 
// A callback function is a function that is passed as an argument to another function. Callback functions are used to perform an action after a certain task is
// completed. This makes it easier to work with asynchronous code, as it allows you to perform a task once the asynchronous operation has been completed.
// For example, you can use a callback function to log a message to the console after a function has finished executing, or to update the UI after data has been
// fetched from a server.

// problem with callback function
// 1. Callback hell (nested callbacks)
// 2. Inversion of control (hard to understand the flow of the code)
// 3. Difficulty in error handling (hard to handle errors in asynchronous code)
// 4. Difficulty in debugging (hard to debug asynchronous code)
// 5. Difficulty in writing and maintaining code (hard to write and maintain asynchronous code)

// to tackle these problems, we have promises and async/await in javascript.