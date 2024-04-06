export function subsetsWithDup(nums: number[]): number[][] {
  const ans: number[][] = [];
  nums.sort((a, b) => a - b);

  function walk(i: number, subset: number[]) {
    if (i >= nums.length) {
      ans.push([...subset]);
      return;
    }

    // take it
    subset.push(nums[i]);
    walk(i + 1, subset);
    // reset
    subset.pop();

    // take the number only once, jumps the index into the latest duplicate element
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    walk(i + 1, subset);
  }

  walk(0, []);
  return ans;
}
