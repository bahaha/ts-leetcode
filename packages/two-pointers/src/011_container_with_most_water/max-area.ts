/**
 * You are given an integer array `height` of length `n`. There are `n` vertical lines
 * drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 */
export function maxArea(heights: number[]): number {
  let area = 0;
  let left = 0;
  let right = heights.length - 1;

  while (right > left) {
    const width = right - left;
    const isLeftLower = heights[left] <= heights[right];
    const height = isLeftLower ? heights[left] : heights[right];
    area = Math.max(area, width * height);

    if (isLeftLower) {
      left++;
    } else {
      right--;
    }
  }

  return area;
}
