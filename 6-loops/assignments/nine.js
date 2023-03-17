const topFiveCelebs = [ 'David Beckham', 'Denzel Washington','Brad Pitt','Johnny Depp','Martha Stewart' ]


// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

// convert array to string  then uppercase then join

// need to chng to strng to uppercase
let string = topFiveCelebs.toString()
let uppercaseString = string.toUpperCase()
// console.log(uppercaseString)
//  need to  convert string to array with no spaces

// split() splits a string into an array of substrings, and returns the array:

// The join() method creates and returns a new string by concatenating all of the elements in an array

 let newArray= uppercaseString.split(' ')
//  console.log(newArray)
let joined = newArray.join("-")
console.log(joined)

let final = joined.split(",")

console.log(final)
// // use .join("-")