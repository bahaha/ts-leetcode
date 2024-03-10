import { expect, test } from "vitest";
import { isPalindrome, is_palindrome } from "./is-palindrome";

test("return true if the string is palindrome", () => {
  expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
  expect(is_palindrome("amanaplanacanalpanama")).toBe(true);
});

test("return false if the string is not palindrome", () => {
  expect(isPalindrome("abcdefgedcba")).toBe(false);
  expect(is_palindrome("abcdefgedcba")).toBe(false);
});

test("check palindrome only for alphanumeric characters", () => {
  expect(isPalindrome("a man, a plan, a canal: panama")).toBe(true);
  expect(is_palindrome("a man, a plan, a canal: panama")).toBe(true);
});

test("check case-insentive palindrome", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(is_palindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("retun false if non alphanumeric exists", () => {
  expect(isPalindrome(".,")).toBe(true);
  expect(isPalindrome("a.,")).toBe(true);
  expect(is_palindrome(".,")).toBe(true);
  expect(is_palindrome("a.,")).toBe(true);
});
