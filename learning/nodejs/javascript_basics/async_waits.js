

// async/await: Modern syntax for working with asynchronous code.

const url = "https://restcountries.com/v3.1/all"

async function fetchData() {

    

    const response = await fetch(url); // it will fetch data from url , it will take time but after this executed only next one excute.
    const countries = await response.json();
    console.log(countries[0].name.common);

    

}
console.log(1);
fetchData(); // it will take time
console.log(2);