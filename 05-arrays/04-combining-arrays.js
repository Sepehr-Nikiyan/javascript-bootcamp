//=========================
//new lessons and exercises
//=========================

//concat()
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const resultNew = numbers1.concat(numbers2);

console.log(resultNew);
console.log(numbers1);
console.log(numbers2);

//even you can concatenate many arrays or values
const resultNew3 = numbers1.concat(numbers2, 7, 8);
console.log(resultNew3);
// [1, 2, 3, 4, 5, 6, 7, 8]



//spread in arrays
//simillar to concat()
const numbers11 = [1, 2, 3];
const numbers22 = [4, 5, 6];

const resultNew2 = [...numbers11, ...numbers22];

console.log(resultNew2);

//you can add new thing in the begining
const newNumbers = [0, ...numbers11];
console.log(newNumbers);
// [0, 1, 2, 3]



// exercise

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "PHP", "Python"];

const allSkills = frontend.concat(backend);
console.log(allSkills)

const allSkills2 = [...frontend,...backend];
console.log(allSkills2);


const updatedFrontend = [...frontend, "React"]
console.log(updatedFrontend);





