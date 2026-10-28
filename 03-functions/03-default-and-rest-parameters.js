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


