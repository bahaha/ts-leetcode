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

function isSame(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q)) return false;
  if (p?.val !== q?.val) return false;

  return isSame(p!.left, q!.left) && isSame(p!.right, q!.right);
}

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return isSame(p, q);
}
