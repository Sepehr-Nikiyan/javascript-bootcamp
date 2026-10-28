//=================
//Callback Function
//=================

function greet5(name) {
  console.log(`Hello ${name}`);
}

function processUser(callback) {
  callback("Sepehr");
}

processUser(greet5);


//callback arrow function
function processUser(callback) {
  callback("Sepehr");
}

processUser(name => {
  console.log(`Hello ${name}`);
});

//or shorter
processUser(name => console.log(`Hello ${name}`));


//exercise
const processNumber = (a,callBack) => {
    const result = callBack(a);
    console.log(result);
}
processNumber(5, number => number * 2);
// 10

processNumber(10, number => number ** 2);
// 100



function calculate(a,b,callBack) {
    const result = callBack(a,b);
    console.log(result);
}
calculate(10, 5, (a, b) => a + b);
// 15

calculate(10, 5, (a, b) => a - b);
// 5

calculate(10, 5, (a, b) => a * b);
// 50

//EXERCISE
function runOperation(a,b,callBack) {
    return callBack(a,b);
}
runOperation(10, 5, (a, b) => a + b);
// 15





