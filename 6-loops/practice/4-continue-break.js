// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'

 let string = "This is a string  aaaaa";
for (let i = 0; i<string.length; i++){
    if (string[i] === "a"){
        console.log("found a @",i )
        break;
    } 
}



// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'

const array = ['a','b','c',5, 100,'e',100]

for (let i=0; i<array.length; i++){
    // if (array[i] === 100)
   if(typeof(array[i]) === "number") 
    {
        console.log('at index',i,'there is the number', array[i])
        break;
    }
}



// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console
 let newArray = []
for (let i= 0; i<array.length; i++){
    if (typeof(array[i]) === "number"){
        continue;
    }
    newArray += array[i];
}
// console.log(typeof array[3])
console.log(newArray) 

