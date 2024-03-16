export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let newHead: ListNode | null = head;
  if (head.next) {
    newHead = reverseListRecursive(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
}

export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
