import { expect, test } from "vitest";
import { addTwoNumbers, ListNode } from "./add-two-numbers";

test("sum numbers if all sum of two numbers are lower than 10", () => {
  const ans = addTwoNumbers(
    new ListNode(1, new ListNode(2, new ListNode(3))),
    new ListNode(4, new ListNode(5, new ListNode(6))),
  );

  expect(asNum(ans)).toBe(975);
});

test("sum numbers if over 10 in same length of numbers", () => {
  const ans = addTwoNumbers(
    new ListNode(8, new ListNode(2, new ListNode(3))),
    new ListNode(4, new ListNode(5, new ListNode(6))),
  );

  expect(asNum(ans)).toBe(982);
});

test("append digits prefix with carry over 10", () => {
  const ans = addTwoNumbers(
    new ListNode(6, new ListNode(4, new ListNode(5))),
    new ListNode(4, new ListNode(5, new ListNode(6))),
  );

  expect(asNum(ans)).toBe(1200);
});

test("sum numbers if the len of numbers is different", () => {
  const ans = addTwoNumbers(
    new ListNode(
      6,
      new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(2)))),
    ),
    new ListNode(4, new ListNode(5, new ListNode(6))),
  );

  expect(asNum(ans)).toBe(22200);
  const answer = addTwoNumbers(
    new ListNode(4, new ListNode(5, new ListNode(6))),
    new ListNode(
      6,
      new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(2)))),
    ),
  );
  expect(asNum(answer)).toBe(22200);
});

function asNum(head: ListNode | null) {
  if (!head) return -1;
  const digits = [];
  let tail: ListNode | null = head;
  while (tail) {
    digits.push(tail.val);
    tail = tail.next;
  }
  digits.reverse();
  return ~~digits.join("");
}
