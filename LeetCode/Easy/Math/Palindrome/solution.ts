// description: https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
  // convert to string
  let string = x.toString();
  // convert to array and reverse
  let reverse = string.split("").reverse();
  // convert back to string
  let reversedString = reverse.join("");

  return +reversedString == x;
}
