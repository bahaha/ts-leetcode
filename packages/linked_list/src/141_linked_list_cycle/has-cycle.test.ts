import { expect, test } from "vitest";
import { hasCycle, ListNode } from "./has-cycle";

test("return false if no cycle", () => {
  expect(hasCycle(new ListNode(1, new ListNode(2)))).toBe(false);
});

test("return false if only one elements or no element", () => {
  expect(hasCycle(new ListNode(1))).toBe(false);
  expect(hasCycle(null)).toBe(false);
});

test("return true if there is a cycle", () => {
  const three = new ListNode(3);
  const two = new ListNode(2);
  const zero = new ListNode(0);
  const nFour = new ListNode(-4);

  three.next = two;
  two.next = zero;
  zero.next = nFour;
  nFour.next = two;

  expect(hasCycle(three)).toBe(true);
});
