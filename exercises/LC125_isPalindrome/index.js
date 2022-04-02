/**
 * Time complexity: O(N)
 * Space complexity: O(1) Left and Right pointers take up constant space
 */
function isPalindrome(s) {
  //Sanitize the input string
  s = s.toLowerCase().replace(/[\W_]/g, "");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
