class CharacterCounter {
  #mostFreqCharacter: string | null;
  #counter: Map<string, number>;

  constructor() {
    this.#mostFreqCharacter = null;
    this.#counter = new Map();
  }

  countOfMostFreqCharacter(): number {
    return this.#mostFreqCharacter
      ? this.#counter.get(this.#mostFreqCharacter) ?? 0
      : 0;
  }

  incr(s: string) {
    if (!this.#mostFreqCharacter) {
      this.#mostFreqCharacter = s;
    }

    const count = (this.#counter.get(s) ?? 0) + 1;
    this.#counter.set(s, count);
    if (count > (this.#counter.get(this.#mostFreqCharacter) ?? 0)) {
      this.#mostFreqCharacter = s;
    }
  }

  decr(s: string) {
    if (!this.#counter.has(s)) return;
    const count = this.#counter.get(s)! - 1;
    this.#counter.set(s, count);
    if (this.#mostFreqCharacter === s) {
      let max = 0;
      for (const [ch, c] of this.#counter) {
        if (c > max) {
          this.#mostFreqCharacter = ch;
          max = c;
        }
      }
    }
  }
}

export function characterReplacement(s: string, k: number): number {
  // AABABBA
  // window size - max(count(character)) <= k
  // would get even bigger window with the decreasing of max(count(character))
  // which leads to keep tracking the max count of most freq character will be fine.

  // const counter = new CharacterCounter();
  let maxFreqCharacterCount = 0;
  const counter = new Map<string, number>();
  let answer = 0;
  let begin = 0;
  let end = 0;
  const windowSize = () => end - begin + 1;

  while (end < s.length) {
    // counter.incr(s[end]);
    const count = (counter.get(s[end]) ?? 0) + 1;
    counter.set(s[end], count);

    maxFreqCharacterCount = Math.max(maxFreqCharacterCount, count);
    // let count = counter.countOfMostFreqCharacter();

    while (windowSize() - maxFreqCharacterCount > k) {
      // counter.decr(s[begin]);
      counter.set(s[begin], counter.get(s[begin])! - 1);
      begin++;
    }

    answer = Math.max(answer, windowSize());
    end++;
  }

  return answer;
}
