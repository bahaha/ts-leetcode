import { test, expect } from "vitest";
import { letterCombinations } from "./letter-combinations";

test("return combinations", () => {
  const ans = letterCombinations("23");
  expect(ans.length).toBe(Math.pow(3, 2));
  expect(ans).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
});

test("return empty if no digit", () => {
  expect(letterCombinations("")).toEqual([]);
});
