export function lengthOfLongestSubstring(s: string): number {
  // t  m  m  z  u  x  t
  const seen = new Map<string, number>();
  let len = 0;
  let left = 0;
  let right = 0;

  for (const ch of s) {
    if (seen.has(ch) && seen.get(ch)! >= left) {
      left = seen.get(ch)! + 1;
      seen.delete(ch);
    } else {
      len = Math.max(len, right - left + 1);
    }
    seen.set(ch, right);
    right++;
  }

  return len;
}
