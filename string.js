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

// console.log(countLastWordLength(str));
// console.log(countLastWordLength(str1));
// console.log(countLastWordLength(str2));
// console.log(countLastWordLength(str3));

let words = ["leet", "code"]; //x = "e"
let words1 = ["abc", "bcd", "aaaa", "cbc"]; //x = "a"
let words2 = ["abc", "bcd", "aaaa", "cbc"]; //x = "z"

const findWordsContaining = (w, x) => {
  let output = [];
  for (let i = 0; i < w.length; i++) {
    // console.log(w[i]);
    for (let j = 0; j < w[i].length; j++) {
      if (w[i][j] === x) {
        // console.log(w[i][j], x);
        output.push(i);
        break;
      }
    }
  }
  return output;
};

console.log(findWordsContaining(words, "e"));
console.log(findWordsContaining(words1, "a"));
console.log(findWordsContaining(words2, "z"));
