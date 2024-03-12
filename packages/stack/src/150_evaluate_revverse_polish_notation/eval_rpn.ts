type Operate = (a: number, b: number) => number;

/**
 * You are given an array of strings tokens that represents an arithemetic expression
 * in a Reverse Polish Notaion.
 *
 * Evaluate the expression. Return an integer that represents the value of the expression.
 *
 * Note that:
 * - The valid operators are +, -, *, /
 * - Each operand may be an integer or another expression
 * - The division between two integers always truncates toward zero.
 * - There will not be any division by zero.
 * - The input represents a valid arithemetic expression in a revserse polish notation.
 * - The answer and all the intermediate calculations can be represented in a 32-bit integer.
 */
export function evalRPN(tokens: string[]): number {
  const nums: number[] = [];
  const operators: Record<"+" | "-" | "*" | "/", Operate> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => ~~(a / b),
  };

  for (const token of tokens) {
    if (token in operators) {
      const b = nums.pop()!;
      const a = nums.pop()!;
      nums.push(operators[token as keyof typeof operators](a, b));
    } else {
      nums.push(Number(token));
    }
  }

  return nums.pop()!;
}
