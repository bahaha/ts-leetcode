import { expect, test } from "vitest";
import { isAnagram } from "./is_anagram";

test("return true if two strings has exactly the same amount of each letters", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});

test("return false if two strings are composed with different letters", () => {
  expect(isAnagram("car", "cat")).toBe(false);
});

test("return false if input strings has different digits of letters", () => {
  expect(isAnagram("a", "ab")).toBe(false);
});
