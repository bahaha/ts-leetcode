import { expect, test } from "vitest";
import { reverseVowels, reverseVowels2 } from "./reverse-vowels";

test("reverse vowels", () => {
  expect(reverseVowels("hello")).toBe("holle");
  expect(reverseVowels2("hello")).toBe("holle");

  expect(reverseVowels("leetcode")).toBe("leotcede");
  expect(reverseVowels2("leetcode")).toBe("leotcede");
});

test("reverse uppercase vowels", () => {
  expect(reverseVowels("hEllo")).toBe("hollE");
  expect(reverseVowels2("hEllo")).toBe("hollE");

  expect(reverseVowels("LEetCodE")).toBe("LEotCedE");
  expect(reverseVowels2("LEetCodE")).toBe("LEotCedE");
});

test("no vowels", () => {
  expect(reverseVowels(" ")).toBe(" ");
  expect(reverseVowels2(" ")).toBe(" ");
});

test("only one vowel", () => {
  expect(reverseVowels("a.")).toBe("a.");
  expect(reverseVowels2("a.")).toBe("a.");
});
