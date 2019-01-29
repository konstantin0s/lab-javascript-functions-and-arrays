

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

//calculate the average
var numbers1 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / 2;
}

console.log(averageNumbers(numbers1));

//Array of strings
var words1 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(array) {
  var  norm = 0;
  for (var i = 0; i < array.length; i++) {
   if (array[i].length) {
     norm += array[i].length;
     }
  }
  return norm / 2;
}

console.log(averageWordLength(words1));

//Unique Arrays
var words2 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  // var unique = "";
  return array.filter((value, i, self) => 
  self.indexOf(value) == i);
}

console.log(uniquifyArray(words2));

//Finding Elements
var words3 = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(arr, array){
  var found = false;

  for (var i = 0; i < arr.length; i++){
    if (arr[i] === array) {
      found = true;
      break;
    }
  }
    return found;
}

var doesExist = doesWordExist(words3, "eating");
console.log(doesExist);

//How many times?
var words4 = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"];

function howManyTimes(array, what) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === what) {
          count++;
      }
  }
  return count;
}

var howMany = howManyTimes(words4, "matter");
console.log(howMany);