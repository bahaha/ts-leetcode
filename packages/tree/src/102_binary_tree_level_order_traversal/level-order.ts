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

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  // bfs
  const queue: { depth: number; node: TreeNode }[] = [{ depth: 0, node: root }];
  const levels: number[][] = [];

  while (queue.length) {
    const { depth, node } = queue.shift()!;
    if (!levels[depth]) levels[depth] = [];

    levels[depth].push(node.val);

    if (node.left) {
      queue.push({ depth: depth + 1, node: node.left });
    }
    if (node.right) {
      queue.push({ depth: depth + 1, node: node.right });
    }
  }

  return levels;
}
