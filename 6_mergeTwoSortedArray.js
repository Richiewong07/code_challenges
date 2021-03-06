// 6. merge two sorted array

// Question: How would you merge two sorted array?

// Answer: I will keep a pointer for each array and (read the code. and be careful about this one.)

function mergeSortedArray(a, b) {
  var merged = [];
  var aElm = a[0];
  var bElm = b[0];
  var i = 1;
  var j = 1;

  // if either array a or array b has no more elements to merge
  if (a.length == 0) {
    return b;
  }

  if (b.length == 0) {
    return a;
  }

  // while array a and array b exists
  while(aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {   // if element in array a exist and is smaller that the element in array b
      merged.push(aElm);
      aElm = a[i++];
    }
    else {
      merged.push(bElm);
      bElm = b[j++];
    }
  }
  return merged;
}

console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]));
