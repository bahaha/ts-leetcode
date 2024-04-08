export function reverseWords(s: string): string {
  return s.split(" ").filter(Boolean).reverse().join(" ");
}
