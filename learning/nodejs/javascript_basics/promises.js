



 // Promises: An alternative for handling async operations.
 
// promises  [https://youtube.com/shorts/Yg1Wf_rFG7Q?si=Zw304Ovz7HgUJwcO]


const API = new Promise((resolve, reject) =>{
    //resolve("it is fullfilled")
    reject("it isn't fullfilled")

});

API.then(result => {
    console.log(result);  // resolve
});

API.catch(error => {
    console.log(error);  // reject 
}
);