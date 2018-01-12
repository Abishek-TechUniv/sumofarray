function sum(firstArray, secondArray) {
  var resultArray = []
  for (let i = 0; i < firstArray.length; i++) {
     resultArray[i] = firstArray[i] + secondArray[i];
  }
  return resultArray;
}


function equal(computed, expected){
  for (let i = 0; i < computed.length; i++) {
    if (computed[i] == expected[i]) {
    } else {
      return false;
    }
  }
  return true;
}

var sum1 = sum([1,2,3,4,5], [6,7,8,9,10])
console.log("adding two arrays :",equal(sum1,[7,9,11,13,15]))

var sum2 = sum([1,2], [1,4,5])
console.log("adding two arrays with different lengths :", equal(sum2, false))