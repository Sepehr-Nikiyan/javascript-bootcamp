//Reference vs Copy
const numbers111 = [1, 2, 3];

const numbers222 = numbers111;

numbers222.push(4);

console.log(numbers111);
console.log(numbers222);

//spread operator for copy
const numbers1111 = [1, 2, 3];
const numbers2222 = [...numbers1111];
numbers2222.push(4);
console.log(numbers1111);
// [1, 2, 3]
console.log(numbers2222);
// [1, 2, 3, 4]


//Shallow copy
//note: ... just copy the first stage

//example:
const users222 = [
  { name: "Ali" },
  { name: "Sepehr" }
];

const newUsers222 = [...users222];

newUsers222[0].name = "Reza";

console.log(users222[0].name);
// Reza


//here we should use structuredClone()
const users11 = [
  { name: "Ali" },
  { name: "Sepehr" }
];

const newUsers11 = structuredClone(users);

newUsers11[0].name = "Reza";

console.log(users11[0].name);
console.log(newUsers11[0].name);