class TrieNode {
  children: Map<string, TrieNode>;
  endOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.endOfWord = false;
  }
}

export class Trie {
  #head: TrieNode;

  constructor() {
    this.#head = new TrieNode();
  }

  insert(word: string): void {
    let node = this.#head;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;
    }
    node.endOfWord = true;
  }

  search(word: string): boolean {
    let node = this.#head;
    for (const ch of word) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch)!;
    }
    return node.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.#head;
    for (const ch of prefix) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch)!;
    }
    return true;
  }
}
