import { expect, test } from "vitest";
import { maxDepth, TreeNode } from "./max-depth";

test("return 0 if the tree is empty", () => {
  expect(maxDepth(null)).toBe(0);
});

test("return level if the tree is balance", () => {
  const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(3)),
    new TreeNode(2, new TreeNode(3), new TreeNode(3)),
  );
  expect(maxDepth(tree)).toBe(3);
});

test("return level with skew tree", () => {
  const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3, new TreeNode(4))),
  );
  expect(maxDepth(tree)).toBe(4);
});
