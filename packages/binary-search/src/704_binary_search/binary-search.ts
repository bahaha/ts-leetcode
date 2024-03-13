export function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    const num = nums[mid];

    if (num === target) {
      return mid;
    } else if (num > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}
