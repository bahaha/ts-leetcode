import { expect, test } from "vitest";
import { evalRPN } from "./eval_rpn";

test("follow the right order to calculate", () => {
  expect(evalRPN(["2", "1", "-"])).toBe(1);
  expect(evalRPN(["10", "2", "/"])).toBe(5);
});

test("return result with valid operators", () => {
  expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  expect(
    evalRPN([
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ]),
  ).toBe(22);
});
