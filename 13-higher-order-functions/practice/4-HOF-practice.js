// .forEach Practice

/* Question 1
Given an array of numbers, log each number to the console. */
array1.forEach(element => console.log(element));
/* Question 2
Given an array of people, log a greeting to the console for each person. */
arrayOfStrings.forEach(element => console.log(`Hello ${element}`))
/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, 'hello', undefined, true, null, false, 'world', undefined];

mixed.forEach(element => {
    if (element === undefined){
        console.log(undefined)
    }
    else {console.log("defined")}


})
/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = ['Hi!', '🎶', "It's", 'a', 'beautiful', 'day', 'in', 'the', 'neighborhood', '🎶']


arrayOfStrings.forEach(element => {
    let vowel = "aioue"
    let count = 0;
for (let i = 0; i < element.length; i++) {
    const char = element[i].toLowerCase();
    if (vowel.includes(char)) {
      count++;
    }
}
    console.log(count)
})

/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(element => console.log(element));