// .reduce() Practice

/* Question 1
Write a HOF to reduce an array of numbers to all the numbers added up */
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let output = (nums.reduce((accumulator, current) => accumulator + current));
console.log(output)
/* Question 2
Write a HOF to reduce all numbers in an array to all numbers multiplied together */
let multiply = (nums.reduce((accumulator, current) => accumulator * current));
console.log(multiply)
/* Question 3
Write a HOF to reduce all numbers in an array to the largest number */
let largest = (nums.reduce((a, b) => {
    if (a>b){
      return a
    }
    else if(b>a){
      return b
    }
  }));
console.log(largest)
/* Question 4
Write a HOF to find the oldest person in a group */
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]
let oldest = (partyPeople.reduce((a, b) => {
    if (a.age>b.age){
      return a
    }
    else if(b.age>a.age){
      return b
    }
  }));

console.log(oldest)