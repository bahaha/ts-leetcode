import { expect, test } from "vitest";
import { checkInclusion } from "./check-inclusion";
// ab, eidbaooo
//

test("return true if s2 contains permutaiton of s1", () => {
  expect(checkInclusion("ab", "eidbaooo")).toBe(true);
  expect(checkInclusion("adc", "dcda")).toBe(true);
});

test("return false if s2 not contains permutaiton of s1", () => {
  expect(checkInclusion("ab", "eidboaooo")).toBe(false);
});
