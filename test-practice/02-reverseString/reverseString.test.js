import { reverseString } from "./reverseString";

test("empty string", () => {
  expect(reverseString("")).toBe("");
});

test("single char string", () => {
  expect(reverseString("a")).toBe("a");
});

test("simple string", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("palindrome string", () => {
  expect(reverseString("abcba")).toBe("abcba");
});

test("random string", () => {
  expect(reverseString("AREWGF%^Y67y5hgy45t534")).toBe(
    "435t54ygh5y76Y^%FGWERA"
  );
});

test("non-string value", () => {
  expect(reverseString(123)).toBe(undefined);
});
