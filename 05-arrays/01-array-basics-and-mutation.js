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






