import { describe, expect, it } from 'vitest';
import { isSameTree } from '../same-tree';

describe('is the given tree are the same', () => {
  it('truthy if the trees are null', () => {
    expect(isSameTree(null, null)).toBe(true);
  });
});
