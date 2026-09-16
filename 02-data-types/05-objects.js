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
console.log(user.name1);
console.log(user.age1);
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


//================
//Object Shorthand
//================
//when the property and the var name are the same, we can write like this:

//original
const example = "xxxxx"
const example2 = "123456789"
/*
const exampObj = {
  example: example,
  example2: example2
};
*/

//shorthand
const exampObj = {
  example,
  example2
};


//================
//Computed Property
//================
const key = "name";
const value = "Sepehr"

const objPrac = {
  [key]:value,
};



//================
//This in Objects
//================

const user3 = {
  name: "Sepehr",

  sayHello() {
    console.log("Hello " + this.name);
  },
};

user3.sayHello();

//exercise
const product2 ={
  name:"LapTop",
  price:"1000",
  getInfo() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price}`);
  },
};

product2.getInfo();

product2.price = "2000";

product2.getInfo();


//==============
//Object + Array
//==============
const products = [
  {
    name: "Laptop",
    price: 1000,
  },
  {
    name: "Phone",
    price: 500,
  },
  {
    name: "Tablet",
    price: 700,
  },
];
console.log(products[0].name);
console.log(products[0]["name"]);
console.log(products[1].price);

//map functin
const productNames = products.map(product => product.name);
console.log(productNames);

//filter function
const expensiveProducts = products.filter(product => product.price > 600);

console.log(expensiveProducts);

//exercise
const products2 = [
  {
    name: "Laptop",
    price: 1000,
    inStock: true,
  },
  {
    name: "Phone",
    price: 500,
    inStock: false,
  },
  {
    name: "Tablet",
    price: 700,
    inStock: true,
  },
];

const productsOver600 = products2.filter(product => product.price >= 600);
console.log(productsOver600);
const productsInstock = products2.filter(product => product.inStock === true)
console.log(productsInstock);
const productNamesInstock = products2.filter(product => product.inStock === true).map(product => product.name);
console.log(productNamesInstock);

//find()
const oneProductWithCondition = products2.find(product => product.price > 600);

console.log(oneProductWithCondition);

//some() this is a boolean function
//checks that is there at least one item with the condition in our list or not
console.log(products2.some(product => product.price > 900));

//every() checks all the items that follow our conditions
console.log(products2.every(product => product.price > 400));

//Reduce()
const totalPrice = products2.reduce( (total, product) => total + product.price , 0 );

console.log(totalPrice);

//another example of reduce
const inStockCount = products2.reduce(
  (count, product) => count + (product.inStock ? 1 : 0),
  0
);

console.log(inStockCount);

//sort()
const sortedProducts = [...products2].sort(
  (a, b) => b.price - a.price
);

console.log(sortedProducts);

//last exercies
const justInstockAndOver600 = products2.filter(product => product.price > 600).filter(product => product.inStock);
//you can also write (product => product.price > 600 && product.inStock)
console.log(justInstockAndOver600);

const theMostExpensive = [...products2].sort((a,b) => b.price - a.price)[0];
console.log(theMostExpensive);

const wholePrice = products2.reduce((total,current) => total + current.price ,0)
console.log(wholePrice);