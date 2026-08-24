// string
console.log(typeof "Sepehr");
// number
console.log(typeof 12);
// boolean
console.log(typeof true);
// undefined
console.log(typeof undefined);
// null
console.log(typeof null);

// Operations between strings and numbers
console.log("5" * 2);
console.log("20" / 4);
console.log("10" + 10);
console.log("10" - 10);
console.log("Sepehr" - 5);


// Converting values to Number
console.log(Number("10"));
console.log(Number("Sepehr"));
console.log(Number(""));
console.log(Number(" "));
console.log(Number("10.5"));


// Type conversion exercises
console.log(String(123));
console.log(String(true));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Hello"));


console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(-1));


// Arithmetic operators
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);


//exercises
console.log(10 / 0);
console.log(-10 / 0);
console.log(0 / 0);
console.log(typeof NaN);
console.log(typeof Infinity);

console.log(Number("100"));
console.log(Number("100px"));
console.log(parseInt("100px"));
console.log(parseFloat("10.5px"));
console.log(parseInt("10.5"));


//parseInt & parseFloat exercise
console.log(parseInt("25.99"));
console.log(parseFloat("25.99"));
console.log(parseInt("100.50px"));
console.log(parseFloat("100.50px"));
console.log(parseInt("3.14abc"));
console.log(parseFloat("3.14abc"));

//Comparison Operators and Automatic Type Conversion
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

//exercises
console.log(10 == "10");
console.log(10 === "10");
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.log(null == undefined);
console.log(null === undefined);

//Logical Operators
console.log(true && true);
console.log(true && false);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);


// || returns the first Truthy value; if none exists, it returns the last value.
// && returns the first Falsy value; if none exists, it returns the last value.
console.log("Sepehr" && "Developer");
console.log("" && "Developer");

console.log("Sepehr" || "Developer");
console.log("" || "Developer");

console.log(null || "Default");

console.log("Sepehr" && 25);


// exercise
console.log(0 || 100);
console.log(50 || 100);

console.log(0 && 100);
console.log(50 && 100);

console.log(null || "Guest");
console.log("Sepehr" || "Guest");

console.log("Hello" && 0 && "World");
console.log("Hello" && 25 && "World");

console.log("" || 0 || null || "Sepehr");
console.log("" || 0 || null);

console.log(!"Sepehr");
console.log(!"");
console.log(!0);
console.log(!1);
console.log(!null);
console.log(!undefined);
console.log(!!"Sepehr");
console.log(!!0);

//more exercise
let a;

const b = null;

console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);

console.log(a == b);
console.log(a === b);

//another exercise
let x;

console.log(Boolean(x));
console.log(Number(x));
console.log(String(x));

console.log(Boolean(null));
console.log(Number(null));
console.log(String(null));