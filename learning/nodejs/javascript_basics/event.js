console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 1000);

console.log("End");
// Output: Start -> End -> Inside timeout

// JavaScript (and Node.js) runs on an event loop, handling asynchronous operations without blocking.