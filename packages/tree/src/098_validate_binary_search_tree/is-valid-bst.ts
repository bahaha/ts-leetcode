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

type NodeAgg = {
  upperBound: number;
  lowerBound: number;
  node: TreeNode | null;
};

export function isValidBST(root: TreeNode | null): boolean {
  const stack: NodeAgg[] = [
    { upperBound: Infinity, lowerBound: -Infinity, node: root },
  ];

  while (stack.length) {
    const { upperBound, lowerBound, node } = stack.pop()!;
    if (!node) continue;

    if (!(lowerBound < node.val && node.val < upperBound)) return false;

    if (node.left) {
      stack.push({
        upperBound: Math.min(node.val, upperBound),
        lowerBound,
        node: node.left,
      });
    }

    if (node.right) {
      stack.push({
        upperBound,
        lowerBound: Math.max(node.val, lowerBound),
        node: node.right,
      });
    }
  }

  return true;
}
