import { expect, test } from "vitest";
import { maxArea } from "./max-area";

test("return max area", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(maxArea([1, 1])).toBe(1);
});
