// Utilize the switch statement to re-write your horse-racing exercise from earlier
// Feel free to copy the old if statement in and convert it into a switch statement
// Create a Horse Racing program that when executed, stores a random number in a variable called position between 1 and 5. 
// The program should then check to see what number is stored in the variable and output the messages indicated in the comments below.


// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

let horseName = "Randy";

let position = Math.ceil(Math.random()*5);
console.log(position)

switch(position){  
    case 1 :
    console.log(`${horseName} finished in first place!`);
    break;
    case 2:
      console.log(`${horseName} finished in second place!`);
      break;
      case 3:
    console.log(`${horseName} finished in third place!`);
    break;
    default: 
    console.log(`${horseName}  did not finish in the top 3.`)

    
      
      



}

// let food = "Bananas"

// switch(food){
//   case "Watermelon":
//     console.log("Yes, Watermelon is available for purchase");
//     break;
//   case "Strawberries":
//     console.log("Yes, Strawberries are available for purchase");
//     break;
//   case "Bananas":
//     console.log("Yes, Bananas are available for purchase");
//   default:
//     console.log(`Sorry, ${food} is not available right now.`);
// }