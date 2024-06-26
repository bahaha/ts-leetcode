import { expect, test } from "vitest";
import { twoSum } from "./two-sum";

test.each([
  { nums: [2, 7, 11, 15], target: 9, answer: [0, 1] },
  { nums: [3, 2, 4], target: 6, answer: [1, 2] },
  { nums: [3, 3], target: 6, answer: [0, 1] },
])(
  "return the indices of the two number candidates",
  ({ nums, target, answer }) => {
    expect(twoSum(nums, target)).toEqual(expect.arrayContaining(answer));
  },
);
