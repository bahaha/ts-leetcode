export function minEatingSpeed(piles: number[], h: number): number {
  // const maxBananas = max(piles);
  const maxBananas = Math.max(...piles);
  let minSpeed: number = maxBananas;
  let left = 0;
  let right = maxBananas + 1;

  while (right > left) {
    const eatingSpeed = Math.floor(left + (right - left) / 2);
    const hoursToEat = getEatingHours(piles, eatingSpeed);

    if (hoursToEat <= h) {
      minSpeed = eatingSpeed < minSpeed ? eatingSpeed : minSpeed;
      right = eatingSpeed;
    } else {
      left = eatingSpeed + 1;
    }
  }

  return minSpeed;
}

function getEatingHours(piles: number[], speed: number) {
  return piles
    .map((bananas) => Math.ceil(bananas / speed))
    .reduce((acc, curr) => acc + curr, 0);
}

function max(nums: number[]) {
  let maxNum = 0;
  for (let i = 0; i < nums.length; i++) {
    maxNum = nums[i] > maxNum ? nums[i] : maxNum;
  }
  return maxNum;
}
