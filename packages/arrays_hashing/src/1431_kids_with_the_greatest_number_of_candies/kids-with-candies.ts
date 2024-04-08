export function kidsWithCandies(
  candies: number[],
  extraCandies: number,
): boolean[] {
  const currentMaxCandies = Math.max(...candies);
  return candies.map((n) => n + extraCandies >= currentMaxCandies);
}
