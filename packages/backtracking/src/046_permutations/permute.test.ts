import { expect, test } from "vitest";
import { permute } from "./permute";

test("return non duplicate permutations", () => {
  const ans = permute([1, 2, 3]);
  expect(ans.length).toBe(3 * 2);

  expect(ans[0]).toEqual([3, 2, 1]);
  expect(ans[1]).toEqual([2, 3, 1]);
  expect(ans[2]).toEqual([1, 3, 2]);
  expect(ans[3]).toEqual([3, 1, 2]);
  expect(ans[4]).toEqual([2, 1, 3]);
  expect(ans[5]).toEqual([1, 2, 3]);
});
