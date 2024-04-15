export function increasingTriplet(nums: number[]): boolean {
  if (!nums.length || nums.length < 3) return false;

  let numOfI = Infinity;
  let numOfJ = Infinity;

  for (const num of nums) {
    if (num <= numOfI) {
      // the threshold found , the smallest number we have seen before
      // it's ok to have a case that numOfI is after the numOfJ (which break the i < j rule intuitively)
      // since we are finding a K that should greater than J regardless how small the I is
      numOfI = num;
    } else if (num <= numOfJ) {
      // second threshold found
      numOfJ = num;
    } else {
      // we find a value that is greater than numOfI, and numOfJ (there must be a smaller number than numOfJ)
      return true;
    }
  }

  return false;
}
