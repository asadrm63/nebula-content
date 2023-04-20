// .filter() Practice

/* Question 1
Write a function to filter an array for all the numbers greater than 5 */
const q1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const longWords =q1Array.filter(word => word.length > 5);

console.log(longWords);

/* Question 2
Write a function to filter an array for all the even numbers */
const q2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const even= q2Array.filter(word => word %2 === 0);

console.log(even);
/* Question 3
Write a function to filter an array for all the non number item */
const q3Array = [1, 'a', 'b', 2, {}, []]

const nonNumber= q3Array.filter(word => typeof word != "number");

console.log(nonNumber);

/* Question 4
Write a function to filter an array of objects for people over the age of 21 */
const partyPeople = [
  { name: 'John', age: 25 },
  { name: 'Jordan', age: 18 },
  { name: 'Frank', age: 50 },
  { name: 'Anna', age: 12 }
]

const ofAge = partyPeople.filter(word => word.age >21);

console.log(ofAge);

/* Question 5
Write a function to filter out all letters from a string
  Hint: filter doesn't work on strings.. */
  
let string = "helli america 2134"
  let array = string.split("");
  let noLetters = array.filter(char => !(/[a-zA-Z]/).test(char));


console.log(noLetters);

