import { expect, test } from "vitest";
import { productExceptSelf } from "./product-except-self";

test("return product except self", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);

  expect(productExceptSelf([5, 10, 100, 1000])).toEqual([
    1000000, 500000, 50000, 5000,
  ]);
});
