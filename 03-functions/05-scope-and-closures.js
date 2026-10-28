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