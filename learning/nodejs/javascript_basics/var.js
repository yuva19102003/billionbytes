// var  let  const


// var can be redeclared and reassigned

var a = 10 
console.log(a)

var a = 12 // redeclared 
console.log(a)

a = 13  // reassigned
console.log(a)

// let can be reassigned but can't be redeclared

let b = 1
console.log(b)

b = 2 // reassigned
console.log(b)


// const cant be redeclared and reassigned

const pi = 3.14
console.log(pi)



let name = "yuva"  // string
let yes = true   // boolean
let num = [100,200,300]  // array
let obj = {name: "yuva", age: 21}   //object

console.log(
    name, yes, num,
    num[0],num[1],num[2],
    obj,
    obj.name, obj.age
)