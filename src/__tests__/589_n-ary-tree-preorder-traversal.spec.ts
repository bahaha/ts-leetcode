import { describe, it, expect } from 'vitest';
import preorder from '@/n-ary-tree-preorder-traversal';
import Node from '@/util/node';

describe('n-ary tree traversal with preorder', () => {
  it('empty if node is null', () => {
    expect(preorder(null)).toEqual([]);
  });

  it('find all the nodes til deepest leaf node', () => {
    const tree = new Node(3, [new Node(5), new Node(6)]);
    expect(preorder(new Node(1, [tree, new Node(2), new Node(4)]))).toEqual([
      1, 3, 5, 6, 2, 4,
    ]);
  });

  it('dfs with complex tree', () => {
    const tree = new Node(1, [
      new Node(2),
      new Node(3, [new Node(6), new Node(7, [new Node(11, [new Node(14)])])]),
      new Node(4, [new Node(8, [new Node(12)])]),
      new Node(5, [new Node(9, [new Node(13)]), new Node(10)]),
    ]);

    expect(preorder(tree)).toEqual([1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]);
  });
});
