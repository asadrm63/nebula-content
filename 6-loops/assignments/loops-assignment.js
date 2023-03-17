// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'

for (let i=0; i<=30; i++){
    console.log(`the current index is ${i}`)
}



// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index

for (let i= 1; i<=10; i+=2){
    console.log(`the current index is ${i}`)
}


// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
 const topFiveCelebs = [ 'David Beckham', 'Denzel Washington','Brad Pitt','Johnny Depp','Martha Stewart' ]
 for (let i=0; i< topFiveCelebs.length; i++){
    console.log(topFiveCelebs[i])
}


// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
for (let i=0; i< topFiveCelebs.length; i++){
    if (topFiveCelebs[i].length %2 === 0) {
        console.log(topFiveCelebs[i])
    }
}




// 5.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
 let firstNames = []
for (let i=0; i< topFiveCelebs.length; i++){
   let names = topFiveCelebs[i].split(" ");
   firstNames.push(names[0]);
//    console.log(names)
}
console.log(firstNames)

// 6.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only last names
let lastNames = []
for (let i=0; i< topFiveCelebs.length; i++){
   let names = topFiveCelebs[i].split(" ");
   lastNames.push(names[1]);
//    console.log(names)
}
console.log(lastNames)


// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console

const vowels = "aiou"
 let vowelCount = []
for (let i = 0; i < topFiveCelebs.length; i++){
    for (let j = 0; j <topFiveCelebs[i].length; j++){
    if (topFiveCelebs[i][j] === 'a'|| topFiveCelebs[i][j] === 'i' || topFiveCelebs[i][j] === 'o' ||topFiveCelebs[i][j] === 'u'){
         console.log(`${topFiveCelebs[i][j]}`);  
    } 
    }
   
}



// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console

for (let i = 0; i < topFiveCelebs.length; i++){
    for (let j = 0; j <topFiveCelebs[i].length; j++){
    if (topFiveCelebs[i][j] === topFiveCelebs[i][j].toUpperCase() && topFiveCelebs[i][j] !== " "){
        console.log(topFiveCelebs[i][j])
    }
    }
}

// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

// convert array to string  then uppercase then join

let string = topFiveCelebs.toString()
let uppercaseString = string.toUpperCase()
 let newArray= uppercaseString.split(' ')
let joined = newArray.join("-")
let final = joined.split(",")
console.log(final)


// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

const favoriteCelebrity = topFiveCelebs[3];

for (let i = 0; i<topFiveCelebs.length; i++){
    if (topFiveCelebs[i] === favoriteCelebrity) {
        console.log(topFiveCelebs[i])
        break;
    }
}

//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console


for (let i = 0 ; i<=30; i++){
    if (i %2 === 0 &&  i %3 !== 0 ) {
      console.log("fizz", i)
    }
  
    else  if (i %3 === 0 &&  i %2 !== 0 ) {
      console.log("buzz", i)
    }
   else  if (i %3 === 0 &&  i %2 === 0 ) {
      console.log("fizz-buzz", i)
   }
  
    else {console.log(i)}
  }
