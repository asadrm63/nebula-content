// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'
console.log(noCaps.toLowerCase())


// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
console.log(loud.toUpperCase())


// Join the prior two variables together.
console.log(noCaps +loud)
 

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
console.log(stringOfNames.split(' '))


// Make your own mad-libs using a template literal
const sport = "basketball"
const player = "Lebron James"
const team = "Warriors"
const food = "burgers"

console.log(`My favorite sport is ${sport}. My favorite player is ${player}. My favorite team is ${team}.My favorite food is ${food}. `)


// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
const initials = ironMan[0]+ironMan[5]
console.log(initials)



// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
console.log(string.slice(19,27))


// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
console.log(string1.slice(11,12))

console.log(string1[length-1])

// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';
const sum = parseInt(ten)+ parseInt(five)
console.log(sum)


// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 
const sentStrng = sentence.split(' ')
console.log(sentStrng)
  
