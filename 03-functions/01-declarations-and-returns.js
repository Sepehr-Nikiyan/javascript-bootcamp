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


