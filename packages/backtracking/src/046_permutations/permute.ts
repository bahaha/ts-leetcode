export function permute(nums: number[]): number[][] {
  const ans: number[][] = [];

  if (nums.length === 1) {
    return [[...nums]];
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums.shift()!;
    const subPermute = permute(nums);

    ans.push(
      ...subPermute.map((p) => {
        p.push(n);
        return p;
      }),
    );
    // reset
    nums.push(n);
  }

  return ans;
}
