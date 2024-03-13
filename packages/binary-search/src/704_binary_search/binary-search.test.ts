import { expect, test } from "vitest";
import { search } from "./binary-search";

test("return index if found", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test("return -1 if not found", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 1)).toBe(-1);
});
