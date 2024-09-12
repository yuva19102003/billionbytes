
 //   Use for, while, if, else, and switch to control logic flow.

 // if

 let year = 2004

 if (year%4 == 0){
    console.log("it is leap year");
 }

// if else

let years = 2003

 if (years%4 == 0){
    console.log("it is leap year");
 }
 else {
    console.log("it isn't leap year");
 }


// switch

let x = 0;
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
} 

console.log(text);


// for

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let texts = "";
for (let i = 0; i < cars.length; i++) {
  texts += cars[i] + " |"; // concatinating the values and reassigned to text variables
}

console.log(texts)


// while

let textss = "";
let i = 0;
while (i < 10) {
  textss += "<br>The number is " + i; // the loop will stop when the given condition is satisfied
  i++;
}
console.log(textss)
