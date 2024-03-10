/**
 * Given an unsorted array of integers `nums`, `return the length of the longest consecutive elements sequence.`
 *
 * You must write an algorithm that runs in O(n) time.
 */
export function longestConsecutive(nums: number[]): number {
  // find the sequence beginning to find the consecutive elements
  let longest = 0;
  const checkTable = new Set<number>(nums);

  for (const num of checkTable) {
    // it will be the beginning of the sequence if there no neighborhood left
    if (!checkTable.has(num - 1)) {
      let sequenceTail = num;
      while (checkTable.has(++sequenceTail)) {
        // find the sequence len if the next neighborhood gap is found.
      }
      longest = Math.max(longest, sequenceTail - num);
    }
  }

  return longest;
}
