export function letterCombinations(digits: string): string[] {
  const letterTable = new Map<string, string>([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  const ans: string[] = [];

  function walk(i: number, str: string) {
    if (str.length === digits.length) {
      ans.push(str);
      return;
    }

    for (const ch of letterTable.get(digits[i])!) {
      walk(i + 1, str + ch);
    }
  }

  // [2][3]
  // decision tree:
  // -
  //  - a
  //    - d
  //    - e
  //    - f
  //  - b
  //    - d
  //    - e
  //    - f
  //  - c
  //    - d
  //    - e
  //    - f

  if (digits) {
    walk(0, "");
  }

  return ans;
}
