// Introducing symbol
const id_1 = Symbol();

console.log(id_1);
console.log(typeof id_1);

// Testing and understanding
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1);
console.log(id2);

console.log(id1 === id2);

//exercise
const id = Symbol("id");

const user = {
  name: "Sepehr",
  [id]: 12345,
};

console.log(user.name);
console.log(user[id]);


//another
const id11 = Symbol("id");
const id22 = Symbol("id");

const user = {
  [id11]: "First",
  [id22]: "Second",
};

console.log(user[id11]);
console.log(user[id22]);

//last test
const id111 = Symbol("id");
const id222 = Symbol("id");

console.log(id111 === id222);
console.log(id111 == id222);
console.log(String(id111));