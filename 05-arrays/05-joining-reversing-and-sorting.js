//join()
const skills = ["HTML", "CSS", "JavaScript"];
const result4 = skills.join(" - ");
console.log(result4);
//if you do not set the separator it will be ","




//reverse()
const numbersNew6 = [1, 2, 3, 4];
numbersNew6.reverse();
console.log(numbersNew6);

//if you don't want to change the main
const numbersNew8 = [1, 2, 3, 4];
const reversed = [...numbersNew8].reverse();
console.log(reversed);
console.log(numbersNew8);





//sort()
const numbersNew7 = [10, 2, 30, 5];
numbersNew7.sort((a, b) => a - b);
console.log(numbersNew7);
//const sorted = [...numbers].sort((a, b) => a - b);
//this is for when you don't want to change the main


//array boolean
console.log(Array.isArray([1, 2, 3]));
// true
console.log(Array.isArray("Hello"));
// false
console.log(Array.isArray({}));
// false


//exercise
const skillsNew = ["JavaScript", "React", "CSS", "HTML"];
console.log(skillsNew.join(" | "));


const reversedSkills = [...skillsNew].reverse();
console.log(skillsNew);
console.log(reversedSkills);

const myRandNums = [1,2,4,6,7,3,2,0.5,8.8303,111103289];
const sortedNums = [...myRandNums].sort((a,b) => a - b );
console.log(myRandNums);
console.log(sortedNums);


console.log(Array.isArray(skills));


