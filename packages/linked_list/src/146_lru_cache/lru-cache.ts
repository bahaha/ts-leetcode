type Node = {
  value: number;
  prev?: Node;
  next?: Node;
};

function createNode(value: number) {
  return { value };
}

export class LRUCacheMap {
  #lookup: Map<number, number>;
  constructor(private capacity: number) {
    this.#lookup = new Map();
  }

  get(key: number): number {
    const cache = this.#lookup.get(key);
    if (cache === undefined) {
      return -1;
    } else {
      this.#lookup.delete(key);
      this.#lookup.set(key, cache);
      return cache;
    }
  }

  put(key: number, value: number): void {
    const cache = this.#lookup.get(key);
    if (cache) {
      this.#lookup.delete(key);
      this.#lookup.set(key, value);
    } else {
      this.#lookup.set(key, value);
      if (this.#lookup.size > this.capacity) {
        const head = this.#lookup.keys().next().value;
        this.#lookup.delete(head);
      }
    }
  }
}

export class LRUCache {
  #length: number;
  #head?: Node;
  #tail?: Node;
  #lookup: Map<number, Node>;
  #reverseLookup: Map<Node, number>;

  constructor(private capacity: number) {
    this.#length = 0;
    this.#lookup = new Map();
    this.#reverseLookup = new Map();
  }

  get(key: number): number {
    const cacheHit = this.#lookup.get(key);
    if (cacheHit === undefined) {
      return -1;
    } else {
      // detach the cache hit
      this.detach(cacheHit);
      // prepend the cache hit to the head of the linked list to make it most recently used.
      this.prepend(cacheHit);
      return cacheHit.value;
    }
  }

  put(key: number, value: number): void {
    const cacheHit = this.#lookup.get(key);
    if (cacheHit === undefined) {
      // if no cache hit > insert node to the tail of the linked list
      const node = createNode(value);
      this.prepend(node);
      this.#lookup.set(key, node);
      this.#reverseLookup.set(node, key);
      this.#length++;

      // if the length > capacity, then detach the tail to drop it.
      this.evict();
    } else {
      // if cache hit, prepend the cache hit to the head to make it most recently used.
      cacheHit.value = value;
      this.detach(cacheHit);
      this.prepend(cacheHit);
    }
  }

  private detach(node: Node) {
    if (node.prev && node.next) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    if (node === this.#head) {
      this.#head = node.next;
    }

    if (node === this.#tail) {
      this.#tail = node.prev;
    }

    node.prev = undefined;
    node.next = undefined;
  }

  private prepend(node: Node) {
    if (!this.#head) {
      this.#head = this.#tail = node;
      return;
    }

    node.next = this.#head;
    this.#head.prev = node;
    this.#head = node;
  }

  private evict() {
    if (this.#length <= this.capacity || !this.#tail) {
      return;
    } else {
      const target = this.#tail;
      this.detach(target);
      const key = this.#reverseLookup.get(target)!;
      this.#lookup.delete(key);
      this.#reverseLookup.delete(target);
      this.#length--;
    }
  }
}
