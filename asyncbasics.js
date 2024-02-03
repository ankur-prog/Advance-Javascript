/*
JavaScript is a single-threaded language, which means that it can only execute one thing at a time. This can be a problem when you need to perform multiple
asynchronous operations at the same time, such as reading multiple files or making multiple HTTP requests. Async solves this problem by allowing you to write
asynchronous code in a more synchronous way, making it easier to work with asynchronous operations in JavaScript.
*/

/**
 * setTimeout is a function that takes a callback function and a time in milliseconds as arguments. The callback function is called after the specified time has
 * passed. This is useful for delaying the execution of a function or for running a function at a regular interval. For example, the following code will log "Hello,
 * world!" to the console after 1 second: 
 */
setTimeout(() => {
  console.log('Hello, world!');
}, 1000);

// more practical example of setTimeout is to simulate a delay in a function that fetches data from a server. For example, the following code simulates fetching data
// from a server after 1 second:
function fetchData(callback) {
  setTimeout(() => {
    callback('Data from server');
  }, 1000);
}
// durattion of 1 second is minimum time to fetch data from server . it can be more than 1 second also depending on server response time.  so if we give duration as 0
// , it doesnt mean that it will fetch data immediately. it will take some time to fetch data from server.



fetchData((data) => {
  console.log(data);
});

/**
 * The setInterval function is similar to the setTimeout function, but instead of running the callback function once after a specified time, it runs the callback
 * function at regular intervals. For example, the following code will log "Hello, world!" to the console every second:
 */
setInterval(() => {
  console.log('Hello, world!');
}
, 1000);

// The clearInterval function can be used to stop the interval from running. For example, the following code will log "Hello, world!" to the console every second
// for 5 seconds, and then stop:
let count = 0;
const intervalId = setInterval(() => {
  console.log('Hello, world!');
  count++;
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);

// Path: asyncbasics.js





