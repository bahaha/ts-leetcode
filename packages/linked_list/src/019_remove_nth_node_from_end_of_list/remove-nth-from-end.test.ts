import { expect, test } from "vitest";
import { removeNthFromEnd, ListNode } from "./remove-nth-from-end";

test("remove the last nth element", () => {
  const n1 = new ListNode(1);
  const n2 = new ListNode(2);
  const n3 = new ListNode(3);
  const n4 = new ListNode(4);
  const n5 = new ListNode(5);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;

  const result = removeNthFromEnd(n1, 2);
  expect(result).toBe(n1);
  expect(result!.next).toBe(n2);
  expect(result!.next!.next).toBe(n3);
  expect(result!.next!.next!.next).toBe(n5);
  expect(result!.next!.next!.next!.next).toBe(null);
});

test("return null if remove the only element", () => {
  const n1 = new ListNode(1);
  expect(removeNthFromEnd(n1, 1)).toBe(null);
});

test("remove the first element", () => {
  const n1 = new ListNode(1);
  const n2 = new ListNode(2);
  const n3 = new ListNode(3);
  const n4 = new ListNode(4);
  const n5 = new ListNode(5);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;

  const result = removeNthFromEnd(n1, 5);
  expect(result).toBe(n2);
  expect(result!.next).toBe(n3);
  expect(result!.next!.next).toBe(n4);
  expect(result!.next!.next!.next).toBe(n5);
  expect(result!.next!.next!.next!.next).toBe(null);
});
