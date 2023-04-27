// 1.   Write a function that tests if a string contains the string of '123' within it
let str ="asad 123"
// console.log(str.test(/123/))

function contains123(str){
    const regex = /123/
    return regex.test(str)
}

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false
console.log(str.test(/a.*c/))

const testCafterA =(string) {
    return /a_ i.test(string)
}
// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'


// 4.   Write a function that checks if all characters in a string are lowercase letters

str.test(/^[a-z]+$/)
// 5.   Write a function that checks if a string has an uppercase letter
str.test(/[A-Z]/)

// 6.   Write a function that checks if a string contains a dash or underscore 
str.test(/[-_]/)

// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
str.test(/\.com$/)

// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning
str.test( /^https?:\/\//)

// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
str.test(/^[A-Z]/)
