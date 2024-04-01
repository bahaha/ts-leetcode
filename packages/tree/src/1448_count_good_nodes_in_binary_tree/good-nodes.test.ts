import { expect, test } from "vitest";
import { goodNodes, goodNodes2, TreeNode } from "./good-nodes";

test("return 1 if only root node", () => {
  expect(goodNodes(new TreeNode(1))).toBe(1);
  expect(goodNodes2(new TreeNode(1))).toBe(1);
});

test("return 0 if tree is empty", () => {
  expect(goodNodes(null)).toBe(0);
  expect(goodNodes2(null)).toBe(0);
});

test("return number of good nodes", () => {
  expect(
    goodNodes(
      new TreeNode(
        3,
        new TreeNode(1, new TreeNode(3)),
        new TreeNode(4, new TreeNode(1), new TreeNode(5)),
      ),
    ),
  ).toBe(4);

  expect(
    goodNodes2(
      new TreeNode(
        3,
        new TreeNode(1, new TreeNode(3)),
        new TreeNode(4, new TreeNode(1), new TreeNode(5)),
      ),
    ),
  ).toBe(4);

  expect(
    goodNodes(
      new TreeNode(3, new TreeNode(3, new TreeNode(4), new TreeNode(2))),
    ),
  ).toBe(3);

  expect(
    goodNodes2(
      new TreeNode(3, new TreeNode(3, new TreeNode(4), new TreeNode(2))),
    ),
  ).toBe(3);
});
