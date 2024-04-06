import { expect, test } from "vitest";
import { exist } from "./exist";

const board = ["ABCE".split(""), "SFCS".split(""), "ADEE".split("")];
test("true if word exists target 1", () => {
  expect(exist(board, "ABCCED")).toBe(true);
});

test("true if word exists target 2", () => {
  expect(exist(board, "SEE")).toBe(true);
});

test("false if word not found", () => {
  expect(exist(board, "ABCB")).toBe(false);
});
