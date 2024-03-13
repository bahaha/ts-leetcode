import { expect, test } from "vitest";
import { searchMatrix } from "./search-matrix";

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

test("return true if number exists", () => {
  expect(searchMatrix(matrix, 3)).toBe(true);
  expect(searchMatrix(matrix, 16)).toBe(true);
  expect(searchMatrix(matrix, 60)).toBe(true);
});

test("return false if number non exists", () => {
  expect(searchMatrix(matrix, 13)).toBe(false);
  expect(searchMatrix(matrix, 4)).toBe(false);
  expect(searchMatrix(matrix, 22)).toBe(false);
  expect(searchMatrix(matrix, 25)).toBe(false);
});
