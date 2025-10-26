console.log("abcde");

const arr = [-2, -9, -17, -5, -1, -10, -4, -8];

const getNumbersOfNegativeNumbers = (ar) => {
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] < 0) {
      total += 1;
    }
  }
  return total;
};

console.log(getNumbersOfNegativeNumbers(arr));

const getLargestNumber = (ar) => {
  let largest = ar[0];
  for (let i = 1; i < ar.length; i++) {
    if (ar[i] > largest) {
      largest = ar[i];
    }
  }
  return largest;
};

console.log(getLargestNumber(arr));

const getSmallestNumber = (ar) => {
  let largest = ar[0];
  for (let i = 1; i < ar.length; i++) {
    if (ar[i] < largest) {
      largest = ar[i];
    }
  }
  return largest;
};

console.log(getSmallestNumber(arr));

const getSecondlargestNumber = (ar) => {
  let largest = ar[0];
  let secondLargest = ar[0];
  for (let i = 1; i < ar.length; i++) {
    if (ar[i] > largest) {
      secondLargest = largest;
      largest = ar[i];
    } else if (ar[i] > secondLargest && ar[i] != largest) {
      secondLargest = ar[i];
    }
  }
  return secondLargest;
};

console.log(getSecondlargestNumber(arr));
