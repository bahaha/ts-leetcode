import { expect, test } from "vitest";
import { findMin } from "./find-min";

test("return min value", () => {
  expect(findMin([7, 8, 9, 10, 1, 2, 3, 4, 5, 6])).toBe(1);
  expect(findMin([11, 13, 15, 17, 1, 3, 5, 7, 9])).toBe(1);

  expect(findMin([1, 10, 100, 1000])).toBe(1);
  expect(findMin([1000, 1, 10, 100])).toBe(1);

  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
});

test("return min in duplicate nums", () => {
  expect(findMin([10, 10, 100, 100])).toBe(10);
  expect(findMin([10])).toBe(10);
});
