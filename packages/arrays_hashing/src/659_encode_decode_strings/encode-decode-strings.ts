export class Solution {
  private delimiter = "!";

  encode(strs: string[]): string {
    return strs.reduce(
      (acc, curr) => acc + curr.length + this.delimiter + curr,
      "",
    );
  }

  decode(str: string): string[] {
    const output: string[] = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== this.delimiter) {
        j++;
      }
      const len = Number(str.slice(i, j));
      output.push(str.slice(j + 1, j + 1 + len));
      i = j + 1 + len;
    }

    return output;
  }
}
