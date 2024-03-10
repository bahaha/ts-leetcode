import { expect, test } from "vitest";
import { Solution } from "./encode-decode-strings";

test("non conflict character with delimiter", () => {
  const s = new Solution();
  const input = ["123", "4567", "78901"];
  const encoded = s.encode(input);
  expect(encoded).toBe("3!1234!45675!78901");
  const decoded = s.decode(encoded);
  expect(decoded).toEqual(input);
});

test("word contains delimiter", () => {
  const s = new Solution();
  const input = ["abc", "def!", "ghij!"];
  const encoded = s.encode(input);
  expect(encoded).toBe("3!abc4!def!5!ghij!");
  const decoded = s.decode(encoded);
  expect(decoded).toEqual(input);
});

test("word contains numbers and delimiter", () => {
  const s = new Solution();
  const input = ["abc", "de2!", "5!ghi"];
  const encoded = s.encode(input);
  expect(encoded).toBe("3!abc4!de2!5!5!ghi");
  const decoded = s.decode(encoded);
  expect(decoded).toEqual(input);
});
