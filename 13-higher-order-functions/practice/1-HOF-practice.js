/* Question 1
Write a higher-order function which takes in two numbers and performs a calculation with them
Write the callback functions separately
  Example:
    calculate(multiply, 2,4) => 8
    calculate(subtract, 2,4) => -2
    calculate(exponent, 2,4) => 16   */


    const calculateThis = (num1, num2, func) => {
        const calculation = func(num1, num2);
        return calculation;
    }
    
    function multiply(a, b) {
        return a*b
    }
    function subtract(a, b) {
        return a-b
    }
    function exponent(a,b){
        return a**b
    }

console.log(calculateThis(2,5,exponent))
    

/* Question 2
Write a function that takes in any number of numbers and performs calculations on them,
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
  Example:
    calculateAll(multiply,[1,4,1,231,5]) => 4620
    calculateAll(subtract, [2,4,5,7]) => -14
*/
const calculateAll = (func,numbers) => {
    let result = numbers[0];
//   console.log(numbers[0])
    for (let i = 1; i < numbers.length; i++) {
      result = func(result, numbers[i]);
    }
    return result;
}

    function multiply(a, b) {
        return a*b
    }
    function subtract(a, b) {
        return a-b
    }
    function exponent(a,b){
        return a**b
    }

console.log(calculateAll(multiply,[12,23,45]))




/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
  Example:
    modify(yeller, 'I need a nap') => I NEED A NAP!!!
    modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
    modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/
// strings arr immutalble

// add to new string
const modify = (mode,string) => {
    return mode(string);
}
const yeller = (string) => {
    return string.toUpperCase()
}
console.log(yeller("asad"))

const sarcastic = (string) => {
  let newString = ''
  for(let i=0 ; i<string.length; i++){
 if (i % 2 === 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString
  }

const code =(string) => {
  let codeString =""
  let vowels = ['a',"i","o","u","e"]
  for(let i= 0; i<string.length; i++){
    if (vowels.includes(string[i])){
      codeString += "-";
    }else {
     codeString += string[i]
    }
  }
  return codeString;
}
console.log(modify(yeller, 'I need a nap')) 
console.log(modify(sarcastic, 'I really like running'))
console.log(modify(code, 'There is no cake'))
/* Question 4
Write a function that takes in an array filled with different data types and returns each data type
  Examples:
    oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['I love coding, 'goosfraba']

    oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['Nested Array!']

    oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    [10, Infinity]
*/
    
const oneType =(dataType,array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === dataType) {
        // console.log(typeof array[i])
       newArray.push(array[i]);
      }
    }
    return newArray;
  }

  console.log(oneType("number",['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]))
  console.log(oneType("string",['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]))