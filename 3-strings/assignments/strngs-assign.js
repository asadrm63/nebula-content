
// 1. Concatenate "hello" with "goodbye"
const string1 = "hello"
const string2  = "goodbye"
console.log(''.concat(string1," ", string2))
console.log(string1.concat(" ", string2))
string1.concat(string1 + string2)


// 2. Save the substring "Friend" from the string "Hello Friend"
const greeting = "Hello Friend"
const substring = greeting.slice(6,12)
console.log(substring)

// 3. Using 5 or more of the following  words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

console.log(` ${word1} ${word19} ${word15} sport ${word20} ${word12}.`)

// 4. Given the string of your full name get your initials.
const fullName = "Asadur Rahman"
const myInitials =fullName[0] + fullName [7]
console.log(myInitials)


// 5. Get the 5th character from the following string: 'Hello World'
const greeting1 = 'Hello World'
console.log(greeting1[4])

// 6. Find the index of the dash from 'Coding-Time!'
const coding = 'Coding-Time!'
console.log(coding.indexOf("-"))

// 7. Write code to grab the final letter from a any string.
const string = "string"
let lastIndex = string.length-1;
let lastChar = string[lastIndex];
console.log(lastChar)


// 8. Write code to grab the first 3 letters from a string. 
let frs3 =string.slice(0,3)
console.log(frs3)


// 9. Turn the following string into an array of words: 'This-is-a-sentence';
const sentence1 = 'This-is-a-sentence'
const arraySen = sentence1.split("-")
console.log(arraySen)

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;

let numStng = (one).toString()+(two).toString()
console.log(numStng)