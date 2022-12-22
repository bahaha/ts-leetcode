import type TreeNode from './tree-node';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  return false;
}

export { isSameTree };
export default isSameTree;
