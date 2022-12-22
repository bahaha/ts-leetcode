import type TreeNode from './tree-node';

/**
 * # question:
 *  - is a null tree equals another null tree? `YES`
 *
 * # thinking:
 *  - the edge case: two null tree should be the same
 *  - consider the value of the tree nodes are the same, of course, check null first.
 *  - if the value of the tree nodes are the same, then check the equality between the left children and the right children.
 *
 * # complexity:
 *  - time:  O(n)
 *  - space: O(1)
 */
function isSameTree(p?: TreeNode | null, q?: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

export { isSameTree };
export default isSameTree;
