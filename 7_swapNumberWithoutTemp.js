// 7. Swap Number Without Temp

// Question: How would you swap two numbers without using a temporary variable?

// Answer: Waste time about thinking it. though u know the answer, act like you are thinking and take your time to answer this one.

function swapNumb(a, b) {
  console.log('before swap: ', 'a: ', a, 'b: ', b);   //  a: 2, b: 3
  b = b - a;  //  3 - 2 = 1
  a = a + b;  //  2 + 1 = 3
  b = a - b;   //  3 - 1 = 2
  console.log('after swap: ', 'a: ', a, 'b: ', b);  //  a: 3, b: 2
}

console.log(swapNumb(2, 3));



// function swapNumb(a, b){
//   console.log("a: " + a + " and b: " + b);
//   a = a ^ b;
//   b = a ^ b;
//   a = a ^ b;
//   console.log("a: " + a + " and b: " + b);
// }
