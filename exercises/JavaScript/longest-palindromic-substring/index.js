/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestPalindromeFound = "";
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.substring(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    const evenPalindromeFound = expandAroundCenter(i, i + 1);

    const oddPalindromeFound = expandAroundCenter(i, i);

    if (evenPalindromeFound.length > longestPalindromeFound.length) {
      longestPalindromeFound = evenPalindromeFound;
    }
    if (oddPalindromeFound.length > longestPalindromeFound.length) {
      longestPalindromeFound = oddPalindromeFound;
    }
  }

  return longestPalindromeFound;
};

console.log(longestPalindrome("ac"));             // Output: a
console.log(longestPalindrome("acwefwefwewef"));  // Output: wew
console.log(longestPalindrome("awefeefeefffc"));  // Output: feefeef
console.log(longestPalindrome("ajjkkkjsssbbfc")); // Output: jkkkj
console.log(longestPalindrome("acakkaca"));       // Output: acakkaca

