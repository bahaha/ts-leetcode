export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) return;

  let firstHalf = head;
  const middleNode = findNodeAtHalf(head);
  let secondHalf = reverseList(middleNode.next);
  middleNode.next = null;
  while (secondHalf !== null) {
    const h = firstHalf.next!;
    firstHalf.next = secondHalf;
    secondHalf = secondHalf.next;
    firstHalf.next.next = h;
    firstHalf = h;
  }
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

export function findNodeAtHalf(head: ListNode): ListNode {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next!.next!;
  }

  return slow;
}
