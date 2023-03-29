// 1.   Create an object for a celebrity and save it to a variable

const caleb = {}

// 2.   Using dot-notation add 3 key-value pairs to the celebrity

caleb.name = "Johnny Depp"
caleb.height = "5 feet 11 inches"
caleb.yearBorn = 1963

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity

caleb['weight'] = "157 lbs"
caleb['homeTown'] = " Owensboro, Kentucky"
caleb['wonGoldenGlobe'] = true


// 4.   Write a function that allows us to add or update 3 properties

 function addProp (obj, prop, value){
    obj[prop] = value
    return obj;

}

addProp(caleb,"stillActing",true)
addProp(caleb,"alive",true)
addProp(caleb,"married",false)
// console.log(caleb)

// 5.   Using a loop - log all the celebrities properties to the console

// const keyArr = Object.entries(caleb)
// console.log(keyArr)
// for(let i = 0; i < keyArr.length; i++){
//     // console.log(keyArr[i])
// }

for (let prop in caleb){
    console.log(prop, caleb[prop])
}



const dad = {
    name :' John',
    occupation : "engineer", 
    age : 32,
  happy : true,
 weight: 150,
}


console.log(dad.name)
console.log(dad.occupation)
console.log(dad.age)

dad.joke = function(){
    console.log("What does a baby computer call his father? Data.")
}

console.log(dad.joke())

addProp(dad,"stillActing",true)

console.log(dad)