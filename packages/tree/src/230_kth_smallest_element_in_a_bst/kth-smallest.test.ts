import { expect, test } from "vitest";
import { kthSmallest, kthSmallest2, TreeNode } from "./kth-smallest";

test("return the smallest at the left most with k = 1", () => {
  expect(
    kthSmallest(
      new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)),
      1,
    ),
  ).toBe(1);

  expect(
    kthSmallest2(
      new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)),
      1,
    ),
  ).toBe(1);
});

test("return the kth smallest", () => {
  expect(
    kthSmallest(
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
        new TreeNode(6),
      ),
      3,
    ),
  ).toBe(3);

  expect(
    kthSmallest2(
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
        new TreeNode(6),
      ),
      6,
    ),
  ).toBe(6);

  expect(
    kthSmallest2(
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
        new TreeNode(6),
      ),
      3,
    ),
  ).toBe(3);

  expect(
    kthSmallest(
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
        new TreeNode(6),
      ),
      6,
    ),
  ).toBe(6);
});
