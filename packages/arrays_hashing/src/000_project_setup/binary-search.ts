export function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    const value = arr[mid];

    if (value === target) {
      return mid;
    } else if (target > value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return -1;
}
