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

// recursive
function walk(node: TreeNode | null, maxNum: number): number {
  if (!node) return 0;
  if (node.val < maxNum)
    return walk(node.left, maxNum) + walk(node.right, maxNum);

  maxNum = Math.max(maxNum, node.val);
  return 1 + walk(node.left, maxNum) + walk(node.right, maxNum);
}

export function goodNodes(root: TreeNode | null): number {
  // dfs
  return walk(root, -Infinity);
}

export function goodNodes2(root: TreeNode | null): number {
  const stack: { max: number; node: TreeNode | null }[] = [
    { max: -Infinity, node: root },
  ];
  let nGoodNotes = 0;

  while (stack.length) {
    const { max, node } = stack.pop()!;
    if (!node) continue;
    if (node.val >= max) {
      nGoodNotes++;
    }
    const newMax = Math.max(node.val, max);
    if (node.left) stack.push({ node: node.left, max: newMax });
    if (node.right) stack.push({ node: node.right, max: newMax });
  }

  return nGoodNotes;
}
