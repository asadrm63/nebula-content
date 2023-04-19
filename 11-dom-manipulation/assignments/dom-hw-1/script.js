// COUNTER EXERCISE
console.log("connected")
// Select the body element from index.html

let bodyElement = document.querySelector("body")
console.log(bodyElement)

// Set an attribute of 'style' to the body tag and add a background color of anything other than white
bodyElement.classList.add("style")


/* -------------------------------------------------------------------------- */

bodyElement.style.backgroundColor = "#264653";


// Create an h1 element
const newH1 = document.createElement('h1');

// Append a new h1 element to the body element as a child
bodyElement.appendChild(newH1)
// Add text to the h1 element 
newH1.innerText="This is the H1"

// Assign the background color of this element to something unique
newH1.style.backgroundColor = "#cad2c5";  
// Set a new style attribute to the h1 element
newH1.style.textDecoration = "underline ";

// Add font size to the h1Element
newH1.style.fontSize = "xx-large";

// Set the default text to the number zero
newH1.innerText = 0;
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const buttonIncrement = document.createElement('button');


// Append the button element to the body element
bodyElement.appendChild(buttonIncrement)
// Add text to the button that says "Add One"
buttonIncrement.innerText = "Add One "

// Add a class attribute to button
buttonIncrement.classList.add("button1")

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const buttonDecrement = document.body.createElement('button');

// Add the button element to the body element
bodyElement.appendChild(buttonDecrement)

// Add text to the button element that says "Subtract One"
buttonDecrement.innerText = "Subtract One"
// Add a class attribute of style to the button element
buttonDecrement.classList.add("button2")

/* -------------------------------------------------------------------------- */
// INCREMENT BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value
buttonIncrement.addEventListener("click", (e) => {
    newH1.innerText++;                  
});



/* -------------------------------------------------------------------------- */
// DECREMENT BUTTON FUNCTION 
// Create functionality that, when you click this button it decreases the h1 value
buttonDecrement.addEventListener("click", (e) => {
    newH1.innerText--;                  
});