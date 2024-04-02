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

export function kthSmallest(root: TreeNode | null, k: number): number {
  let n = 0;
  const stack = [];

  function walk(node: TreeNode | null) {
    if (!node) return;
    stack.push(node);
    while (node.left) {
      stack.push(node.left);
      node = node.left;
    }
  }

  walk(root);
  while (n < k && stack.length) {
    const node = stack.pop();
    n++;
    if (n === k) return node.val;
    if (node.right) walk(node.right);
  }
  return -1;
}

export function kthSmallest2(
  root: TreeNode | null,
  k: number,
  visited: number[] = [],
): number {
  if (!root) return -1;

  kthSmallest2(root.left, k, visited);
  visited.push(root.val);
  kthSmallest2(root.right, k, visited);

  if (k <= visited.length) {
    return visited[k - 1];
  }
  return -1;
}
