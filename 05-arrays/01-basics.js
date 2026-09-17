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
myNumbers.splice(1, 2); //delete tha main array from index start to index end event end itself.
console.log(myNumbers);


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
const usersNew = [
    { id: 1, name: "Sepehr" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Reza" }
];

console.log(usersNew.includes("Ali"));
console.log(usersNew.indexOf("Reza"));
console.log(usersNew.findIndex(user => user.id ===1 ));