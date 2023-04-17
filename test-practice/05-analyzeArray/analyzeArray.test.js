import { analyzeArray } from "./analyzeArray";

test("non-array value", () => {
  expect(analyzeArray("Hello")).toEqual(undefined);
});

test("array of non-numbers", () => {
  expect(analyzeArray([1, 2, "5"])).toEqual(undefined);
});

test("empty array", () => {
  expect(analyzeArray([])).toEqual(undefined);
});

test("array of single number", () => {
  expect(analyzeArray([2])).toEqual({ average: 2, min: 2, max: 2, length: 1 });
});

test("array of two numbers", () => {
  expect(analyzeArray([2, 4])).toEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 2,
  });
});

test("array of negative numbers", () => {
  expect(analyzeArray([-2, -4])).toEqual({
    average: -3,
    min: -4,
    max: -2,
    length: 2,
  });
});

test("array with fractional numbers", () => {
  expect(analyzeArray([0, -2.5, 3.5]).average).toBeCloseTo(0.333333);

  expect(analyzeArray([0, -2.5, 3.5])).toMatchObject({
    min: -2.5,
    max: 3.5,
    length: 3,
  });
});
