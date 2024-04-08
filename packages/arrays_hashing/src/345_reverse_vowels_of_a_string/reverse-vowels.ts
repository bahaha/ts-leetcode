const _vowels: string[] = "aeiouAEIOU".split("");
function isVowel(s: string): boolean {
  return _vowels.includes(s);
}

export function reverseVowels(s: string): string {
  const vowels = s.split("").filter(isVowel).reverse();
  const characters: string[] = [];
  let i = 0;
  for (const ch of s) {
    if (isVowel(ch)) {
      characters.push(vowels[i++]);
      continue;
    }
    characters.push(ch);
  }
  return characters.join("");
}

export function reverseVowels2(s: string): string {
  const output: string[] = s.split("");
  let left = 0;
  let right = s.length - 1;

  if (left === right) return s;

  while (left < right) {
    while (left < right && !isVowel(s[left])) {
      left++;
    }
    while (left < right && !isVowel(s[right])) {
      right--;
    }

    if (left < right) {
      output[left] = s[right];
      output[right] = s[left];
      left++;
      right--;
    }
  }
  return output.join("");
}
