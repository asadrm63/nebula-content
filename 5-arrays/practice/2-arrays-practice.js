// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
numArr[0] = numArr[0] *10

console.log(numArr)


// Add an additional element to the prior array

numArr.push(123)
console.log(numArr)

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
 let removedItem = numArr.pop()
 console.log(removedItem)

// Check if the prior array contains the number 1
//   If it does, log true, if it doesnt, log false

if (numArr.includes(1)){
    console.log(true)
} else {console.log(false)
}


// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'

console.log(numArr)
let removedFirstItem = numArr.shift()
console.log(removedFirstItem)
console.log(numArr)


// Add that item back

numArr.unshift(removedFirstItem)
console.log(numArr)
// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];

sortThis.sort()
console.log(sortThis)

// Now reverse the prior array
sortThis.reverse()
console.log(sortThis)

  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
const favoriteFoods = 'My favorite foods are chicken nuggets, steak, burrito bowls.';
console.log(favoriteFoods)
// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
array12 = favoriteFoods.split(" ") 
console.log(array12)
// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
back2String =array12.join("-")
console.log(back2String)

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
const numArr1 = [1,2,3,4,5,7,8,9,10]
numArr1.splice(5,0,6)
console.log(numArr1)
// Create two arrays and, using JavaScript join them together

const arrOne = ["Batman"]
const arrTwo = ["Superman"]
newarr = arrOne.concat(arrTwo)

console.log(newarr)


// Create a multi-dimensional array

const multiArray = [["Apples", "Oranges" ,"Bananas"], ["sweet","sour","juicy"], ["red","orange","green"]];
console.log(multiArray[0][1])