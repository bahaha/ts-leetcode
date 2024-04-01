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

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!p || !q) {
    return root;
  } else {
    let ans = root;
    const lower = p.val > q.val ? q : p;
    const higher = lower === p ? q : p;

    while (ans) {
      if (
        ans.val === lower.val ||
        ans.val === higher.val ||
        (ans.val > lower.val && ans.val < higher.val)
      ) {
        break;
      } else if (ans.val > higher.val) {
        ans = ans.left;
      } else if (ans.val < lower.val) {
        ans = ans.right;
      }
    }

    return ans;
  }
}
