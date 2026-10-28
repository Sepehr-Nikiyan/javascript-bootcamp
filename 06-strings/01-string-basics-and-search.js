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



