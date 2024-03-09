/**
 * Given an integer array `nums`, return `true` if any value appears **at least twice** in the array,
 * and return `false` if every element is distinct.
 */
export function containsDuplicate(nums: number[]): boolean {
  const distinctNums = new Set<number>();
  for (const num of nums) {
    if (distinctNums.has(num)) {
      return true;
    }
    distinctNums.add(num);
  }
  return false;
}
