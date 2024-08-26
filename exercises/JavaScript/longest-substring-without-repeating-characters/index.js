/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (str) {
  let start = 0;
  let maxLength = 0;
  let charIndexMap = new Map();

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
      start = charIndexMap.get(currentChar) + 1;
    }

    charIndexMap.set(currentChar, end);

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("dvkkdfv")); // Output: 4
console.log(lengthOfLongestSubstring("dv")); // Output: 2
console.log(lengthOfLongestSubstring("erfkea")); // Output: 5
console.log(lengthOfLongestSubstring("dddjuikfseqpkkkqwwef")); // Output: 10
