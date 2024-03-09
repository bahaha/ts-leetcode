type Index = number;

/**
 * Given an array of integers `nums` and an integer `target`, return
 * *indices of the two numbers such that they add up to target*.
 *
 * You may assume that each input would have **exactly one solution**,
 * and you may not use the *same* element twice.
 *
 * You can return the answer in any order.
 */
export function twoSum(nums: number[], target: number): number[] {
  const completeNums = new Map<number, Index>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const completeNum = target - num;
    if (completeNums.has(num)) {
      return [i, completeNums.get(num)!];
    }
    completeNums.set(completeNum, i);
  }
  throw new Error("there should be ONE valid answer exists");
}
