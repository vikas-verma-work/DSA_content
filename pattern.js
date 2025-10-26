// square

const printSquare = (n) => {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
};

console.log(printSquare(4));

const printLeftTriangle = (n) => {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
};

console.log(printLeftTriangle(4));

const printLeftTriangleNumber = (n) => {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += j + 1;
    }
    pattern += "\n";
  }
  return pattern;
};

console.log(printLeftTriangleNumber(4));

const printLeftTriangleNumber2 = (n) => {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += i + 1;
    }
    pattern += "\n";
  }
  return pattern;
};

console.log(printLeftTriangleNumber2(4));

const printInvertedLeftTriangleNumber = (n) => {
  let pattern = "";
  for (let i = n; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      pattern += j + 1;
    }
    pattern += "\n";
  }
  return pattern;
};

console.log(printInvertedLeftTriangleNumber(4));

const printRightTriangle = (n) => {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - (i + 1); j++) {
      pattern += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
};

console.log(printRightTriangle(4));

const binaryLeftTrinage = (n) => {
  let pattern = "";
  let k = "1";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += k;
      k = k === "1" ? "0" : "1";
    }
    pattern += "\n";
  }
  return pattern;
};

console.log(binaryLeftTrinage(4));

const calculateCountOfDigits = (n) => {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

console.log(calculateCountOfDigits(5465));
