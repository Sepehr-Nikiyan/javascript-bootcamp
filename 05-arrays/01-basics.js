//It's an array
const fruits = ["apple", "banana", "orange", "mango"];

console.log(fruits[0]); // apple
console.log(fruits[2]); // orange

console.log(fruits.length); // 4

console.log(fruits[fruits.length - 1]); // mango


//methods
fruits.push("kiwi");

fruits.pop();

fruits.unshift("watermelon");

fruits.shift();


// push    → add to end
// pop     → delete from end

// unshift → add to begin
// shift   → delete from begin

//exercise
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);




const cities = ["Sari", "Tehran", "Tabriz"];

cities.pop();
cities.shift();
//these two return the deleted item

cities.push("Mashahd");
cities.unshift("Rasht");
console.log(cities);






//slice() vs splice()
const numbersList = [10, 20, 30, 40, 50];
const result = numbersList.slice(1, 4);
console.log(result);
console.log(numbersList);





const myNumbers = [10, 20, 30, 40, 50];
myNumbers.splice(1, 2); //delete tha main array from index start to index end even end itself.
console.log(myNumbers);



//we can also use splice() for adding
const num_ber = [10, 20, 40, 50];
num_ber.splice(2, 0, 30);
console.log(num_ber);

//exercise 
const nums = [10, 20, 30, 40, 50, 60];
const newNums = nums.slice(1, 5);
console.log(newNums);


const nums2 = [10, 20, 30, 40, 50];
const removed = nums2.splice(1, 2);
console.log(nums2);
//can returns the deleted items
console.log(removed);






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





//join()
const skills = ["HTML", "CSS", "JavaScript"];
const result4 = skills.join(" - ");
console.log(result4);
//if you do not set the separator it will be ","




//reverse()
const numbersNew6 = [1, 2, 3, 4];
numbersNew6.reverse();
console.log(numbersNew6);

//if you don't want to change the main
const numbersNew8 = [1, 2, 3, 4];
const reversed = [...numbersNew8].reverse();
console.log(reversed);
console.log(numbersNew8);





//sort()
const numbersNew7 = [10, 2, 30, 5];
numbersNew7.sort((a, b) => a - b);
console.log(numbersNew7);
//const sorted = [...numbers].sort((a, b) => a - b);
//this is for when you don't want to change the main


//array boolean
console.log(Array.isArray([1, 2, 3]));
// true
console.log(Array.isArray("Hello"));
// false
console.log(Array.isArray({}));
// false


//exercise
const skillsNew = ["JavaScript", "React", "CSS", "HTML"];
console.log(skillsNew.join(" | "));


const reversedSkills = [...skillsNew].reverse();
console.log(skillsNew);
console.log(reversedSkills);

const myRandNums = [1,2,4,6,7,3,2,0.5,8.8303,111103289];
const sortedNums = [...myRandNums].sort((a,b) => a - b );
console.log(myRandNums);
console.log(sortedNums);


console.log(Array.isArray(skills));


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