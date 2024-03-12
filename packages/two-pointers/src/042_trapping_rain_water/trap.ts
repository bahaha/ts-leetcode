export function trap(height: number[]): number {
  let total = 0;
  let left = 0;
  let right = height.length - 1;
  let maxL = height[left];
  let maxR = height[right];

  while (right > left) {
    const isLeftLower = maxL <= maxR;
    if (isLeftLower) {
      left++;
      const trappingArea = maxL - height[left];
      if (trappingArea > 0) {
        total += trappingArea;
      }
      maxL = height[left] > maxL ? height[left] : maxL;
    } else {
      right--;
      const trappingArea = maxR - height[right];
      if (trappingArea > 0) {
        total += trappingArea;
      }
      maxR = height[right] > maxR ? height[right] : maxR;
    }
  }

  return total;
}
