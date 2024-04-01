import { expect, test } from "vitest";
import { isSubtree, TreeNode } from "./is-subtree";

test("return true if the tree is the same", () => {
  expect(
    isSubtree(
      new TreeNode(1, new TreeNode(2)),
      new TreeNode(1, new TreeNode(2)),
    ),
  ).toBe(true);
});

test("return true if subtree exists", () => {
  expect(
    isSubtree(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3), new TreeNode(3)),
        new TreeNode(2),
      ),
      new TreeNode(2, new TreeNode(3), new TreeNode(3)),
    ),
  ).toBe(true);

  expect(
    isSubtree(
      new TreeNode(
        1,
        new TreeNode(2),
        new TreeNode(2, new TreeNode(3), new TreeNode(3)),
      ),
      new TreeNode(2, new TreeNode(3), new TreeNode(3)),
    ),
  ).toBe(true);
});

test("return true if the subtree is a subtree of a non-root node", () => {
  expect(
    isSubtree(
      new TreeNode(
        1,
        new TreeNode(2),
        new TreeNode(
          2,
          new TreeNode(3),
          new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        ),
      ),
      new TreeNode(3, new TreeNode(4), new TreeNode(4)),
    ),
  ).toBe(true);
});

test("return false if the tree structure is not the same", () => {
  expect(
    isSubtree(
      new TreeNode(
        1,
        new TreeNode(2),
        new TreeNode(2, new TreeNode(3), new TreeNode(3)),
      ),
      new TreeNode(2, new TreeNode(3), new TreeNode(3, new TreeNode(4))),
    ),
  ).toBe(false);
});
