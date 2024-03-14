export function findMin(nums: number[]): number {
  // 7 8 9 10 1 2 3 4 5 6
  // R1: L0 R10 M5, M=2  L=7 > min at left,  R>5; min: 2
  // R2: L0 R5  M2, M=9  L=7 > min at right, L>3; min: 2
  // R3: L3 R5  M4, M=1, L=7 > min at left,  R>4: min: 1
  // R4: L3 R4  M3, M=10,L=7 > min at right, L>4: min: 1
  let min = nums[0];
  let left = 0;
  let right = nums.length;

  if (nums[0] <= nums[nums.length - 1]) {
    return min;
  }

  while (right > left) {
    const mid = Math.floor(left + (right - left) / 2);
    const num = nums[mid];

    min = num < min ? num : min;
    if (nums[0] > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return min;
}
