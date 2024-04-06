import { expect, test } from "vitest";
import { subsetsWithDup } from "./subset-with-dup";

test("return subsets", () => {
  const ans = subsetsWithDup([2, 1, 2, 3]);
  expect(ans.length).toBe(12);

  expect(ans[0]).toEqual([1, 2, 2, 3]);
  expect(ans[1]).toEqual([1, 2, 2]);
  expect(ans[2]).toEqual([1, 2, 3]);
  expect(ans[3]).toEqual([1, 2]);
  expect(ans[4]).toEqual([1, 3]);
  expect(ans[5]).toEqual([1]);

  expect(ans[6]).toEqual([2, 2, 3]);
  expect(ans[7]).toEqual([2, 2]);
  expect(ans[8]).toEqual([2, 3]);
  expect(ans[9]).toEqual([2]);
  expect(ans[10]).toEqual([3]);
  expect(ans[11]).toEqual([]);
});
