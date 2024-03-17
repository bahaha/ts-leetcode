import { expect, test } from "vitest";
import {
  reorderList,
  findNodeAtHalf,
  reverseList,
  ListNode,
} from "./reorder-list";

test("reorder list on odd nodes", () => {
  const n1 = new ListNode(1);
  const n2 = new ListNode(2);
  const n3 = new ListNode(3);
  const n4 = new ListNode(4);
  const n5 = new ListNode(5);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;

  reorderList(n1);
  expect(n1.next).toBe(n5);
  expect(n5.next).toBe(n2);
  expect(n2.next).toBe(n4);
  expect(n4.next).toBe(n3);
  expect(n3.next).toBe(null);
});

test("reorder list on even nodes", () => {
  const n1 = new ListNode(1);
  const n2 = new ListNode(2);
  const n3 = new ListNode(3);
  const n4 = new ListNode(4);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;

  reorderList(n1);
  expect(n1.next).toBe(n4);
  expect(n4.next).toBe(n2);
  expect(n2.next).toBe(n3);
  expect(n3.next).toBe(null);
});

test("do nothing for single node or null head", () => {
  reorderList(null);

  const n1 = new ListNode(1);
  reorderList(n1);
});

test("return middle ref", () => {
  const n1 = new ListNode(1);
  const n2 = new ListNode(2);
  const n3 = new ListNode(3);
  const n4 = new ListNode(4);
  const n5 = new ListNode(5);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;

  expect(findNodeAtHalf(n1)).toBe(n3);

  const n6 = new ListNode(6);
  n5.next = n6;
  expect(findNodeAtHalf(n1)).toBe(n3);
});

test("reverse nodes", () => {
  const n1 = new ListNode(1);
  const n2 = new ListNode(2);
  const n3 = new ListNode(3);
  const n4 = new ListNode(4);
  const n5 = new ListNode(5);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;

  const reversed = reverseList(n1);
  expect(reversed).toBe(n5);
  expect(reversed.next).toBe(n4);
  expect(reversed.next!.next).toBe(n3);
  expect(reversed.next!.next!.next).toBe(n2);
  expect(reversed.next!.next!.next!.next).toBe(n1);
});
