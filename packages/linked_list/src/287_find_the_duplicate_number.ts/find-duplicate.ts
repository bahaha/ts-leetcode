export function findDuplicate(nums: number[]): number {
  // 0  1  2  3  4 (index)
  // 1, 3, 4, 2, 2
  // 1 ==> 3 ==> 2 ==> 4 ==> 2 cyclic loop, slow, fast pointer

  let found = false;
  let slow = 0;
  let fast = 0;

  const walk = (curr: number) => nums[curr];

  // find the intersection of slow and fast pointers
  while (!found) {
    slow = walk(slow);
    fast = walk(walk(fast));
    if (slow === fast) {
      found = true;
    }
  }

  // floyd's algo
  let begin = 0;
  found = false;
  while (!found) {
    begin = walk(begin);
    slow = walk(slow);
    if (begin === slow) {
      found = true;
    }
  }

  return begin;
}
