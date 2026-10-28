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


