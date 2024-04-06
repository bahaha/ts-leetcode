import { expect, test } from "vitest";
import { subsets } from "./subsets";

test("return all non duplicate subsets", () => {
  const ans = subsets([1, 2, 3]);
  expect(ans.length).toBe(Math.pow(2, 3));
  expect(ans[0]).toEqual([1, 2, 3]);
  expect(ans[1]).toEqual([1, 2]);
  expect(ans[2]).toEqual([1, 3]);
  expect(ans[3]).toEqual([1]);
  expect(ans[4]).toEqual([2, 3]);
  expect(ans[5]).toEqual([2]);
  expect(ans[6]).toEqual([3]);
  expect(ans[7]).toEqual([]);
});
