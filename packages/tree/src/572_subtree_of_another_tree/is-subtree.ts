export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function isSameTree(
  tree: TreeNode | null,
  anotherTree: TreeNode | null,
): boolean {
  if (!tree && !anotherTree) return true;
  if ((!tree && anotherTree) || (tree && !anotherTree)) return false;
  if (tree?.val !== anotherTree?.val) return false;

  return (
    isSameTree(tree!.left, anotherTree!.left) &&
    isSameTree(tree!.right, anotherTree!.right)
  );
}

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  if (!root) {
    return !subRoot;
  } else {
    return (
      isSameTree(root, subRoot) ||
      isSubtree(root.left, subRoot) ||
      isSubtree(root.right, subRoot)
    );
  }
}
