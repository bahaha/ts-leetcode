/**
 *  Given two strings `s`, and `t`, return `true` if `t` is an anagram of `s`,
 *  and `false` otherwise.
 *
 *  An **Anagram** is a word or phrase formed by rearranging the letters of
 *  a different word or phrase, typically using all the original letters
 *  exactly once.
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const lettersOccurs = new Array(26).fill(0);
  const baseOffset = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    lettersOccurs[s.charCodeAt(i) - baseOffset]++;
    lettersOccurs[t.charCodeAt(i) - baseOffset]--;
  }

  const unmatchLetters = lettersOccurs.filter((c) => c !== 0);
  return unmatchLetters.length === 0;
}
