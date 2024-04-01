import { expect, test } from "vitest";
import { rightSideView, TreeNode } from "./right-side-view";

test("empty if no empty tree", () => {
  expect(rightSideView(null)).toEqual([]);
});

test("root value with only the root node in the tree", () => {
  expect(rightSideView(new TreeNode(1))).toEqual([1]);
});

test("return numbers with balanced tree", () => {
  expect(
    rightSideView(
      new TreeNode(
        0,
        new TreeNode(-1, new TreeNode(-22), new TreeNode(-222)),
        new TreeNode(1, new TreeNode(22), new TreeNode(222)),
      ),
    ),
  ).toEqual([0, 1, 222]);
});

test("return number with inbalanced tree", () => {
  expect(
    rightSideView(
      new TreeNode(
        0,
        new TreeNode(-1, new TreeNode(-22), new TreeNode(-222)),
        new TreeNode(1, new TreeNode(22)),
      ),
    ),
  ).toEqual([0, 1, 22]);

  expect(
    rightSideView(
      new TreeNode(0, new TreeNode(-1, new TreeNode(-22)), new TreeNode(1)),
    ),
  ).toEqual([0, 1, -22]);
});
