/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-descreasing order,
 * find two numbers such that they add up to a specific target number.
 * Let these two numbers be numbers[index1], and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 *
 * Return indices of the two numbers, index1 and index2, added by one as an integer array
 * [index1, index2] of length2.
 *
 * The tests are generated such that there is exactly one solution.
 * You may not use the same element twice.
 *
 * Your solution must use only constant extra space.
 */
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (right > left) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  throw new Error("should be exactly one solution");
}
