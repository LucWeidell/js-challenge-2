// 1. Write a function that will iterate over an alphabetized string and return the
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  let prevCharCode = 0;
  for(i = 0; i < str.length; i++){
    let curCharCode = str.charCodeAt(i);
    if(curCharCode == prevCharCode + 2){
      return String.fromCharCode(++prevCharCode);
    }
    prevCharCode = curCharCode;
  }
  return 'no missing letters'
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    //Nest to go over again
    for (let j = i+1; j < arr.length; j++) {
      if((arr[i] + arr[j]) == target){
        return true;
      }
    }
  }
  return false;
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example:
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  let arrOdd  = []
    for (let i = 0; i < arr.length; i++) {
     let ele = arr[i];
     if((ele % 2 == 0) || ele ==0){
       continue;
     }
     arrOdd.push({index: i, val: ele})
   }
  arrOdd.sort(function(one, two){return one.val - two.val})
  let arrPlace = arrOdd.map(element => element.index)
  arrPlace.sort(function(one, two){return one - two})
  while(arrPlace.length > 0){
    arr.splice(arrPlace[0], 1, arrOdd[0].val)
    arrPlace.splice(0,1)
    arrOdd.splice(0,1)
  }
  return arr;


  //NOTE This attempt keeps the EVEN index in place and ORDERS ODD INDEX
  //  Read the question wrong


  // for (let i = 0; i < arr.length; i++) {
  //   let ele = arr[i];
  //   if((i % 2 == 0) || i ==0){
  //     arrEven.push(ele);
  //     continue;
  //   }
  //   arrOdd.push(ele)
  // }
  // arrOdd.sort(function(one, two){return one - two})
  // let result = [];
  // while( arrEven.length > 0 ) {
  //   result.push(arrEven[0]);
  //   if(arrOdd.length > 0){
  //     result.push(arrOdd[0]);
  //     arrOdd.splice(0,1);
  //   }
  //   arrEven.splice(0,1);
  // }
  // arr = result;
}