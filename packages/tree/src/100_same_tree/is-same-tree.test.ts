import { expect, test } from "vitest";
import { isSameTree, TreeNode } from "./is-same-tree";

test("true for leaf only node with the same value", () => {
  expect(isSameTree(new TreeNode(1), new TreeNode(1))).toBe(true);
});

test("false for node with different value", () => {
  expect(isSameTree(new TreeNode(2), new TreeNode(1))).toBe(false);

  expect(
    isSameTree(
      new TreeNode(1, new TreeNode(2), new TreeNode(1)),
      new TreeNode(1, new TreeNode(1), new TreeNode(2)),
    ),
  ).toBe(false);
});

test("false for the same value but with different shape", () => {
  expect(
    isSameTree(
      new TreeNode(1, new TreeNode(2)),
      new TreeNode(1, null, new TreeNode(2)),
    ),
  ).toBe(false);
});

test("true for the same tree", () => {
  expect(
    isSameTree(
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    ),
  ).toBe(true);
});
