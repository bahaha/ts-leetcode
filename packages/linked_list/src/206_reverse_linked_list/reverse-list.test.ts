import { expect, test } from "vitest";
import { reverseList, reverseListRecursive, ListNode } from "./reverse-list";

test("reverse empty list", () => {
  expect(reverseList(null)).toBe(null);
  expect(reverseListRecursive(null)).toBe(null);
});

test("the same if there is only one element", () => {
  const nodes = new ListNode(1);
  expect(reverseList(nodes)).toBe(nodes);
  expect(reverseListRecursive(nodes)).toBe(nodes);
});

test("reverse list", () => {
  const one = new ListNode(1);
  const two = new ListNode(2);
  const three = new ListNode(3);
  one.next = two;
  two.next = three;

  const reversed = reverseList(one);
  expect(reversed).toBe(three);
  expect(reversed!.next).toBe(two);
  expect(reversed!.next!.next).toBe(one);

  const original = reverseListRecursive(reversed);
  expect(original).toBe(one);
  expect(original!.next).toBe(two);
  expect(original!.next!.next).toBe(three);
});
