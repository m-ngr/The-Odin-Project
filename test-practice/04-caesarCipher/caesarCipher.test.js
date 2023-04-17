import { caesarCipher } from "./caesarCipher";

test("empty string", () => {
  expect(caesarCipher("", 2)).toBe("");
});

test("non-string text", () => {
  expect(caesarCipher(5684, 2)).toBe(undefined);
});

test("non-number key", () => {
  expect(caesarCipher("AbC", true)).toBe(undefined);
});

test("no shift", () => {
  expect(caesarCipher("AbC", 0)).toBe("AbC");
});

test("shift by 1", () => {
  expect(caesarCipher("AbC", 1)).toBe("BcD");
});

test("shift by -1", () => {
  expect(caesarCipher("AbC", -1)).toBe("ZaB");
});

test("shift by 2", () => {
  expect(caesarCipher("AbC", 2)).toBe("CdE");
});

test("shift by -2", () => {
  expect(caesarCipher("AbC", -2)).toBe("YzA");
});

test("no shift for non-alphabetic", () => {
  expect(caesarCipher("51@#$", 2)).toBe("51@#$");
});
