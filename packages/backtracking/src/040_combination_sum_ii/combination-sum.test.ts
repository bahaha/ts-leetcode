import { test, expect } from "vitest";
import { combinationSum } from "./combination-sum";

test("return non duplicate combinations", () => {
  let ans = combinationSum([10, 1, 2, 7, 6, 1, 5], 8);
  expect(ans.length).toBe(4);

  expect(ans[0]).toEqual([1, 1, 6]);
  expect(ans[1]).toEqual([1, 2, 5]);
  expect(ans[2]).toEqual([1, 7]);
  expect(ans[3]).toEqual([2, 6]);

  ans = combinationSum([2, 5, 2, 1, 2], 5);
  expect(ans.length).toBe(2);
  expect(ans[0]).toEqual([1, 2, 2]);
  expect(ans[1]).toEqual([5]);
});
