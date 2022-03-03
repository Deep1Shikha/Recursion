console.log('Recursion Started');

//Print name 5 times
function f1(i, n) {
  if (i > 5) return;
  console.log(i);
  f1(i + 1, n);
}

function main() {
  f1(1, 5);
}

//main();

//linearly from n to 1

function f2(i, n) {
  if (i < 1) return;
  console.log(i);
  f2(i - 1, n);
}

function main2() {
  f2(5, 5);
}

//main2()

// print linearly from 1 to N Backtrack
function f3(i, n) {
  if (i < 1) return;
  f3(i - 1, n);
  console.log(i);
}

function main3() {
  f3(5, 5);
}

//main3();

//print linearly from N to 1 Backtrack
function f4(i, n) {
  if (i > n) return;
  f4(i + 1, n);
  console.log(i);
}

function main4() {
  // f4(1, 5);
  recursiveSumParameter(5);
  let val = recursiveSumFunctional(5);
  console.log({ val });
  let fact = factorial(3);
  console.log({ fact });
  //num = [1, 2, 3, 4,5];
  num = ['apple', 'mango', 'banana', 'guava', 'cherry'];
  //reverse2pointer(0, num.length - 1);
  reverse1var(0);
  console.log(num);
  food = 'moam';
  let foodPalindrome = strPalindrome(0);
  console.log({ foodPalindrome });
}

//main4();

//Sum of first N numbers

function recursiveSumParameter(i, sum = 0) {
  if (i < 1) return sum;
  recursiveSumParameter(i - 1, sum + i);
}

//================= Functional Code ===========
function recursiveSumFunctional(i) {
  if (i == 0) return 0;
  return i + recursiveSumFunctional(i - 1);
}

//Factorial of n
function factorial(n) {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

//reverse array using recursion
function reverse2pointer(l, r) {
  if (l > r) return;
  [num[l], num[r]] = [num[r], num[l]];
  return reverse2pointer(l + 1, r - 1);
}

function reverse1var(i) {
  if (i > num.length / 2) return;
  [num[i], num[num.length - i - 1]] = [num[num.length - i - 1], num[i]];
  return reverse1var(i + 1);
}

function strPalindrome(index) {
  if (index > food.length / 2) return true;
  if (food[index] !== food[food.length - index - 1]) return false;

  return strPalindrome(index + 1);
}

//Lecture 3 : Multiple Recursion Calls
//find Nth fibonacci term 0 1 1 2 3 5 8 13 21
let resultArray = [];
let subArray = [8, 7, 9, 11, 4, 6];
function nFibonacci(n) {
  if (n <= 1) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

function l3() {
  console.log(nFibonacci(8));
  subsequence(0, resultArray);
}

//l3();

//print the subsequences

function subsequence(index, resultArray) {
  if (index >= subArray.length) {
    console.log(resultArray);
    return;
  }

  resultArray.push(subArray[index]);
  subsequence(index + 1, resultArray);
  resultArray.pop(subArray[index]);
  subsequence(index + 1, resultArray);
}

//Lecture 7
let sumToCompare = 15;
let oneSumInput = [8, 7, 9, 11, 4, 6];

function Lecture7() {
  oneSubsequenceSum(0, [], 0);
  console.log(countTotalSubsequenceSum(0, 0));
  printAllSubsequenceOfSum(0, [], 0);
}
//Lecture7();

function printAllSubsequenceOfSum(index, resultArray, localSum) {
  if (index === oneSumInput.length) {
    if (localSum == sumToCompare) {
      console.log(resultArray);
      return;
    }
    return;
  }
  localSum += oneSumInput[index];
  resultArray.push(oneSumInput[index]);
  printAllSubsequenceOfSum(index + 1, resultArray, localSum);

  localSum -= oneSumInput[index];
  resultArray.pop();
  printAllSubsequenceOfSum(index + 1, resultArray, localSum);
}

function oneSubsequenceSum(index, resultArray, localSum) {
  if (index == oneSumInput.length) {
    if (localSum == sumToCompare) {
      console.log(resultArray);
      return true;
    } else return false;
  }

  localSum += oneSumInput[index];
  resultArray.push(oneSumInput[index]);
  if (oneSubsequenceSum(index + 1, resultArray, localSum)) return true;

  localSum -= oneSumInput[index];
  resultArray.pop();

  if (oneSubsequenceSum(index + 1, resultArray, localSum)) return true;

  return false;
}

function countTotalSubsequenceSum(index, localSum) {
  if (index === oneSumInput.length) {
    if (localSum == sumToCompare) return 1;
    else return 0;
  }
  localSum += oneSumInput[index];
  let l = countTotalSubsequenceSum(index + 1, localSum);
  localSum -= oneSumInput[index];
  let r = countTotalSubsequenceSum(index + 1, localSum);

  return l + r;
}

//Lecture 8
let comboSumArray = [2, 3, 6, 7];
let targetForCombo = 9;
let combo1 = [];

function Lecture8() {
  comboSum1(0, [], targetForCombo, combo1);
  return combo1;
}

console.log(Lecture8());

//[[2,2,2,3],[2,7],[3,3,3],[3,6]]

function comboSum1(index, resultArray, targetToReach, ans) {
  if (index >= comboSumArray.length) {
    if (targetToReach == 0) {
      // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
      ans.push(resultArray.slice());
    }
    return;
  }

  if (comboSumArray[index] <= targetToReach) {
    resultArray.push(comboSumArray[index]);
    comboSum1(index, resultArray, targetToReach - comboSumArray[index], ans);
    resultArray.pop();
  }

  comboSum1(index + 1, resultArray, targetToReach, ans);
}
