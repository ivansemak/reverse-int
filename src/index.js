module.exports = function reverse (n) {
  let digit = Math.abs(n%10);  
  let digitFirst = n/10;
  let a = Math.trunc(digitFirst);
  let digitSecond = Math.abs(a%10);
  let digitThird = a/10;
  let b =Math.abs(Math.trunc(digitThird));
  let arr = new Array();
  arr[0]=digit;
  arr[1]=digitSecond;
  arr[2]=b;
  var joinArray = arr.join("");
  return joinArray;  
  
}
