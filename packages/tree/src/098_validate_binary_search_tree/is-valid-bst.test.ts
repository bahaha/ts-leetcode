import { expect, test } from "vitest";
import { isValidBST, TreeNode } from "./is-valid-bst";

test("true if valid binary search tree", () => {
  expect(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)))).toBe(
    true,
  );
});

test("true if the binary search tree is not balanced", () => {
  expect(
    isValidBST(
      new TreeNode(
        20,
        new TreeNode(
          10,
          new TreeNode(5, new TreeNode(3), new TreeNode(7, new TreeNode(6))),
        ),
        new TreeNode(30),
      ),
    ),
  ).toBe(true);
});

test("false if the tree is not a bst", () => {
  expect(
    isValidBST(
      new TreeNode(
        20,
        new TreeNode(
          10,
          new TreeNode(5, new TreeNode(8), new TreeNode(7, new TreeNode(6))),
        ),
        new TreeNode(30),
      ),
    ),
  ).toBe(false);
});

test("false if the node val is equal", () => {
  expect(
    isValidBST(new TreeNode(111, new TreeNode(111), new TreeNode(112))),
  ).toBe(false);
});

test("false if the deep level node does not match the rule", () => {
  expect(
    isValidBST(
      new TreeNode(
        5,
        new TreeNode(4),
        new TreeNode(6, new TreeNode(3), new TreeNode(7)),
      ),
    ),
  ).toBe(false);
});
