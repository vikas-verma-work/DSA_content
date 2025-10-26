let str = "   fly me   to   the moon  ";
let str1 = "Hello World";
let str2 = "luffy is still joyboy";
let str3 = "aa";

const countLastWordLength = (s) => {
  let c = 0;
  let secondTime = false;
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(i, s[i]);
    if (s[i] === " ") {
      if (!secondTime) {
        continue;
      } else {
        return c;
      }
    } else {
      secondTime = true;
      c++;
    }
  }
  return c;
};

console.log(countLastWordLength(str));
console.log(countLastWordLength(str1));
console.log(countLastWordLength(str2));
console.log(countLastWordLength(str3));
