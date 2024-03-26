import { expect, test } from "vitest";
import { invertTree, TreeNode } from "./invert-tree";

test("invert binary tree, swap left with right", () => {
  const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  const inverted = invertTree(root);
  expect(inverted!.val).toBe(2);
  expect(inverted!.left!.val).toBe(3);
  expect(inverted!.right!.val).toBe(1);
});

test("invert deep level tree", () => {
  const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9)),
  );
  const inverted = invertTree(root);
  expect(inverted!.val).toBe(4);
  expect(inverted!.left!.val).toBe(7);
  expect(inverted!.left!.left!.val).toBe(9);
  expect(inverted!.left!.right!.val).toBe(6);
  expect(inverted!.right!.val).toBe(2);
  expect(inverted!.right!.left!.val).toBe(3);
  expect(inverted!.right!.right!.val).toBe(1);
});
