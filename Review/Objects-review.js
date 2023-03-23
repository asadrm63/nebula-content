// Create two objects each with 3 key value pairs and then check to see if at least one of the key value pairs match

// const { blue } = require("colors")

    const obj1 = { 

        color: 'blue',
        item : 'car',
        age: 2,
    }

    console.log(Object.keys(obj1).length)


    // for(let key in obj1){
    //     // console.log(`${key}: ${obj1[key]}`);
    //     console.log(key)
    // }

    // // console.log(`${key}: ${obj1[key]}`);

    const obj2 = {
        name : 'Asad',
        age: 32,
        occupation: 'swe',
        
    }
    console.log(Object.keys(obj2))


    function checkObjects(ob1,obj2){
        for (let i=0;i<Object.keys(obj1).length; i++){
            // console.log(obj1[i])
            for( let j= 0; j<Object.keys(obj2).length; j++){
                if (Object.keys(obj1)[i] === Object.keys(obj2)[j]){
                    return true
            }
    
        }
        
    }
    return false
}


    // console.log(checkObjects(obj1,obj2))


// newKeys =""
// for (let keys in obj1 ){
//     newKeys +=keys[i];
// }

// console.log(newKeys)



// Write a function that accepts 2 objects and returns true or false

function trueOrfalse (obj1,obj2){
    if (obj1 &&obj2){
        return true
    }
}


console.log(trueOrfalse(obj2,obj1))


//Create a nested object and then iterate over it

const family =  {
    dad : {
           name :' John',
           occupation : "engineer", 
           age : 32,
         happy : true,
       },
       
          mom : {
           name :' Mary',
           occupation : "nurse", 
           age : 30,
         happy : true,
         
       },
         son : {
           name :' Jake',
           occupation : "student", 
           age : 13,
         happy : true,
         
       },
         daughter :{
           name :' Jill',
           occupation : "student", 
           age : 10,
         happy : true,
         
       },
         dog :{
           name :'Maxy',
           occupation : "trouble-maker", 
           age : 2,
        happy : true,
         
       }
       
    }


    for (let prop in family){
        console.log(prop, family[prop])
    }

    console.log(family)
