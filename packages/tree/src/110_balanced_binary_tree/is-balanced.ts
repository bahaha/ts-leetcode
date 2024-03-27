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

export function isBalanced(root: TreeNode | null): boolean {
  let balanced = true;

  function walk(n: TreeNode | null): number {
    if (!n) return 0;

    const leftHeight = walk(n.left);
    const rightHeight = walk(n.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      balanced = false;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }

  walk(root);
  return balanced;
}
