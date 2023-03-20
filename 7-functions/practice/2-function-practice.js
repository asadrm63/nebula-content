// 1. Write a function that multiplies 3 input numbers together.
function multiply (a,b,c){
return a*b*c
}
console.log(multiply(5,2,3))

// 2. Write a function that takes in a number and logs all odd numbers leading up to that number

function lead (num) {
    for (let i =0; i<num; i++){
        if (i%2 ===1){
        console.log(i)
        }
      }
}

console.log(lead(5))

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
const topFiveCelebs = [ 'David Beckham', 'Denzel Washington','Brad Pitt','Johnny Depp','Martha Stewart' ]
function initials(names) {
    for (let i = 0; i < names.length; i++){
        for (let j = 0; j <names[i].length; j++){
        if (names[i][j] === names[i][j].toUpperCase() && names[i][j] !== " "){
            console.log(names[i][j])
        }
        }
    }
     }
    
    console.log(initials(["Asadur Rahman"]))

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator

function ops(a,operator,b){
    if (operator === "+"){
       return a + b
    }
       else if (operator === '-') {return a - b;}
      else if (operator === '*') {return a * b;}
      else{ return a/b;}
    }
    
    console.log(ops(2,"/",3))

// 5. Write a function which takes in two arrays and returns those arrays combined together. 
function twoArrays (array1,array2){
    return array1.concat(array2)
}