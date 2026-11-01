//practice promise chainings
const numberPromise = new Promise((resolve,reject) => {resolve(5)});
numberPromise.then((res) => {
    return res + 2})
.then((res) => console.log(res));

//new practice
const pricePromise = new Promise((resolve,reject) => {resolve(100)});
pricePromise
.then((res) => res * 2)
.then((res) => res + 50)
.then((res) => console.log(res));

//3rd practice
const scorePromise = new Promise((resolve,reject) => {resolve(10)});
scorePromise.then((res) => {return res*2 }).then((res) => console.log(res));

//promise chain when an error occur
const errHandling = new Promise((resolve,reject)=>{resolve(10)});
errHandling
.then((res)=>res*2)
.then((res)=>{throw new Error("Something went wrong")})
.catch((rejection)=>console.log(rejection.message));


//more error handling in chain
const newErrorHandler = new Promise((resolve,reject) => {resolve(5)});
newErrorHandler
.then((res)=>res*3)
.then((res) => {throw new Error("Invalid result")})
.catch((error)=>console.log(error.message))
.then(() => console.log("Chain Finished."));

//other practice
const newErrorHandler2 = new Promise((resolve,reject)=>{resolve(5)});
newErrorHandler2
.then((res)=>{ return 10 })
.then((res)=>{ throw new Error("Invalid result") })
.catch((error)=>{
    console.log(error.message);
    throw new Error("Invalid result")
})
.then((res)=>console.log("Chain Finished"))
.catch((error)=>console.log(error.message))

//Summary
const lastPromise = new Promise((resolve,reject) => {resolve(10)});
lastPromise
.then((res)=>res*2)
.then((res)=>res+5)
.then((res)=>console.log(res))
.catch((error)=>console.log(error.message));