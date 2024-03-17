export class Node {
  val: number;
  next: Node | null;
  random: Node | null;

  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val ?? 0;
    this.next = next ?? null;
    this.random = random ?? null;
  }
}

export function copyRandomList(head: Node | null): Node | null {
  const nodes = new Map<Node, Node>();

  let curr = head;
  while (curr) {
    nodes.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  for (const [n, clone] of nodes) {
    if (n.next) {
      clone.next = nodes.get(n.next)!;
    }
    if (n.random) {
      clone.random = nodes.get(n.random)!;
    }
  }

  return nodes.values().next().value;
}
