/**
 * Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations
 *  where callbacks can create callback hell leading to unmanageable code.
 * 
 */
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
// A promise is in one of these states:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.
//
// A promise is created using the Promise constructor. A promise can be created using the new keyword and the Promise constructor. The Promise constructor takes a
// single argument, a callback function, which takes two arguments, resolve and reject. The resolve and reject functions are used to resolve or reject the promise.
// For example, the following code creates a new promise that resolves after 1 second:
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data from server');
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

// Example 2
// The following code creates a new promise that rejects after 1 second:
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('An error occurred'));
  }, 1000);
});

promise1.catch((error) => {
  console.error(error);
});

// Example 3
// The following code creates a new promise that resolves after 1 second, and then rejects after 2 seconds:
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data from server');
  }, 1000);
  setTimeout(() => {
    reject(new Error('An error occurred'));
  }, 2000);
});

promise2.then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
});

// complex example of promise
// Example 4
// The following code simulates fetching data from a server after 1 second:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from server');
    }, 1000);
  setTimeout(() => {
    reject(new Error('An error occurred'));
  }, 2000);
    });
}


fetchData().then((data) => {
  console.log(data);
}
).catch((error) => {
  console.error(error);
});




