// Create two variables, one equal to '10' and the other equal to 10
const var1 = '10'
const var2 = 10


// Comparing the two variables, are they strictly equal?
console.log(var1 === var2)

// Comparing the two variables, are they loosely equal?
console.log(var1 == var2)

// Comparing our two prior variables, in one statement, are they both loosely equal and strictly equal? (Using the && operator)
console.log(var1 === var2 && var1 == var2)

// Comparing our two prior variables, in one statement, are they either loosely equal or strictly equal? (Using the || operator)
console.log(var1 === var2 || var1 === var2)

// Check if the variable set to 10 is not loosely equal to 'ten' 
console.log(var2 != 'ten')

// Create a variable and initilize it to true, check if it is not strictly equal to 'true' 
let var3 = true 

console.log(var3  !== 'true')
