import { expect, test } from "vitest";
import { groupAnagrams } from "./group-anagrams";

function sortAnagrams(arr: string[][]): string[][] {
  return arr.map((nested) => [...nested].sort()).sort();
}

test("group anagrams", () => {
  expect(
    sortAnagrams(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])),
  ).toEqual(sortAnagrams([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]));
});

test("take empty as a valid string", () => {
  expect(sortAnagrams(groupAnagrams([""]))).toEqual(sortAnagrams([[""]]));
});

test("single word as a valid group", () => {
  expect(sortAnagrams(groupAnagrams(["a"]))).toEqual(sortAnagrams([["a"]]));
});
