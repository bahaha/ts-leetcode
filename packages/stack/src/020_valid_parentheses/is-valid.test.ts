import { expect, test } from "vitest";

import { isValid } from "./is-valid";

test("true if the bracket is all closed in the same order, and same type", () => {
  expect(isValid("()[]{}")).toBe(true);
  expect(isValid("([{[]}([]){}])")).toBe(true);
});

test("false if the brackets is not closed well", () => {
  expect(isValid("()[{]")).toBe(false);
  expect(isValid("(")).toBe(false);
});

test("false if the bracket is closed in wrong order", () => {
  expect(isValid("()[{]}")).toBe(false);
});

test("false if the close bracket is not pair with its open", () => {
  expect(isValid("(}")).toBe(false);
});
