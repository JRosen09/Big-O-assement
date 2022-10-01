//sum Zero = O(1)
// function sumZero(numArr) {
//   if (numArr === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(sumZero(0));
//2nd attempt
// const sumZero = (arr) => {
//     let zero = false

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] = arr[j] === 0) {
//                 zero = true;
//             }
//         }
//     }
//     return zero;
// }
// console.log(sumZero([1]));
// console.log(sumZero([1,2,3]));
// console.log(sumZero([1,2,3,-1]));

//O(n^2), space O(n)

//Unique Characters = O(n) space = O(n)
// function uniqueChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// //console.log(uniqueChar('monday'))
// //console.log(uniqueChar('Mooday'))




// //Pagram Sentence = O(n) space = o(n)
// const isPagramSentence = (str) => {
//   str = str.toLowerCase().split("");

//   const alphabet = {
//     a: 0,
//     b: 0,
//     c: 0,
//     d: 0,
//     e: 0,
//     f: 0,
//     g: 0,
//     h: 0,
//     i: 0,
//     j: 0,
//     k: 0,
//     l: 0,
//     m: 0,
//     n: 0,
//     o: 0,
//     p: 0,
//     q: 0,
//     r: 0,
//     s: 0,
//     t: 0,
//     u: 0,
//     v: 0,
//     w: 0,
//     x: 0,
//     y: 0,
//     z: 0,
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (alphabet[str[i]] === 0) {
//       alphabet[str[i]] += 1;
//     }
//   }

//   for (let key in alphabet) {
//     if (alphabet[key] === 0) {
//       return false;
//     }
//   }

//   return true;
// };

//Longest Word = O(n) , space = o(n)
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
console.log(longestWord(['hi', 'hello', 'thankyou'])

//const findLongestWord = (arr) => {
//     let longestLength = 0

//     arr.forEach((word) => {
//         if(word.length > longestLength){
//             longestLength = word.length
//         }
//     })

//     return longestLength

// }
//O(n) space = O(n)
