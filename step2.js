//sum Zero = O(1)
function sumZero(numArr) {
  if (numArr === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(sumZero(0));

//Unique Characters = O(n)
function uniqueChar(str) {}

//Pagram Sentence = O(n)
function isPagramSentence(str) {}

//Longest Word = O(n)
function longestWord(str) {
  let str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}
