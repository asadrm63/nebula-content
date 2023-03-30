// Connect your JS file to your HTML file

console.log("live")
// Select the <h1> element using querySelector() and log it to the console
const hold1 = document.querySelector('h1');
console.log(hold1)

// Select the <p> element using querySelector() and log it to the console
const hold2 = document.querySelector('p');
console.log(hold2)

// Select the <ul> element using getElementById() and log it to the console
const hold3 = document.getElementsByClassName("item");
console.log(hold3)

// Select the first <li> element using querySelector() and log it to the console
const hold4 = document.querySelector("li");
console.log(hold4)

// Select the second <li> element using querySelectorAll() and array indexing, and log it to the console
const lis = document.querySelectorAll("li");
console.log(lis[1])

// Select all <li> elements using getElementsByClassName() and log them to the console
const liClass = document.getElementsByClassName('item')
console.log(liClass)

// Select the <ul> and create a new <li> and add it to the list
const ul = document.querySelector('ul');
const newLi = document.createElement('li')
newLi.innerText ="THis is the new li" 
ul.appendChild(newLi)