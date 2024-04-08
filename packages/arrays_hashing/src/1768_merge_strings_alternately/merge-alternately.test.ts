import { expect, test } from "vitest";
import { mergeAlternately } from "./merge-alternately";

test("length of words is equal", () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
});

test("word1 is longer than word2", () => {
  expect(mergeAlternately("ab", "pqr")).toBe("apbqr");
});

test("word2 is longer than word1", () => {
  expect(mergeAlternately("abc", "pq")).toBe("apbqc");
});

test("word1 is empty", () => {
  expect(mergeAlternately("", "pqr")).toBe("pqr");
});

test("word2 is empty", () => {
  expect(mergeAlternately("abc", "")).toBe("abc");
});

test("both words are empty", () => {
  expect(mergeAlternately("", "")).toBe("");
});
