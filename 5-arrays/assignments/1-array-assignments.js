// 1.   Create an array that contains two of your favorite things to do
const favoriteActivities = ["sports","cars"]

// 2.   Using an array method, add another thing you like to do to that list
favoriteActivities.push("sleep")
console.log(favoriteActivities)
// 3.   Reverse the order of the array (remember, if needed use MDN)

favoriteActivities.reverse()
console.log(favoriteActivities)

//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
const daysOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(daysOfWeek.length)

// 5.   log the 4th element in the array
console.log(daysOfWeek[3])

// 6.   Remove the first element in the array. Log the new array and the element removed from the array
 daysOfWeek.shift()
console.log(daysOfWeek)

// 7.   Put 'Sunday' back at the beginning of the array and log the new array
daysOfWeek.unshift("Sunday")
console.log(daysOfWeek)


// 8.   Remove the last element in the array. Log the new array and log the element removed
// daysOfWeek.pop();
console.log(daysOfWeek.pop());
console.log(daysOfWeek)

// 9.   Add 'Saturday' back to the end of the array and log the new array
daysOfWeek.push("Saturday")
console.log(daysOfWeek)

//10.   Replace 'Thursday' with 'Friday Junior'
daysOfWeek.splice(4,1,"Junior Friday")
console.log(daysOfWeek)

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
console.log(`My favorite day of the week is ${daysOfWeek[2]}`)

//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']

const results = phone.concat(laptop)
console.log(results)

//13.   Write a line of code to test if something is an array or not
const something = [];

if (Array.isArray(something)) {
    console.log("This is an aray")
}