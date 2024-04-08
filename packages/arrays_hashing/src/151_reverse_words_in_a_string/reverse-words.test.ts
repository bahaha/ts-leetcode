import { expect, test } from "vitest";
import { reverseWords } from "./reverse-words";

test("non extra space", () => {
  expect(reverseWords("the sky is blue")).toBe("blue is sky the");
});

test("with extra spaces", () => {
  expect(reverseWords("  hello world  ")).toBe("world hello");
  expect(reverseWords("A good    EXample")).toBe("EXample good A");
});
