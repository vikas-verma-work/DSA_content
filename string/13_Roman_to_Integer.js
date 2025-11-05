/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symb = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let output = 0;
  let preValue = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let currentValue = symb[s[i]];

    if (currentValue < preValue) {
      output -= currentValue;
    } else {
      output += currentValue;
    }

    preValue = currentValue;
  }
  return output;
};
