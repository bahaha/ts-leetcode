import { expect, test } from "vitest";
import { largestRectangleArea } from "./largest-rectangle-area";

test("return max area in increasing numbers", () => {
  // 1 * 5 = 5
  // 2 * 4 = 8
  // 3 * 3 = 9
  // 4 * 2 = 8
  // 5 * 1 = 5
  expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
});

test("return max area in all decr numbers", () => {
  // 5 * 1 = 5
  // 4 * 2 = 8
  // 3 * 3 = 9
  // 4 * 2 = 8
  // 5 * 1 = 5
  expect(largestRectangleArea([5, 4, 3, 2, 1])).toBe(9);
});

test("return max area for aribrity numbers", () => {
  // 2 * 1 = 2
  // 6 * (4 - 3) = 6
  // 5 * (4 - 2) = 10
  // 3 * (6 - 5) = 3
  // 2 * (6 - 2) = 8
  // 1 * 6 = 6
  expect(largestRectangleArea([2, 1, 5, 6, 2, 4])).toBe(10);
});
