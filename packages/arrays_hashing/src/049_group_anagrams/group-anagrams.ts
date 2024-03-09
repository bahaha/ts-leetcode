/**
 * Given an array of strings `strs`, group **the anagrams** together.
 * You can return the answer in **any order**.
 *
 *  An **Anagram** is a word or phrase formed by rearranging the letters of
 *  a different word or phrase, typically using all the original letters
 *  exactly once.
 */
export function groupAnagrams(strs: string[]): string[][] {
  const groupedAnagrams: Record<string, string[]> = {};
  for (const word of strs) {
    const identifier = hashing(countCharactersOfWord(word));
    if (groupedAnagrams[identifier]) {
      groupedAnagrams[identifier].push(word);
    } else {
      groupedAnagrams[identifier] = [word];
    }
  }
  return Object.values(groupedAnagrams);
}

function countCharactersOfWord(word: string) {
  const wordCharacters = new Array(26).fill(0);
  const baseOffset = "a".charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
    wordCharacters[word.charCodeAt(i) - baseOffset]++;
  }
  return wordCharacters;
}

function hashing(wordCharacters: number[]) {
  return wordCharacters.join("|");
}
