/*** Given a string input that contains two numbers that need to be added together* Return the value of those numbers added together* ie calculator('4+4') = 8 */

function caculator(str) {
  // parseInt? convert string to a number
  // split based on the + to find all the numbers that need to be added together
  let split = str.split("+");
  // ['4', '4']
  // create a counter variable
  let counter = 0;
  // loop?
  for (let i = 0; i < split.length; i++) {
    // convert current element in array into a number
    let currentNumber = parseInt(split[i]);
    console.log(currentNumber);
    // add number to counter
    counter += currentNumber;
  }
  // return the counter variable
  console.log(str, "=", counter);
  return counter;
}
function add(a, b) {
  return a + b;
}

//sample
//  testsconst Test = require('@codewars/test-compat'); describe("Tests", () =>
//  { it("test", () => {
//     Test.assertEquals(caculator('1'), 1);
//      Test.assertEquals(caculator('4+18'), 22);
//      Test.assertEquals(caculator('2+2'), 4);
//      Test.assertEquals(caculator('4+4+2+0'), 10);
//      Test.assertEquals(caculator('-4+2'), -2); });

//  })

//  Code war with accumilator

//  Given an array of names. Return the number of names that start with "A"

//  Given an array of grades. Return the number of students passing.

grades = [90, 38, 78, 96, 74, 65];
Grades2 = [65, 74, 82, 91, 59, 47];

// Sorts an array alphabetically by first letter in the sequence Input: array of strings Output: sorted array of strings i.e.
// ‘5JL-598’
// ‘BFW-752’
// ‘HX1-309’
// ‘QZN-146’
// ‘VTP-415’
// ‘99O-827’
// ‘RGA-932’
// ‘643-H81’
// ‘NYX-675’
// ‘UMB-249’


function firstLetter(string){
  //input a string    //loop through string, if the character is alphabetic return that character    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'    for(let i = 0; i < string.length; i++){
      let currentLetter = string[i].toUpperCase()
      if(alpha.includes(currentLetter)){
          return currentLetter        }
  }
}
function sortFirst(arr){
  let output = ''    for(let i = 0; i < arr.length; i++){
      let currentPlate = arr[i]
      //If output does not exist or the first letter in the current plate is before the first letter in the output        if(!output || firstLetter(output) > firstLetter(currentPlate)){
          output = currentPlate        }
  }
  return output
}




// Count the number of ‘J’s in a string
// Input str Output count of letter ‘J’
//  i.e ’Jacob Jinglehiemersmithj’ = 2 Summing up the value of an array (just numbers)

// counter
// loop
// if
// acculmulate
// return counter

//  Input array Output number all elements summed together Ie [4,2,4,0] = 10

// counter
// loop
// acculmulate
// return counter

// Given an array of grades of students find the number of passing students (65%) Input array student grades Output count of students who are above the passing gradepoint Ie [70, 55, 2, 100, 95, 85] = 4

//  console.log(grades([0,32,90,38,78,96,74,65]), 5);
//  console.log(grades( [65,74,82,91,59,47]), 4);
//  console.log(grades([30,40,50,60,70,80,90,100,101]), 5);
//  console.log(grades([61,62,63,64,65,66,67,68,69]), 5);
//  console.log(grades([44,22,33,66,77,88,99,0]), 4);

// counter
// loop
// acculmulate
// return counter

// Is an element in a string or array (remake the includes function)
// Input haystack (array | string), needle (any) Output boolean is the needle inside the haystack
// Ie [‘1’,’2’,3,’4’], 4 = false [‘1’,’2’,3,’4’], 3 = true

// loop
// if
// return

// Count the number of ‘J’s in a string
//  Input str
// Output count of letter ‘J’
// ’Jacob Jinglehiemersmithj’ = 2
// let str = 'Juliet, 25, true, jacob, Josh'
// output 2
// 'bob'
// output 0
// 'jadJ bbhKKKJjjJ'
// output 3
// 'today was a joke'
// output 0

function countJ(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "J") {
      counter++;
    }
  }
  return counter;
}

console.log(countJ("Jacob Jinglehiemersmithj"));
console.log(countJ("Juliet, 25, true, jacob, Josh"));
console.log(countJ("bob"));
console.log(countJ("jadJ bbhKKKJjjJ"));
console.log(countJ("today was a joke"));
