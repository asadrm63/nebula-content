// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)

const dreamCar = {
    Manufacturer: 'Porshe',
    Color: "black",
    Model : "911 turbo ",
    topSpeed : 200,
    turboengine : true ,
    horsepower : 123 ,
    
}


// 2.   Using dot-notation Log to the console 3 properties from the previous object
// console.log(dramCar.Color)
// console.log(dramCar.Model)
// console.log(dramCar.Manufacturer)


// 3.   Using bracket-notation Log to the console 3 properties from the previous object

console.log(dreamCar["topSpeed"])
console.log(dreamCar['turboengine'])
console.log(dreamCar['horsepower'])


// 4.   Try and log a property that doesn't already exist - what output do we get?

console.log(dreamCar.Seats)  
// undefined


// 5.   Add a new key-value pair to the vehicle. 
dreamCar.DriveTrain = "awd"
console.log(dreamCar.DriveTrain)


// 6.   Using bracket-notation update a property on the vehicle. 
dreamCar['topSpeed'] = '230'
console.log(dreamCar.topSpeed)


// 7.   Using dot-notation update a property on the vehicle. 
dreamCar.Color = "blue"
console.log(dreamCar.Color)


// 8.   Create a method for turning your vehicle on

dreamCar.turnOnCar = function turnOn () {
    console.log("Turning On")
}


// 9.   Create a method for turning your vehicle off

dreamCar.turnOffCar = function turnOff () {
    console.log("Turning Off")
}




//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)



dreamCar.turnOnCar()
dreamCar.turnOffCar()
