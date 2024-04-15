import { expect, test } from "vitest";
import { increasingTriplet } from "./increasing-triplet";

test("find in a sorted numbers", () => {
  expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
});

test("find in a decr sorted numbers", () => {
  expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
});

test("find", () => {
  expect(increasingTriplet([10, 1, 20, 0, 7, 5, 30])).toBe(true);
  expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toBe(true);
  expect(increasingTriplet([20, 100, 10, 200])).toBe(true);
  expect(increasingTriplet([5, 1, 6])).toBe(false);
});
