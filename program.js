function sum(firstArray, secondArray) {
  let resultArray = []
  
  let check = verifyLength(firstArray, secondArray);
  
  if (!check) return false;
  
  for (let i = 0; i < firstArray.length; i++) {
    result = addNumbers(firstArray[i],secondArray[i]);
    if (result)
      resultArray[i] = result;
    else
      return false;
  }
  return resultArray;
}

function addNumbers(first, second) {
  let check = verifyNumber(first) && verifyNumber(second);
  if (check) {
    return first + second;
  } else {
    return false;
  }
}

function verifyNumber(number){
  if (typeof number != "number") {
    console.log("type is not number");
    return false;
  }
  else if (number > -Infinity && number < Infinity) {
    return true;
  } else {
    console.log("not a number error")
    return false;
  }
}

function verifyLength(firstArray, secondArray) {
  if(firstArray.length == secondArray.length) {
    return true;
  }else {
    console.log("array length mismatch")
    return false;
  }
}

function equal(computed, expected) {
  for (let i = 0; i < computed.length; i++) {
    if (computed[i] == expected[i]) {
    } else {
      return false;
    }
  }
  return true;
}

let sum1 = sum([1,2,3,4,5], [6,7,8,9,10])
console.log("adding two arrays :",equal(sum1,[7,9,11,13,15]))

let sum2 = sum([1,2], [1,4,5])
console.log("adding two arrays with different lengths :", sum2 === false)

let sum3 = sum(["1", 2], [2, 3])
console.log("adding an array with a string inside it :", sum3 === false)

let add1 = addNumbers(1, 2)
console.log("adding two numbers :", add1 === 3)

let add2 = addNumbers(NaN, 2)
console.log("adding a number with NaN :" , add2 === false)

let value1 = verifyNumber(4)
console.log("verifies 4 :", value1 === true)

let value2 = verifyNumber(Infinity)
console.log("verifies Infinity as false :", value2 === false)

let length1 = verifyLength([1,2,3],[2,3,4])
console.log("verifies length of array :", length1 === true)

let length2 = verifyLength([1,2,3],[2,3,4,5])
console.log("verifies length of mismatched array :", length2 === false)

