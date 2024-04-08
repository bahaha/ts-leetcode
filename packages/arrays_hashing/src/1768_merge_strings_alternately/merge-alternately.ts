// a b c
//  p q r
// apbqcr
//
// a b
//  p q r s
// apbqrs
//
// a b c d
//  p q
// apbqcd
// Time complexity: O(n), Space complexity: O(n)
export function mergeAlternately(word1: string, word2: string): string {
  const characters: string[] = [];
  for (let i = 0; i < word1.length; i++) {
    if (i < word1.length) {
      characters.push(word1[i]);
    }
    if (i < word2.length) {
      characters.push(word2[i]);
    }
  }

  if (word2.length > word1.length) {
    characters.push(word2.slice(word1.length));
  }

  return characters.join("");
}
