import { expect, test } from "vitest";
import { buildTree } from "./build-tree";

test("build tree", () => {
  const tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

  expect(tree!.val).toBe(3);
  expect(tree!.left!.val).toBe(9);
  expect(tree!.left!.left).toBeNull();
  expect(tree!.left!.right).toBeNull();

  expect(tree!.right!.val).toBe(20);
  expect(tree!.right!.left!.val).toBe(15);
  expect(tree!.right!.left!.left).toBeNull();
  expect(tree!.right!.right!.val).toBe(7);
  expect(tree!.right!.right!.right).toBeNull();
});
