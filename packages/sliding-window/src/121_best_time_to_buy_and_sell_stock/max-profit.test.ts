import { expect, test } from "vitest";
import { maxProfit } from "./max-profit";

test("0 profit if no transaction", () => {
  expect(maxProfit([7, 6, 5, 4, 3, 2, 1])).toBe(0);
});

test("max profit if we can find the lowest price at first", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("max profit if the lowest price is in the middle", () => {
  expect(maxProfit([7, 3, 4, 1, 5, 3, 7])).toBe(6);
});
