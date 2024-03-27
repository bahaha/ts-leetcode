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

export function diameterOfBinaryTree(root: TreeNode | null): number {
  // diameter = height of left + height of right
  // height = max(left, right) + 1
  let maxDistance = 0;

  function walk(node: TreeNode | null): number {
    if (!node) return 0;
    const leftHeight = walk(node.left);
    const rightHeight = walk(node.right);

    maxDistance = Math.max(maxDistance, leftHeight + rightHeight);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  walk(root);
  return maxDistance;
}
