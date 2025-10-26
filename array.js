const reverseString = (s) => {
  let l = s.length;
  let hl = Math.floor(l / 2);
  for (let i = 0; i < hl; i++) {
    [s[i], s[l - 1 - i]] = [s[l - 1 - i], s[i]];
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o", "s"]));

const moveZeroEnd = (s) => {
  let p = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 0) {
      s[p] = s[i];
      p++;
    }
  }
  if (p == 0) return s;
  for (let j = p; j < s.length; j++) {
    console.log("run");
    s[j] = 0;
  }

  return s;
};

console.log(moveZeroEnd([0, 1, 0, 3, 12]));

console.log(4^0)
console.log(4^1)
console.log(4^5)
console.log(4^4)

console.log(0^4)
console.log(1^4)
console.log(5^4)
