import { expect, test } from "vitest";
import { partition } from "./partition";

test("return every palindrome substring of the partition", () => {
  const ans = partition("aab");
  expect(ans.length).toBe(2);

  expect(ans[0]).toEqual("aab".split(""));
  expect(ans[1]).toEqual(["aa", "b"]);
});
