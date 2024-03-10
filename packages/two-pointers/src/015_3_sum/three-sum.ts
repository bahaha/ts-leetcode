/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i!=k, j != k, and nums[i] + nums[j] + nums[k] == 0
 * Note that the solution set must not contain duplicate triplets
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const answer: number[][] = [];

  // keep at least 2 position for j, k to  fit i, j, k
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    if (num > 0) return answer;
    // if the beginning number is equal to the previous element, skip
    if (i > 0 && num === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      const sum = num + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        answer.push([num, nums[left], nums[right]]);
        // skip taking the same elements to avoid duplicate result
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      }
    }
  }

  return answer;
}
