import { expect, test } from "vitest";
import { characterReplacement } from "./character-replacement";

test("return longest repeating character", () => {
  // expect(characterReplacement("ABAB", 2)).toBe(4);
  expect(characterReplacement("AABABBA", 1)).toBe(4);
});
