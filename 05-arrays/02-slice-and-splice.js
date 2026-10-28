//slice() vs splice()
const numbersList = [10, 20, 30, 40, 50];
const result = numbersList.slice(1, 4);
console.log(result);
console.log(numbersList);





const myNumbers = [10, 20, 30, 40, 50];
myNumbers.splice(1, 2); //delete tha main array from index start to index end even end itself.
console.log(myNumbers);



//we can also use splice() for adding
const num_ber = [10, 20, 40, 50];
num_ber.splice(2, 0, 30);
console.log(num_ber);

//exercise 
const nums = [10, 20, 30, 40, 50, 60];
const newNums = nums.slice(1, 5);
console.log(newNums);


const nums2 = [10, 20, 30, 40, 50];
const removed = nums2.splice(1, 2);
console.log(nums2);
//can returns the deleted items
console.log(removed);






