import { expect, test } from "vitest";
import { generateParentheses } from "./generate-parentheses";

test("return 1 pair if n = 1", () => {
  expect(generateParentheses(1)).toEqual(["()"]);
});

test("return all possible pairs", () => {
  expect(generateParentheses(3)).toEqual(
    expect.arrayContaining(["((()))", "(()())", "(())()", "()(())", "()()()"]),
  );
});
