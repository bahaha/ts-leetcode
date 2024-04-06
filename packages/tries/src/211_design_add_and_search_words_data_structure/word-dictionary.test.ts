import { expect, test } from "vitest";
import { WordDictionary } from "./word-dictionary";

test("word dictionary with tries", () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad");
  wordDictionary.addWord("dad");
  wordDictionary.addWord("mad");
  expect(wordDictionary.search("pad")).toBe(false);
  expect(wordDictionary.search("bad")).toBe(true);
  expect(wordDictionary.search(".ad")).toBe(true);
  expect(wordDictionary.search("b..")).toBe(true);
});

test("word dictionary with tries", () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord("at");
  wordDictionary.addWord("and");
  wordDictionary.addWord("an");
  wordDictionary.addWord("add");
  expect(wordDictionary.search("a")).toBe(false);
  expect(wordDictionary.search(".at")).toBe(false);
  wordDictionary.addWord("bat");
  expect(wordDictionary.search(".at")).toBe(true);
  expect(wordDictionary.search("an.")).toBe(true);
  expect(wordDictionary.search("a.d.")).toBe(false);
  expect(wordDictionary.search("b.")).toBe(false);
  expect(wordDictionary.search("a.d")).toBe(true);
  expect(wordDictionary.search(".")).toBe(false);
});

test("return false if search on an empty dictionary", () => {
  const wordDictionary = new WordDictionary();
  expect(wordDictionary.search("x")).toBe(false);
  expect(wordDictionary.search("pad")).toBe(false);
});
