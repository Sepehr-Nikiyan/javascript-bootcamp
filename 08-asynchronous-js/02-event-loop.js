console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
//output : A,C,B


// an other example
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

setTimeout(() => {
    console.log("3");
}, 0);

console.log("4");

// Synchronous code runs first, from top to bottom.
// setTimeout(..., 0) schedules its callback to run after
// the current synchronous code has finished.
// Multiple callbacks run in the order they become ready.


//other practice
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then( () => console.log("C") );

console.log("D");

//other short practice
Promise.resolve("JavaScript").then((res)=>console.log(res));