export function generateParentheses(n: number): string[] {
  const answer: string[] = [];
  const unmatch: string[] = [];

  // close bracket is only available where #open > #close
  function backtrack(usedOpen: number, usedClose: number): void {
    if (usedOpen === n && usedClose === n) {
      answer.push(unmatch.join(""));
      return;
    }

    if (usedOpen < n) {
      unmatch.push("(");
      backtrack(usedOpen + 1, usedClose);
      unmatch.pop();
    }

    if (usedClose < usedOpen) {
      unmatch.push(")");
      backtrack(usedOpen, usedClose + 1);
      unmatch.pop();
    }
  }

  backtrack(0, 0);
  return answer;
}
