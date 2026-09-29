//Function Declaration
function sayHello() {
  console.log("Hello Sepehr");
};

sayHello();
sayHello();
sayHello();

//a function can get input
function greet(name){
    console.log(`Hello ${name}.`);
};

greet("Ali");
greet("Sepehr");
greet("Hassan");

//using more parameters
function sum(a , b){
    console.log(a + b);
};

sum(1057 , 83722);
sum(54 , 175);

//a , b       → Parameters
//10 , 20     → Arguments

//======
//return
//======
function sum1(a,b) {
    return a + b;
};
let sumFunction = sum1(67,96);
console.log(sumFunction);

//example
const result = sum1(10, 20);
const finalResult = result * 2;
console.log(finalResult);

//note function running ends when it arrives to return


//other examples
function square(a){
    return a**2;
};

function isEven(a){
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

function getFullName(firstName,lastName){
    return firstName + " " + lastName;
};

function calculatePrice(price,discount) {
    return price - (price*(discount/100));    
};

console.log(square(5)); // 25
console.log(isEven(10)); // true
console.log(getFullName("Sepehr", "Nikiyan")); // Sepehr Nikiyan
console.log(calculatePrice(1000, 20)); // 800


// Function Declaration
function sayHello1() {
  console.log("Hello");
}
// Function Expression
const sayHello2 = function () {
  console.log("Hello");
};

const sayHello3 = () => {
  console.log("Hello Sepehr");
};

sayHello3();

//arrow function with parameter
const greet2 = (name) => {
  console.log(`Hello ${name}`);
};

greet2("Sepehr");

//if we had just one parameter the paranthesis is optional
const greet3 = name => {
  console.log(`Hello ${name}`);
};

//with return
const square2 = (number) => {
  return number ** 2;
};

//we can use this in short form
const square3 = number => number ** 2;




//exercise
const multiply = function (a,b) {
    return a*b;
}
const multiply1 = (a,b) => a*b;
console.log(multiply(5, 4)) // 20
console.log(multiply1(5, 4)) // 20




const isPositive = function (a) {
    return a > 0;
}
const isPositive1 = a => a>0;
console.log(isPositive(10)) // true
console.log(isPositive1(-5)) // false



const rectangleArea = function (a,b) {
    return a*b;
}
const rectangleArea1 = (a,b) => a*b;
console.log(rectangleArea(10, 5)) // 50
console.log(rectangleArea1(10, 5)) // 50



// now we know 

// Declaration
// function sum(a, b) {
//   return a + b;
// }

// Function Expression
// const sum = function (a, b) {
//   return a + b;
// };

// Arrow Function
// const sum = (a, b) => a + b;


//==================
//Default Parameters
//==================

function greet4(name = "Guest") {
  return `Hello ${name}`;
}

console.log(greet4("Sepehr")); // Hello Sepehr
console.log(greet4());         // Hello Guest

//example
function createUser(name = "Unknown", age = 18) {
  return `${name} is ${age} years old`;
}

console.log(createUser("Sepehr", 25));
console.log(createUser("Ali"));
console.log(createUser());

//==================
//Rest Parameter ...
//==================
function gather(...numbers) {
  console.log(numbers);
}

gather(10, 20, 30, 40);



//exercise

const greetUser = (name) => console.log(`Hello ${name}`);
greetUser("Sepehr");
// Hello Sepehr

const greetUser2 = (name ="Guest") => console.log(`Hello ${name}`);
greetUser2();
// Hello Guest





const getAverage = (...numbers) =>{
    return numbers.reduce((total, currentValue) => total + currentValue,0)/ numbers.length
}
console.log(getAverage(10, 20, 30)); // 20
console.log(getAverage(10, 20, 30, 40, 50)); // 30





const createMessage = (name,...lessons)=>{
    console.log(`${name} is learning: ${lessons.join(", ")}`);
}
createMessage("Sepehr", "JavaScript", "React", "Node.js");


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





// other exercise
function createMultiplier(number) {
    return function(value){
        return value * number;
    };
}
const double = createMultiplier(2);

console.log(double(5));  // 10
console.log(double(10)); // 20

const triple = createMultiplier(3);
console.log(triple(5)); // 15



//other exercise
const numbers = [2, 4, 6, 8];
const double2 = numbers.map(
    number => number * 2
);
console.log(double2);


//Scope
function test() {
  const message = "Hello";

  console.log(message); // ✅
}

test();

// console.log(message); // ❌

// Block Scope
if (true) {
  const name = "Sepehr";
  let age = 25;
}

// console.log(name); // ❌
// console.log(age);  // ❌




//Lexical Scope
const name = "Sepehr";

function greet6() {
  console.log(name);
}

greet6();



//Closure
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const myCounter = counter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3



//EXERCISE
const discount20 = createDiscountCalculator(20);

console.log(discount20(1000)); // 800
console.log(discount20(500));  // 400

function createDiscountCalculator(discountPercent) {
    return function (price){
        return price - (price * (discountPercent/100))
    }
}