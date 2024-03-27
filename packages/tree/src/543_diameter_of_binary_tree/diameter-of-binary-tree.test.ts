import { expect, test } from "vitest";
import { diameterOfBinaryTree, TreeNode } from "./diameter-of-binary-tree";

test("return 0 if the root is a leaf", () => {
  expect(diameterOfBinaryTree(new TreeNode(1))).toBe(0);
});

test("return 2*tree height for a balance tree", () => {
  expect(
    diameterOfBinaryTree(new TreeNode(1, new TreeNode(2), new TreeNode(2))),
  ).toBe(2);
});

test("return tree height for a skew tree", () => {
  expect(
    diameterOfBinaryTree(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5)))),
      ),
    ),
  ).toBe(4);

  expect(
    diameterOfBinaryTree(
      new TreeNode(
        1,
        null,
        new TreeNode(
          2,
          null,
          new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5))),
        ),
      ),
    ),
  ).toBe(4);
});

test("return longest path as diameter", () => {
  expect(
    diameterOfBinaryTree(
      new TreeNode(
        1,
        new TreeNode(
          2,
          new TreeNode(3, new TreeNode(4), new TreeNode(4)),
          new TreeNode(
            3,
            new TreeNode(4),
            new TreeNode(4, null, new TreeNode(5)),
          ),
        ),
      ),
    ),
  ).toBe(5);
});
