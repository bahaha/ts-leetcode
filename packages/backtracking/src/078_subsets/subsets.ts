export function subsets(nums: number[]): number[][] {
  const ans: number[][] = [];

  const subset: number[] = [];

  function walk(i: number): void {
    // base case
    if (i >= nums.length) {
      ans.push([...subset]);
      return;
    }

    // take the number
    subset.push(nums[i]);
    walk(i + 1);

    // not take the number
    subset.pop();
    walk(i + 1);
  }

  walk(0);
  return ans;
}
