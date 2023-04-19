/* Question 1
Write a higher order function to manipulate numbers in an array
  Examples:
    changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
    changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
    changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]            */

        
    function changeNums(arr, operation) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          newArr.push(operation(arr[i]));
        }
        return newArr;
      }
  
      const doubler = (num) => num * 2;
     const halves = (num) => num / 2;
      const pow = (num) => num * num;
  
      console.log(changeNums([1,2,3,4,5], doubler));
  console.log(changeNums([1,2,3,4,5], halves)); 
  console.log(changeNums([1,2,3,4,5], pow)); 
  
    
/* Question 2
Write a higher order function that calculates some features of a string
    Example:
    stringInfo(length, 'Howdy Partner!') => 14
    stringInfo(vowels, 'Howdy Partner!') => 3
    stringInfo(capitals, 'Howdy Partner!') => 2
    stringInfo(nonLetters, 'Howdy Partner!') => 2                    */

    const stringInfo = (operation, str) => {
        return operation(str);
      };
  
      const length = (str) => str.length;
  
      const vowels = (str) => {
        let count = 0;
        let vowel = ['a', 'i', 'o', 'u', 'e'];
        for (let i = 0; i < str.length; i++) {
          if (vowel.includes(str[i])) {
            count++;
          }
        }
        return count;
      };
      
      console.log(stringInfo(vowels,('Howdy Partner!'))); 


      const capitals = (str) => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
          if (str[i]===str[i].toUpperCase() && str[i] !== " " && str[i] !== "!") {
            count++;
          }
        }
        return count;
      };

      console.log(stringInfo(capitals,('Howdy Partner!'))); 


/* Question 3
Write a higher order function that minimizes a given list of numbers into one number
    Example:
    minimizeNums(add, [2,3,5,8]) => 18                            */
    

    const minimizeNums = (func, arr) => {
        let result = arr[0];
        for(let i = 1; i < arr.length; i++) {
          result = func(result, arr[i]);
        }
        return result;
      }
    const add = (num1, num2) => num1 + num2;
    const multiply = (num1, num2) => num1 * num2;
    console.log( minimizeNums(add,[2,3,5,8]))