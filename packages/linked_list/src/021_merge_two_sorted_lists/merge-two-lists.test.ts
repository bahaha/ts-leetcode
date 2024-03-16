import { expect, test } from "vitest";
import { mergeTwoLists, ListNode } from "./merge-two-lists";

test("merge two sorted lists", () => {
  const merged = mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(5))),
  );

  expect(merged!.val).toBe(1);
  expect(merged!.next!.val).toBe(1);
  expect(merged!.next!.next!.val).toBe(2);
  expect(merged!.next!.next!.next!.val).toBe(3);
  expect(merged!.next!.next!.next!.next!.val).toBe(4);
  expect(merged!.next!.next!.next!.next!.next!.val).toBe(5);
});
