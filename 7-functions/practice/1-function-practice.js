// 1. Write a function that takes in 1 number and returns that number + 1

function addOne (num) {
    return num+1
}

console.log(addOne(100))
// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
 function goodNight (name) {
    return `Goodnight ${name}`
 }
 console.log(goodNight("Asad"))

// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
 function zero (array){
    for (i=0;i<array.length; i++){
    if (array[i] === 0 ){
        return `This array has the number zero in it`
    }
 }
 }
 console.log(zero([2,0]))
// 4. Write a function that console logs 'hello world' 10 times to the console. 

// function helloTen (){

//     for (let i = 0; i <=10; i++) {
//        console.log("Hello World");
//       }
//     }
//     helloTen()


// 5. Write the prior function utilizing a 'fat arrow' function


const helloTen1 = () =>{
    for (let i = 0; i <=10; i++) {
        console.log("Hello World");
       }
     }
     helloTen1()

