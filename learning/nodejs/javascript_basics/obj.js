
// objects (for handling configurations, request/response data) and arrays (for managing lists of items)

// Object
let person = {
    name: "John",
    age: 30,
    greet: function() {
      return `Hello, my name is ${this.name}`;
    }
  };
  
  // Access object properties
  console.log(person.name);
  console.log(person.greet());
  
  // Array
  let fruits = ["apple", "banana", "mango"];
  
  // Access array elements
  console.log(fruits[0]);
  