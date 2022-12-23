import { describe, expect, it } from 'vitest';
import NestedIterator from '@/flatten-nested-list-iterator';
import NestedInteger from '@/util/nested-integer';

describe('flatten all elements from the nested array', () => {
  it('false on hasNext if empty iterator', () => {
    const iterator = new NestedIterator([]);
    expect(iterator.hasNext()).toBe(false);
  });

  it('return element with the same order of simple array', () => {
    const iterator = new NestedIterator([
      new NestedInteger(1),
      new NestedInteger(2),
      new NestedInteger(3),
    ]);

    [1, 2, 3].forEach((number) => {
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(number);
    });

    expect(iterator.hasNext()).toBe(false);
  });

  it('flatten the elements from the nested array (2d)', () => {
    const iterator = new NestedIterator([
      new NestedInteger(1),
      new NestedInteger([new NestedInteger(2), new NestedInteger(3)]),
    ]);

    [1, 2, 3].forEach((number) => {
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(number);
    });

    expect(iterator.hasNext()).toBe(false);
  });

  it('follow the same order of the nested array', () => {
    const iterator = new NestedIterator([
      new NestedInteger(1),
      new NestedInteger([
        new NestedInteger(2),
        new NestedInteger([new NestedInteger(3), new NestedInteger(4)]),
      ]),
    ]);

    [1, 2, 3, 4].forEach((number) => {
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(number);
    });

    expect(iterator.hasNext()).toBe(false);
  });
});
