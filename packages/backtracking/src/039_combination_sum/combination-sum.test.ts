import { expect, test } from "vitest";
import { combinationSum } from "./combination-sum";

test("return non-duplicate all sum combinations", () => {
  let ans = combinationSum([2, 3, 6, 7], 7);

  expect(ans.length).toBe(2);
  expect(ans[0]).toEqual([2, 2, 3]);
  expect(ans[1]).toEqual([7]);

  ans = combinationSum([2, 3, 5], 8);
  expect(ans.length).toBe(3);
  expect(ans[0]).toEqual([2, 2, 2, 2]);
  expect(ans[1]).toEqual([2, 3, 3]);
  expect(ans[2]).toEqual([3, 5]);
});
