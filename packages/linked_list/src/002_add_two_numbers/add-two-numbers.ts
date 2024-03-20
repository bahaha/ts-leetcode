export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;
  let carry = 0;

  const appnedDigit = (...nums: number[]) => {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    carry = ~~(sum / 10);
    tail.next = new ListNode(sum % 10);
    tail = tail.next;
  };

  while (l1 && l2) {
    appnedDigit(l1.val, l2.val, carry);
    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    appnedDigit(l1.val, carry);
    l1 = l1.next;
  }

  while (l2) {
    appnedDigit(l2.val, carry);
    l2 = l2.next;
  }

  if (carry) {
    tail.next = new ListNode(carry);
  }

  return dummy.next;
}
