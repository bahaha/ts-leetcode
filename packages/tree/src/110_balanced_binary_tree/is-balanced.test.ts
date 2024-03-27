import { expect, test } from "vitest";
import { isBalanced, TreeNode } from "./is-balanced";

test("return true if root node is a leaf node", () => {
  expect(isBalanced(new TreeNode(1))).toBe(true);
});

test("return true if the height diff between left and right are lte 1", () => {
  expect(
    isBalanced(
      new TreeNode(
        1,
        new TreeNode(2),
        new TreeNode(2, new TreeNode(3), new TreeNode(3)),
      ),
    ),
  ).toBe(true);
});
test("return false if the tree is not balanced", () => {
  expect(
    isBalanced(
      new TreeNode(
        1,
        new TreeNode(2),
        new TreeNode(
          2,
          new TreeNode(3, new TreeNode(4), new TreeNode(4)),
          new TreeNode(3),
        ),
      ),
    ),
  ).toBe(false);
});
