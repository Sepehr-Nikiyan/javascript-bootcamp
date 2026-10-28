//a custom promise
const myPromise = new Promise((resolve,reject) => {resolve("Task completed")});
myPromise.then((response) => console.log(response));


//failed promise practice
const failedPromise = new Promise((resolve,reject) => {reject("Something went wrong")});
failedPromise.catch((response) => console.log(response));


//a new practice for promise chaining
const checkPromise = new Promise((resolve,reject) => {reject("Invalid")});
checkPromise.then((res)=>console.log(res)).catch((rejection)=>console.log(rejection));

//another
const checkPromise2 = new Promise((resolve,reject)=>{resolve("Done")});
checkPromise2.then((res)=>console.log(res)).catch((rejection)=>console.log(rejection));