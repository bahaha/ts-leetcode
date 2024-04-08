import { expect, test } from "vitest";
import { kidsWithCandies } from "./kids-with-candies";

test("only one kid has the most candies", () => {
  expect(kidsWithCandies([2, 3, 4, 0, 3], 3)).toEqual([
    true,
    true,
    true,
    false,
    true,
  ]);
});

test("kid have the most candies with extra candies but other kid has the same amount of candies", () => {
  expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
    true,
    true,
    true,
    false,
    true,
  ]);
});

test("all kids have the same amount of candies", () => {
  expect(kidsWithCandies([2, 2, 2, 2, 2], 1)).toEqual([
    true,
    true,
    true,
    true,
    true,
  ]);
});
