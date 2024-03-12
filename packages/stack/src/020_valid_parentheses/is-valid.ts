/**
 * Given a string s containing just the characters (,  ), {,  }, [, ],
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 */
export function isValid(s: string): boolean {
  const unmatchBrackets = [];
  const brackets = { "(": ")", "[": "]", "{": "}" };
  for (const bracket of s) {
    if (bracket in brackets) {
      unmatchBrackets.push(brackets[bracket as keyof typeof brackets]);
    } else {
      const expectedCloseBracket = unmatchBrackets.pop();
      if (expectedCloseBracket !== bracket) {
        return false;
      }
    }
  }
  return unmatchBrackets.length === 0;
}
