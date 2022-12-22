import { describe, expect, it } from 'vitest';
import { isSameTree } from '../same-tree';

describe('is the given tree are the same', () => {
  it('truthy if the trees are null', () => {
    expect(isSameTree()).toBe(true);
  });

  it('falsy if the trees in different shape', () => {
    expect(
      isSameTree(
        { val: 1, left: { val: 2 }, right: undefined },
        { val: 1, left: undefined, right: { val: 3 } }
      )
    ).toBe(false);
  });

  it('falsy if the value of tree nodes are different', () => {
    expect(
      isSameTree(
        { val: 1, left: { val: 2 }, right: { val: 3 } },
        { val: 1, left: { val: 3 }, right: { val: 2 } }
      )
    ).toBe(false);
  });

  it('truthy if the tree are the same', () => {
    expect(
      isSameTree(
        { val: 1, left: { val: 2 }, right: { val: 3 } },
        { val: 1, left: { val: 2 }, right: { val: 3 } }
      )
    ).toBe(true);
  });
});
