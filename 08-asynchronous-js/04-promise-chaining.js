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