import { expect, test } from "vitest";
import { dailyTemperatures } from "./daily-temperatures";

test("all 1 if the temp is increasing", () => {
  expect(dailyTemperatures([30, 40, 50])).toEqual([1, 1, 0]);
});

test("zeros after the max temp", () => {
  expect(dailyTemperatures([50, 40, 30])).toEqual([0, 0, 0]);
});

test("find days", () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
    1, 1, 4, 2, 1, 1, 0, 0,
  ]);
});
