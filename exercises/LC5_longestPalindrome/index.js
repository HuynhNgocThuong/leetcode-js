//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

/**
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function longestPalindrome(s) {
  let startIndex = 0;
  let maxLength = 1;

  function expandArroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalLength = right - left + 1;
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        startIndex = left;
        console.log(maxLength);
        console.log(startIndex);
        console.log("----------------");
      }
      left -= 1;
      right += 1;
    }
  }

  for (let index = 0; index < s.length; index++) {
    expandArroundMiddle(index - 1, index + 1);
    expandArroundMiddle(index, index + 1);
  }
  return s.slice(startIndex, startIndex + maxLength);
}

module.exports = longestPalindrome;
