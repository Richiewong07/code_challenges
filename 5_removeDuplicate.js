// 5. Remove Duplicate

// Question: How would you remove duplicate members from an array?

// Answer: will start a while looping and keep an object/ associated array. If i find an element for the first time i will set its value as true (that will tell me element added once.). if i find a element in the exists object, i will not insert it into the return array.

function removeDuplicate(arr) {
  var exists = {};
  var outArr = [];
  var elm;

  for (var i = 0; i < arr.length; i++) {
    elm = arr[i];
    if(!exists[elm]) {    // stores elemnt in array in object with boolean key value pairs
      outArr.push(elm);
      exists[elm] = true;
      // console.log(exists)
    }
  }
  return outArr;
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));
