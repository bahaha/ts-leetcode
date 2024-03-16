export function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) return false;
  const offset = "a".charCodeAt(0);

  const s1Counts = new Array(26).fill(0);
  const s2Counts = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Counts[s1[i].charCodeAt(0) - offset] += 1;
    s2Counts[s2[i].charCodeAt(0) - offset] += 1;
  }

  let matches = s2Counts.reduce(
    (acc, c, i) => acc + (c === s1Counts[i] ? 1 : 0),
    0,
  );

  let left = 0;
  let right = s1.length;

  while (right < s2.length) {
    if (matches === 26) return true;

    const idx = s2[right].charCodeAt(0) - offset;
    if (s1Counts[idx] === s2Counts[idx]) {
      matches--;
    } else if (s1Counts[idx] === s2Counts[idx] + 1) {
      matches++;
    }
    s2Counts[idx] += 1;

    const dropIdx = s2[left].charCodeAt(0) - offset;
    if (s1Counts[dropIdx] === s2Counts[dropIdx]) {
      matches--;
    } else if (s1Counts[dropIdx] === s2Counts[dropIdx] - 1) {
      matches++;
    }
    s2Counts[dropIdx] -= 1;

    left++;
    right++;
  }

  return matches === 26;
}
// permutaion of abc will be [abc, acb, bca, bac, cab, cba]
// the order of the characters doesn't matter, count the characters to see if they are equals
// export function checkInclusion(s1: string, s2: string): boolean {
//   // ab, eidbaooo
//   let left = 0;
//   let right = s1.length;
//   const target = countCharaters(s1);
//
//   while (right < s2.length) {
//     const substr = countCharaters(s2.slice(left, right));
//     if (isEqual(target, substr)) {
//       return true;
//     }
//
//     left++;
//     right++;
//   }
//
//   return false;
// }
//
// function countCharaters(str: string): Map<string, number> {
//   const counter = new Map<string, number>();
//   for (const ch of str) {
//     const count = (counter.get(ch) ?? 0) + 1;
//     counter.set(ch, count);
//   }
//   return counter;
// }
//
// function isEqual(
//   counter1: Map<string, number>,
//   counter2: Map<string, number>,
// ): boolean {
//   function isAllKeyEquals(x: Map<string, number>, y: Map<string, number>) {
//     for (const [xk, xv] of x) {
//       if (xv !== y.get(xk)) {
//         return false;
//       }
//     }
//     return true;
//   }
//
//   return counter1.size > counter2.size
//     ? isAllKeyEquals(counter1, counter2)
//     : isAllKeyEquals(counter2, counter1);
// }
