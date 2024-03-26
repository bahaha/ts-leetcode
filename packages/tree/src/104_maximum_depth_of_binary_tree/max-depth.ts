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

function walk(head: TreeNode | null, level: number): number {
  if (!head) return level;
  if (!head.left && !head.right) return level + 1;

  return Math.max(walk(head.left, level + 1), walk(head.right, level + 1));
}

export function maxDepth(root: TreeNode | null): number {
  return walk(root, 0);
}
