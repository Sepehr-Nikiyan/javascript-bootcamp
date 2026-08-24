//introducing bigInt
const bigNumber = 9007199254740991n;

console.log(bigNumber);
console.log(typeof bigNumber);

//testing and understanding the difference between normal int and bigInt
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

console.log(9007199254740991n + 1n);
console.log(9007199254740991n + 2n);


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);

console.log(9007199254740991n + 1n);
console.log(9007199254740991n + 2n);

//more exercises
console.log(10n + 20n);
console.log(10n * 5n);
console.log(100n / 3n);
console.log(10n % 3n);
console.log(2n ** 10n);


//last exercises
console.log(10n + 5);
console.log(10n == 10);
console.log(10n === 10);
console.log(BigInt(100));
console.log(BigInt("12345"));