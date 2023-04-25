// 1.   What is the order of output?
setTimeout(() => {
    console.log('a');
}, 10);
console.log('b');

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');

setTimeout(() => {
  console.log('f');
}, 0);

setTimeout(() => {
    console.log('g');
}, 20);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))

// b 
// c d e
// f
// h i
// a
// g
// 


// b
//  e
//  d c
//  h i
//  f
//  a
// g

// 2.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.
//      randomize if its going to resolve or reject
let carWashed = Math.random() >= 0.5;
let cleanedCar = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (carWashed) {
            resolve("the car is clean");
        } else {
            reject("car is dirty");
        }
    }, 1000);
});

console.log(cleanedCar)

// 3.   Using the prior example use .then and .catch to handle responses and rejections
cleanedCar
.then(sucess => console.log(sucess))
.catch(reason => console.log(reason))
.finally(()=> console.log("the end"));


// 4.   What does a promise resolve to?
// the code in the resolve parameter



// 5. What is the output of the following code?


const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then((v) => {
    console.log(v);
  });

//16