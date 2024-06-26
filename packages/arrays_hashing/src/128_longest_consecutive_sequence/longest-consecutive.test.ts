import { expect, test } from "vitest";
import { longestConsecutive } from "./longest-consecutive";

test("return longest consecutive length from unsorted array", () => {
  expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
});
