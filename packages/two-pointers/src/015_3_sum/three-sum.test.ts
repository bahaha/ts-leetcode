import { expect, test } from "vitest";
import { threeSum } from "./three-sum";

test("return candidates indicies", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);

  expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toEqual([
    [-4, 0, 4],
    [-4, 1, 3],
    [-3, -1, 4],
    [-3, 0, 3],
    [-3, 1, 2],
    [-2, -1, 3],
    [-2, 0, 2],
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test("return empty if no match", () => {
  expect(threeSum([-1, -1, -1, 0])).toEqual([]);
});
