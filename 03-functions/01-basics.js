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