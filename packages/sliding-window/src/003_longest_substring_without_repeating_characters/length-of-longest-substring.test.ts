import { expect, test } from "vitest";
import { lengthOfLongestSubstring } from "./length-of-longest-substring";

test("return max len with duplicate at the left pointer character", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("return max len with duplicate between left, right pointers", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
});
