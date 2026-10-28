//repeat()
const text222 = "Hi ";
console.log(text222.repeat(3));
// Hi Hi Hi

//example:
console.log("-".repeat(20));
// --------------------





//padStart() & padEnd()
const number = "7";
console.log(number.padStart(5, "0"));
// 007

const text333 = "Hi";
console.log(text333.padEnd(5, "."));
// Hi...




//trimStart() & trimEnd()
const text = "   Hello   ";

console.log(text.trimStart());
// "Hello   "

console.log(text.trimEnd());
// "   Hello"




//localeCompare()
const names = ["Reza", "Ali", "Sepehr"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);
// ["Ali", "Reza", "Sepehr"]




