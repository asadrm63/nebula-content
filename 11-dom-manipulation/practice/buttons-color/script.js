console.log("connected")

//yellow 
let yellowButton = document.querySelector(".yellow");
console.log(yellowButton);

yellowButton.addEventListener("click", (e) => {
        document.body.style.backgroundColor = "yellow";                  
    });
// blue
    let blueButton = document.querySelector(".blue");

    
    blueButton.addEventListener("click", (e) => {
            document.body.style.backgroundColor = "blue";           
        })
// green
let greenButton = document.querySelector(".green");

greenButton.addEventListener("click", (e) => {
        document.body.style.backgroundColor = "green";             
    })