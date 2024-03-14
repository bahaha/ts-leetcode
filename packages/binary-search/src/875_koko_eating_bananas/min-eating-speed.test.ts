import { expect, test } from "vitest";
import { minEatingSpeed } from "./min-eating-speed";

test("return min eating speed to eat all bananas", () => {
  expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
  expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
  expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
});

test("return value if there is one pile", () => {
  expect(minEatingSpeed([31288470], 31288469)).toBe(2);
});
