export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const ans: number[][] = [];

  function walk(i: number, curr: number[], total: number) {
    if (total === target) {
      ans.push([...curr]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    // take the number
    curr.push(candidates[i]);
    walk(i, curr, total + candidates[i]);

    // not take the number
    curr.pop();
    walk(i + 1, curr, total);
  }

  walk(0, [], 0);
  return ans;
}
