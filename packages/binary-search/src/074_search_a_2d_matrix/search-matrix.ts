export function searchMatrix(matrix: number[][], target: number): boolean {
  let top = 0;
  let bottom = matrix.length;

  let row: number;
  while (top < bottom) {
    row = Math.floor(top + (bottom - top) / 2);
    const rowNums = matrix[row];
    const num = rowNums[0];

    if (num === target) {
      return true;
    } else if (num > target) {
      bottom = row;
    } else {
      if (target <= rowNums[rowNums.length - 1]) break;
      top = row + 1;
    }
  }

  return binarySearch(matrix[row!], target);
}

function binarySearch(nums: number[], target: number): boolean {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    const num = nums[mid];

    if (num === target) {
      return true;
    } else if (num > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return false;
}
