//seraching methods
const fruits2 = ["apple", "banana", "orange"];
console.log(fruits2.includes("banana")); // true
console.log(fruits2.includes("mango"));  // false



console.log(fruits2.indexOf("orange")); // 2
console.log(fruits2.indexOf("mango"));  // -1


//it is suitable for array of objs
const users = [
    { id: 1, name: "Sepehr" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Reza" }
];
const index = users.findIndex(user => user.id === 2);
console.log(index); // 1



//exercise
const usersNew = ["Ali", "Sepehr", "Reza", "Sara"];

console.log(usersNew.includes("Sepehr"));
console.log(usersNew.indexOf("Reza"));
console.log(usersNew.findIndex(user => user.length > 4));






