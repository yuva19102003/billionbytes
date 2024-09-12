 
 // Asynchronous JavaScript

 // Callbacks: Functions passed as arguments to handle asynchronous code.

 // Callback example
function fetchData(callback) {
    setTimeout(() => {
      callback("Data received");
    }, 1000);
  }

  // data is a function which is passed ass a arguement for callback
  fetchData((data) => {
    console.log(data);
  });


  // calling a function inside of a function
function add(a,b){
    return a+b;
}

function calculate(x,y,operations) {
return operations(x,y);
}

console.log(calculate(6,7,add));


