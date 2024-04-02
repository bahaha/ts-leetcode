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

export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;

  const head = new TreeNode(preorder[0]);
  const offset = inorder.indexOf(head.val);

  head.left = buildTree(
    preorder.slice(1, offset + 1),
    inorder.slice(0, offset),
  );

  head.right = buildTree(preorder.slice(offset + 1), inorder.slice(offset + 1));

  return head;
}
