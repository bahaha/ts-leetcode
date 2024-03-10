import { expect, test } from "vitest";
import { isValidSudoku } from "./is-valid-sodoku";

test("return true if the Sodoku is valid by following the rules defined", () => {
  const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  expect(isValidSudoku(board)).toBe(true);
});

test("return true even the Soduoku is not slovable.", () => {
  const board = [
    "12345678.".split(""),
    "........2".split(""),
    "........3".split(""),
    "........4".split(""),
    "........5".split(""),
    "........6".split(""),
    "........7".split(""),
    "........8".split(""),
    "........9".split(""),
  ];
  expect(isValidSudoku(board)).toBe(true);
});

test("return false if there is duplicate number in a row", () => {
  const board = [
    "123.....1".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
  ];
  expect(isValidSudoku(board)).toBe(false);
});

test("return false if there is duplicate number in a column", () => {
  const board = [
    "1........".split(""),
    "2........".split(""),
    "1........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
  ];
  expect(isValidSudoku(board)).toBe(false);
});

test("return false if there is a duplicate number in a block", () => {
  const board = [
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    ".........".split(""),
    "......1.2".split(""),
    ".......56".split(""),
    ".......1.".split(""),
  ];
  expect(isValidSudoku(board)).toBe(false);
});
