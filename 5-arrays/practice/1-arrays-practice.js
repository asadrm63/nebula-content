// Declare an empty array
let array = []

// Declare an array with all the data types you can think of within it
let dataArray = [1,2,3,"Hello World",true,]

// Make a list of classmates names first names in an array
const firstNames = ["Donald","Abdel","Judah","Asadur","Aulexis","Juliet","Matt","Dayana",]
firstNames.sort()
// Get the length of that previous array
console.log(firstNames.length)

// Check the type of the previous array
 console.log(typeof(firstNames))

// Check if the previous array is an array
console.log(Array.isArray(firstNames));

// Using indexing, grab your name from that previous array

// console.log(firstNames.findIndex("Asadur"))
console.log(firstNames[1]);

// Use the following variable to get the student at the index from the array of students
let index = 2; 
console.log(firstNames[index]);

// Update the array to have each element as a students first and last name : 'firstName lastName'

console.log(firstNames)

firstNames[0] = firstNames[0] + " "+ "Bessard"
firstNames[1] = firstNames[1] + " "+ "Rahman"
firstNames[2] = firstNames[2] + " "+ "Rochell"
firstNames[3] = firstNames[3] + " "+ "Senat"
firstNames[4] = firstNames[4] + " "+ "Williams"
firstNames[5] = firstNames[5] + " "+ "Belgrave"
firstNames[6] = firstNames[6] + " "+ "Vorbe"
firstNames[7] = firstNames[7] + " "+ "Reilly"

console.log(firstNames)





