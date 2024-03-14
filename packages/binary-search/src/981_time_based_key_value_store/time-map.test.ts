import { expect, test } from "vitest";
import { TimeMap } from "./time-map";

test("return empty string if no value before timestasmp", () => {
  const solution = new TimeMap();

  expect(solution.get("bar", 1)).toBe("");
  solution.set("bar", "foo", 2);
  expect(solution.get("bar", 0)).toBe("");
});

test("return the most recent string within valid operations", () => {
  const solution = new TimeMap();

  solution.set("foo", "bar", 1);
  expect(solution.get("foo", 1)).toBe("bar");
  expect(solution.get("foo", 3)).toBe("bar");
  solution.set("foo", "bar2", 4);
  expect(solution.get("foo", 4)).toBe("bar2");
  expect(solution.get("foo", 5)).toBe("bar2");

  solution.set("x", "a", 10);
  expect(solution.get("x", 11)).toBe("a");
  solution.set("x", "b", 20);
  expect(solution.get("x", 22)).toBe("b");
});
