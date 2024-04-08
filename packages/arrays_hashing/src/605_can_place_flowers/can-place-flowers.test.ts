import { expect, test } from "vitest";
import { canPlaceFlowers, canPlaceFlowers2 } from "./can-place-flowers";

test("even empty plots", () => {
  expect(canPlaceFlowers([0, 0, 0, 0], 2)).toBe(true);
  expect(canPlaceFlowers([0, 0, 0, 0], 3)).toBe(false);
  expect(canPlaceFlowers([0, 0], 1)).toBe(true);
  expect(canPlaceFlowers2([0, 0, 0, 0], 2)).toBe(true);
  expect(canPlaceFlowers2([0, 0, 0, 0], 3)).toBe(false);
  expect(canPlaceFlowers2([0, 0], 1)).toBe(true);
});

test("odd empty plots", () => {
  expect(canPlaceFlowers2([0, 0, 0, 0, 0], 3)).toBe(true);
  expect(canPlaceFlowers2([0, 0, 0, 0, 0], 4)).toBe(false);
  expect(canPlaceFlowers2([0, 0, 0, 0, 0, 0, 0], 4)).toBe(true);
});

test("even empty plots with flowers", () => {
  expect(canPlaceFlowers([1, 0, 0, 1], 1)).toBe(false);
  expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers2([1, 0, 0, 1], 1)).toBe(false);
  expect(canPlaceFlowers2([1, 0, 0, 0, 0, 1], 1)).toBe(true);
});

test("odd empty plots with flowers", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0], 1)).toBe(true);
  expect(canPlaceFlowers2([1, 0, 0, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers2([1, 0, 0, 0, 1, 0], 1)).toBe(true);
});

test("sparse empty plots", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true);
  expect(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0)).toBe(true);
  expect(canPlaceFlowers2([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true);
  expect(canPlaceFlowers2([1, 0, 1, 0, 1, 0, 1], 0)).toBe(true);
});
