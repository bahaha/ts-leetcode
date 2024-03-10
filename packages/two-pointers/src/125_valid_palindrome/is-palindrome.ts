/**
 * A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string `s`, return `true` *if it is a palindrome, or `false` otherwise.*
 */
export function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!isAlplanumeric(s[left])) {
      left++;
      if (left > right) return true;
    }
    while (!isAlplanumeric(s[right])) {
      right--;
      if (right < left) return false;
    }

    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

export function is_palindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

const alphaBegin = "a".charCodeAt(0);
const alphaEnd = "z".charCodeAt(0);
const numericBegin = "0".charCodeAt(0);
const numericEnd = "9".charCodeAt(0);

function isAlplanumeric(s: string) {
  const code = s.charCodeAt(0);
  return (
    (code >= alphaBegin && code <= alphaEnd) ||
    (code >= numericBegin && code <= numericEnd)
  );
}
