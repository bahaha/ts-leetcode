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

// function invert(head: TreeNode | null): TreeNode | null {
//   if (!head || (!head.left && !head.right)) return head;
//   const tmp = head.left;
//   head.left = invert(head.right);
//   head.right = invert(tmp);
//   return head;
// }
//
// export function invertTree(root: TreeNode | null): TreeNode | null {
//   return invert(root);
// }

// export function invertTree(root: TreeNode | null): TreeNode | null {
//   if (!root) return root;
//   const newLeft = invertTree(root.left);
//   const newRight = invertTree(root.right);
//
//   root.left = newRight;
//   root.right = newLeft;
//
//   return root;
// }
function walk(head: TreeNode | null): TreeNode | null {
  // dfs
  const stack = [head];

  while (stack.length) {
    const node = stack.pop();
    if (node) {
      const tmp = node.left;
      node.left = node.right;
      node.right = tmp;

      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return head;
}

export function invertTree(root: TreeNode | null): TreeNode | null {
  return walk(root);
}
