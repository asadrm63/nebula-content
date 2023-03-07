// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

/*
First-Name Last-Name
House-Number, Street-Name 
City, State
Zip

Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/


const fName = "Asadur"
const lName = "Rahman"
const houseNum = 157 
const street = "E 2nd St"
const city = "New York"
const state = "NY"
const zip = 10009

const address = `${fName} ${lName} 
${houseNum}, ${street}
${city}, ${state}
${zip}`

console.log(address)