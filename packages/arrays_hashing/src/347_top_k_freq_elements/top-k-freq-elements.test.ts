import { expect, test } from "vitest";
import { topKFrequent } from "./top-k-freq-elements";

test("return top k frequent elements", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual(
    expect.arrayContaining([1, 2]),
  );
});

test("return the top frequent element if the k is 1", () => {
  expect(topKFrequent([1, 1, 2, 3, 4], 1)).toEqual(expect.arrayContaining([1]));
});

test("return the first element if the k is 1 and all the numbers in the input is distinct", () => {
  expect(topKFrequent([3, 4, 1, 2, 5], 1)).toEqual(expect.arrayContaining([3]));
});
