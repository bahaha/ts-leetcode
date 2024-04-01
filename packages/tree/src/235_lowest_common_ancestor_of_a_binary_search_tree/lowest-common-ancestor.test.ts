import { expect, test } from "vitest";
import { lowestCommonAncestor, TreeNode } from "./lowest-common-ancestor";

test("return root if target node is null", () => {
  const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  expect(lowestCommonAncestor(tree, null, null)).toBe(tree);
});

test("return root if the target nodes are at the left and right", () => {
  const tree = new TreeNode(
    3,
    new TreeNode(2, new TreeNode(1)),
    new TreeNode(4, null, new TreeNode(5)),
  );
  expect(lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(5))).toBe(
    tree,
  );
});

test("return lower node if all the target are smaller than root", () => {
  const tree = new TreeNode(
    10,
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(7),
    ),
  );

  const ancestor = lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(7));
  expect(ancestor!.val).toBe(5);
});

test("return node at right if all the target nodes are larger than root", () => {
  const tree = new TreeNode(
    1,
    null,
    new TreeNode(
      11,
      new TreeNode(10),
      new TreeNode(
        15,
        new TreeNode(13, new TreeNode(12), new TreeNode(14)),
        new TreeNode(17),
      ),
    ),
  );
  let ancestor = lowestCommonAncestor(tree, new TreeNode(10), new TreeNode(17));
  expect(ancestor!.val).toBe(11);

  ancestor = lowestCommonAncestor(tree, new TreeNode(12), new TreeNode(17));
  expect(ancestor!.val).toBe(15);
  ancestor = lowestCommonAncestor(tree, new TreeNode(12), new TreeNode(14));
  expect(ancestor!.val).toBe(13);
});

test("return node if one of the target node are equals", () => {
  const tree = new TreeNode(
    1,
    new TreeNode(
      -5,
      new TreeNode(-7, new TreeNode(-8), new TreeNode(-6)),
      new TreeNode(-3),
    ),
    new TreeNode(
      11,
      new TreeNode(10),
      new TreeNode(
        15,
        new TreeNode(13, new TreeNode(12), new TreeNode(14)),
        new TreeNode(17),
      ),
    ),
  );

  const ancestor = lowestCommonAncestor(
    tree,
    new TreeNode(1),
    new TreeNode(17),
  );
  expect(ancestor!.val).toBe(1);
});
