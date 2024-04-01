import { expect, test } from "vitest";
import { levelOrder, TreeNode } from "./level-order";

test("return empty if no node", () => {
  expect(levelOrder(null)).toEqual([]);
});

test("return root if only root node", () => {
  expect(levelOrder(new TreeNode(1))).toEqual([[1]]);
});

test("return node vals in the order of levels", () => {
  expect(
    levelOrder(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    ),
  ).toEqual([[3], [9, 20], [15, 7]]);
});
