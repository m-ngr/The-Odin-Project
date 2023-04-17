import { capitalize } from "./capitalize";

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("single uppercase char", () => {
  expect(capitalize("A")).toBe("A");
});

test("single lowercase char", () => {
  expect(capitalize("b")).toBe("B");
});

test("lowercase string", () => {
  expect(capitalize("mahmoud")).toBe("Mahmoud");
});

test("uppercase string", () => {
  expect(capitalize("ELNAGAR")).toBe("Elnagar");
});

test("mixed-case string", () => {
  expect(capitalize("HeLlO, WoRld!")).toBe("Hello, world!");
});

test("no capitalization on strings that starts with symbols", () => {
  expect(capitalize("#web DeV!")).toBe("#web dev!");
});

test("non-string value", () => {
  expect(capitalize(123)).toBe(undefined);
});
