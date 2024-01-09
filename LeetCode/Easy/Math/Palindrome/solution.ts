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

// look at: https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4495203/beats-100-users-c-java-python-javascript-with-explanation/?envType=daily-question&envId=2024-01-03
