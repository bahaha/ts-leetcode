import { expect, test } from "vitest";
import { binarySearch } from "./binary-search";

const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
test("return target number index", () => {
  expect(binarySearch(foo, 69)).toEqual(3);
  expect(binarySearch(foo, 69420)).toEqual(10);
  expect(binarySearch(foo, 1)).toEqual(0);
});

test("return -1 if the target number is not in the array", () => {
  expect(binarySearch(foo, 1336)).toEqual(-1);
  expect(binarySearch(foo, 69421)).toEqual(-1);
  expect(binarySearch(foo, 0)).toEqual(-1);
});
