//proving function scoping of var
var a = 10;

if (true) {
  var a = 20;
}

console.log(a);

//proving block scoping of let
let b = 10;

if (true) {
  let b = 20;
}

console.log(b);

//proving 
const c = 10;

if (true) {
  const c = 20;
}

console.log(c);