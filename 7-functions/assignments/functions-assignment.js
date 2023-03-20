// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]

function addedOne (array) {
  for (let i =0; i<array.length; i++){
      array[i] ++
  } return array
}
console.log(addedOne([2,3,5]))
  
  // 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
  // Example string = "happy birthday", letter = "a", should return true
  // Example string = "happy birthday", letter = "q" should return false

  function includes(string,a) {
    if (string.includes(a)) {
      return true
    }
    else {return false}
  }

  console.log(includes("happy birthday","z"))


  // 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
  // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
  
  array = ["Tom Smith", "Bob Jones", "Bill Williams"]


function firstName(fullNames) {
 let firstNames = []
for (let i=0; i< fullNames.length; i++){
   let names = fullNames[i].split(" ");
   firstNames.push(names[0]);}

  return firstNames
}

console.log(firstName(array))


  // 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
  // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
  
function greetingFunction (name,greeting){
  return `${greeting} ${name} ` 

}
console.log(greetingFunction("Asad","Hello"))
  
  // 5. Write a function that takes in the year someone was born and returns their age.
  // Example: birth year: 2000 returns 23

  function age (yearBorn){
    return 2023 - yearBorn
  }

console.log(age(1991))