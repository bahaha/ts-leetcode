type Node = {
  nodes: Record<string, Node>;
  endOfWord: boolean;
};

function newNode(): Node {
  return { nodes: {}, endOfWord: false };
}

export class WordDictionary {
  #head: Node;
  constructor() {
    this.#head = newNode();
  }

  addWord(word: string): void {
    let node = this.#head;
    for (const ch of word) {
      if (!node.nodes[ch]) {
        node.nodes[ch] = newNode();
      }
      node = node.nodes[ch];
    }
    node.endOfWord = true;
  }

  #search(word: string, head: Node | undefined): boolean {
    for (let i = 0; i < word.length; i++) {
      if (!head) return false;
      const ch = word[i];
      if (ch === ".") {
        const target = word.slice(i + 1);
        return Object.values(head.nodes).some((node) =>
          this.#search(target, node),
        );
      } else {
        head = head.nodes[ch];
      }
    }
    return Boolean(head?.endOfWord);
  }

  search(word: string): boolean {
    return this.#search(word, this.#head);
  }
}
