//String & length
const username = "Sepehr";
console.log(username.length);
// 6


//indexing
const username1 = "Sepehr";

console.log(username1[0]); // S
console.log(username1[2]); // p
console.log(username1[username1.length - 1]); // r


//strings are immutable
username[0] = "X";
console.log(username);
// Sepehr


//Upper and Lower cases
const text = "Hello Sepehr";
console.log(text.toUpperCase());
// HELLO SEPEHR
console.log(text.toLowerCase());
// hello sepehr



//trim()
const text1 = "   Hello Sepehr   ";

console.log(text1.trim());
// "Hello Sepehr"


//note it is practical in forms:
const formUsername = "   Sepehr   ";
const cleanUsername = formUsername.trim();
console.log(cleanUsername);
//note: it doesn't delete the spaces between letters



//includes()
const email = "sepehr@gmail.com";
console.log(email.includes("@"));
// true
console.log(email.includes("yahoo"));
// false

//note: it is case sensetive



//startsWith() & endsWith()
const url = "https://example.com";
console.log(url.startsWith("https"));
// true
console.log(url.endsWith(".com"));
// true


//indexOf()
const text3 = "Hello JavaScript";
console.log(text3.indexOf("JavaScript"));
// 6
console.log(text3.indexOf("Python"));
// -1 it means it doesn't exist



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