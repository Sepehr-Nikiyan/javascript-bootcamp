//slice()
const text4 = "JavaScript";
console.log(text4.slice(0, 4));
// Java
console.log(text4.slice(4));
// Script



//you can use it from end
console.log(text4.slice(-6));
// Script



//substring()
//it's exactly simillar to slice()
const text5 = "JavaScript";

console.log(text5.substring(0, 4));
// Java

//but:
// it doesn't behave simillar to slice() with negative indexes
text5.slice(-6);      // Script
text5.substring(-6);  // JavaScript


//replace() & replaceAll()
const text6 = "I love JavaScript";
console.log(text6.replace("JavaScript", "React"));
// I love React


//replace normally change the first case
const text7 = "JS JS JS";

console.log(text7.replace("JS", "JavaScript"));
// JavaScript JS JS

//but:
console.log(text7.replaceAll("JS", "JavaScript"));
// JavaScript JavaScript JavaScript

