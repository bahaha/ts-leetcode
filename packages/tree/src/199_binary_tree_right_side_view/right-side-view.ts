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

export function rightSideView(root: TreeNode | null): number[] {
  // bfs
  // find the most right node in the same level (depth)
  const queue = [root];
  const nums: number[] = [];

  while (queue.length) {
    let mostRightNode: TreeNode | null = null;
    const level = queue.length;

    for (let i = 0; i < level; i++) {
      const node = queue.shift()!;
      if (!node) continue;
      mostRightNode = node;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (mostRightNode) nums.push(mostRightNode.val);
  }

  return nums;
}
