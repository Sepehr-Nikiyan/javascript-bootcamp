// Creating an Object
const user = {
  name1: "Sepehr",
  age1: 25,
  isDeveloper: true,
};

console.log(user);
console.log(typeof user);

//=================================
//Access to properties of an Object
//=================================

//Dot Notation
console.log(user.name);
console.log(user.age);
console.log(user.isDeveloper);

//Bracket notation
console.log(user["name"]);
console.log(user["age"]);
console.log(user["isDeveloper"]);


//You can add new property to the obj
user.city = "Sari";
console.log(user.city);
//or
user["job"] = "Front-End Developer";
console.log(user["job"]);

//you can also delete a property you want
delete user.age;
//or
delete user["age"];

console.log(user.age);
console.log(user["age"]);

//=================================
//An obj can include other Objects
//=================================
user.address = {
  country: "iran",
  province: "mazandaran",
  city: "sari",
};

console.log(user);

//=================================
//An obj can include Arrays
//=================================
user.skills = ["HTML","CSS","JavaScript"];
console.log(user);
console.log(user.skills[0]);


//=================================
//An obj can also include Functions
//=================================
//note: we call these functions methods


user.sayHello = function sayHello(){
  console.log("Hello");
};

console.log(user);
user.sayHello();


//exercise
const product = {
  name:"GodFather",
  price:"25$",
  inStock:"10",
  category: {
    name:"book",
    id:"1"
  }
};
console.log(product);

console.log(product.name);
console.log(product["price"]);

const price = product["price"];
console.log(price);

product.discount = "10%";

product.inStock = "8";

console.log(product.category.name);
console.log(product["category"]["name"]);

product.tags = ["classic", "novel", "fiction"];

console.log(product.tags[0]);
console.log(product["tags"][0]);

delete product.discount;

console.log(product);




//==============
//Object Methods
//==============

//Obect.key() shows just keys
console.log(Object.keys(user));
//Object.value() shows just values
console.log(Object.values(user));
//Object.entries shows keys and values at the same time
console.log(Object.entries(user));

//note: the outputs of these functions are arrays

//=============
//Destructuring
//=============

const { name1, age1 } = user;

console.log(name1);
console.log(age1);
//this mean go and get the name and age key from user obj and assign them to variables with the same name
//ofcourse you can change the name of the vars when you are selecting them:
const { name:userName , age:userAge } = user;
console.log(userName);
console.log(userAge);


//===============
//Spread Operator ---> ...
//===============
const newUser = {
  ...user,
  age:"25"
};

console.log(user);
console.log(newUser);

//it change the obj without changing the original obj

//exercise
const student = {
  name: "Sepehr",
  age: 25,
  major: "Biochemistry",
  city: "Sari",
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

const { name , major } = student;
const { name:studentName , city:studentCity } = student;
console.log(studentName);
console.log(studentCity);

const updatedStudent = {
  ...student,
  city: "Tehran"
};
console.log(updatedStudent);


//======================
//Optional Chaining — ?.
//======================
const user2 = {
  name: "Sepehr",
  profile: {
    username: "sepehr25",
  }
};

// console.log(user2.address.city);
// it returns error

//we can use ?. to avoid returning err and also check the presence of that key
console.log(user2.address?.city)

// || returns the right-hand value if the left-hand value is Falsy
// ?? returns the right-hand value only if the left-hand value is null or undefined
console.log(user2.address?.city ?? "unknown")

//exercise
console.log(user2.profile?.username ?? "undefined");
console.log(user2.profile?.email ?? "undefined");


console.log(0 || 100); // output: 100
console.log(0 ?? 100); // 0

console.log(null || "Guest"); // Guest
console.log(null ?? "Guest"); // Guest