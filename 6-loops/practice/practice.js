// const arrayOfNums = [5, 3, 2, 1, 0, 9, 10, 30, 55];

// for (let i=0; i<arrayOfNums.length; i++){
//     console.log(arrayOfNums[i])
// }

// for (let i =arrayOfNums.length-1; i>=0; i--){
//     console.log(arrayOfNums[i])
// }


// for(let i = 0; i < 10; i++){
//     for(let j =0; j < 5; j++){
//       console.log("outer i is ",i,"inner i is",j)
//     }
// }


// Given the following string and using a loop...

const famousQuote = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
// console.log() all of the vowels. console.log all vowels and store the amount of vowels in a variable called vowelCount after log the vowelCount.

const vowels = "aiou"
 let vowelCount = []
for (let i = 0; i < famousQuote.length; i++){
    for (let j = 0; j <vowels.length; j++){
    if (famousQuote[i] === vowels[j]){
        vowelCount.push(famousQuote[i]);
         console.log("found a vowel @",i,famousQuote[i]);
       
    }
    
    }

   
}

console.log(vowelCount.length)
  
