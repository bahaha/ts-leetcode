import { expect, test } from "vitest";
import { MinStack } from "./min-stack";

test("return expected value within valid operations", () => {
  const stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);
  expect(stack.getMin()).toBe(-3);
  stack.pop();
  expect(stack.getMin()).toBe(-2);
  expect(stack.top()).toBe(0);
});
