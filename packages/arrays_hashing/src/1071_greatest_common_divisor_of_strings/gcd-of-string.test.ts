import { expect, test } from "vitest";
import { gcdOfStrings } from "./gcd-of-string";

test("str1 is longer than str2", () => {
  expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
});

test("str2 is longer than str1", () => {
  expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
});

test("no common divisor", () => {
  expect(gcdOfStrings("LEET", "CODE")).toBe("");
});

test("one of str is empty", () => {
  expect(gcdOfStrings("", "ABC")).toBe("");
  expect(gcdOfStrings("ABC", "")).toBe("");
});

test("ABABAB ABAB len: 8, 4, possible len(gcd)= 4, 2, 1", () => {
  expect(gcdOfStrings("ABABABAB", "ABAB")).toBe("ABAB");
});
