export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  const dummy = new ListNode(0, head);
  let left: ListNode | null = dummy;
  let right = head;

  for (let offset = 0; offset < n; offset++) {
    right = right?.next ?? null;
  }

  while (right) {
    left = left!.next;
    right = right.next;
  }

  const target = left!.next!;
  left!.next = target?.next ?? null;
  target?.next && (target.next = null);

  return dummy.next;
}
