export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const ans: number[][] = [];
  candidates.sort((a, b) => a - b);

  function walk(i: number, curr: number[], total: number) {
    if (total === target) {
      ans.push([...curr]);
      return;
    }

    if (i >= candidates.length || total + candidates[i] > target) {
      return;
    }

    // take it
    curr.push(candidates[i]);
    walk(i + 1, curr, total + candidates[i]);
    // reset
    curr.pop();
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    // not take it
    walk(i + 1, curr, total);
  }

  walk(0, [], 0);
  return ans;
}
