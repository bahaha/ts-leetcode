/**
 * Given an interger array `nums`, return *an array `answer` such that `answer[i]`
 * is equal to the product of all the elements of `nums` except `nums[i]`;
 *
 * The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.
 *
 *  1,2,3,4
 *
 *  r0 1,1,1,1   pre: 1; post: 4
 *  r1 1,1,4,1   pre: 2; post: 12
 *  r2 1,12,8,1  pre: 6; post: 24
 *  r3 24,12,8,6
 */
export function productExceptSelf(nums: number[]): number[] {
  const output = new Array<number>(nums.length).fill(1);
  // the product excpet self will be
  // the product value of the previous elements & the product value of the next elements of current element
  let prefixIndex = 1;
  let postfixIndex = nums.length - 2;
  let prefix = nums[0];
  let postfix = nums[nums.length - 1];

  while (prefixIndex < nums.length && postfixIndex >= 0) {
    output[prefixIndex] *= prefix;
    prefix *= nums[prefixIndex];
    output[postfixIndex] *= postfix;
    postfix *= nums[postfixIndex];

    prefixIndex++;
    postfixIndex--;
  }

  return output;
}

// O(n) if division operation is available
// find product of all numbers, then divide the each element
