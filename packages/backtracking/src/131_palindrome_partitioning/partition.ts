function isPalindrome(s: string, left: number, right: number): boolean {
  if (left < 0 || right >= s.length) {
    return false;
  }

  if (left === right) {
    return true;
  }

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

export function partition(s: string): string[][] {
  const ans: string[][] = [];

  const palindroms: string[] = [];
  function walk(i: number) {
    if (i >= s.length) {
      ans.push([...palindroms]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        // take the character
        palindroms.push(s.slice(i, j + 1));
        walk(j + 1);
        // reset
        palindroms.pop();
      }
    }
  }

  walk(0);
  return ans;
}
