

// Regular function

function reg_fun(a) {
    return `hello, ${a}` ;
}

// arrow function

let arrow = (a) => {
    return `hello, ${a}` ;
}


console.log(reg_fun("yuva"));

console.log(arrow("yuvaraj"));



// this can't be used in arrow function for binding
 
const obj = {

    obj1: "hello",

    write: function() {
        console.log(this.obj1);
    },

    writes: () => {
        console.log(this.obj1);
    }

};


// regular function
obj.write();

// Arrow function
obj.writes();

