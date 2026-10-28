//split()
const skills = "HTML,CSS,JavaScript";

const result = skills.split(",");

console.log(result);
// ["HTML", "CSS", "JavaScript"]


//an important note
const text8 = "Hello World";
console.log(text8.split(" ")); //<------ notice
// ["Hello", "World"]



//another important note
console.log(text8.split(""));//<------ notice
// ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]




//concat()
const firstName = "Sepehr";
const lastName = "Nikiyan";

const fullName = firstName.concat(" ", lastName);

console.log(fullName);
// Sepehr Nikiyan



