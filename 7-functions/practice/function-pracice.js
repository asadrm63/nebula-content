// Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. Test the function with some numbers.


function multiplyBy10 (num){
    return num*10
}
console.log(multiplyBy10(2))

// Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.

function sayGoodbye (name){
    return `See you again ${name}`
}

console.log(sayGoodbye("asad"))
// Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the modulus operator to check whether a number is even or not).
const nums =[1,2,3,4,5,6,7,8,9,10]

function evenNumbers (array){ 
    let evenNums =[];
    for (let i=0; i<array.length; i++){ 
        if (array[i] % 2 === 0){
            // console.log(array[i])
           evenNums.push(array[i]);
           
        }
    }
    return evenNums
}
 console.log(evenNumbers(nums))


//  function evenNumbers(arr) {
//     // Initialize an empty array to store even numbers
//     let evenArr = [];
  
//     // Iterate over the input array
//     for (let i = 0; i < arr.length; i++) {
//       // Check if the current element is even
//       if (arr[i] % 2 === 0) {
//         // If it's even, add it to the even array
//         evenArr.push(arr[i]);
//       }
//     }
  
//     // Return the array of even numbers
//     return evenArr;
//   }

// Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.

function reverseWords (string) {

    let splitString = string.split("")
    let reverseArray = splitString.reverse()
   let joinArray = reverseArray.join("")
    return joinArray
}

console.log(reverseWords("hello"))