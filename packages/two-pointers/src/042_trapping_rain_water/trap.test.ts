import { expect, test } from "vitest";
import { trap } from "./trap";

test("return trapping water area", () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);

  expect(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6])).toBe(23);
});
