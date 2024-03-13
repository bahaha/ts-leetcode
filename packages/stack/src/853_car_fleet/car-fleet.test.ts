import { expect, test } from "vitest";
import { carFleet } from "./car-fleet";

test("return 1 if only 1 car", () => {
  expect(carFleet(12, [3], [3])).toBe(1);
});

test("return 1 if all car are reach the target at the same time", () => {
  expect(carFleet(12, [0, 2, 4], [4, 2, 1])).toBe(1);
});

test("return the car fleet", () => {
  expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
});
