

//Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
      return a;
  } else if (a < b) {
      return b;
  } else {
      console.log(a + " = " + b); } }

console.log(maxOfTwoNumbers(5,5));

var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

//Finding the longest word
function findLongestWord(array) {
  var  norm = 0;
   var longest;

   for (var i = 0; i < array.length; i++) {
    if (array[i].length > norm) {
      norm = array[i].length;
      longest = array[i];
      }
   }
   return longest;
}

console.log(findLongestWord(words));

//calculating a sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

console.log(sumArray(numbers));