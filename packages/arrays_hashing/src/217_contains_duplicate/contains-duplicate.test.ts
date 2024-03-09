import { expect, test } from "vitest";
import { containsDuplicate } from "./contains-duplicate";

test("return `true` if the array contains any duplicates", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test("return `false` if the numbers of the array are all distinct", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});
