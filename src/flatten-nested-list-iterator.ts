import NestedInteger from './util/nested-integer';

/**
 *  # question:
 *
 *  # thinking:
 *    - the value of NestedIntger should be either a number or an array
 *    - if we take the array as an tree with mock root, we could turn the iterator into a tree structure
 *    - do DFS, return the leaf node first on traverse
 *
 *    hasNext
 *    - when the first element is an array, add all values from the array into the iterator
 *    - or the first element is a number, then the has next would always be true
 *    next
 *    - the invocation must call hasNext first then next
 *    - we extract values from the nested arrays into the iterator during `hasNext`
 *    - so, the first element of iterator must be a number for return if the iterator is not empty
 *
 *  # complexity:
 *    - time:  O(n)
 *    - space: O(n)
 */
export default class NestedIterator {
  iterator: NestedInteger[];

  constructor(nestedList: NestedInteger[]) {
    this.iterator = [...nestedList];
  }

  hasNext(): boolean {
    const { iterator = [] } = this;
    while (iterator.length && !iterator[0]?.isInteger()) {
      const nested = iterator.shift()?.getList() ?? [];
      iterator.unshift(...nested);
    }
    return iterator.length > 0;
  }

  next(): number {
    return this.iterator.shift()?.getInteger() ?? -1;
  }

  /**
   * Your ParkingSystem object will be instantiated and called as such:
   * var obj = new NestedIterator(nestedList)
   * var a: number[] = []
   * while (obj.hasNext()) a.push(obj.next());
   */
}
