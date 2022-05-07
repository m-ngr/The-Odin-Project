import { calculator } from "./calculator";

describe(calculator.add, () => {
  test("adding two positive numbers", () => {
    expect(calculator.add(1, 5)).toBe(6);
  });

  test("adding two negative numbers", () => {
    expect(calculator.add(-2, -4)).toBe(-6);
  });

  test("adding positive to negative", () => {
    expect(calculator.add(2, -4)).toBe(-2);
  });

  test("adding fractions", () => {
    expect(calculator.add(1.25, 2.21)).toBeCloseTo(3.46);
  });

  test("adding non-number to number", () => {
    expect(calculator.add("1.25", 2.21)).toBe(undefined);
  });

  test("adding number to non-number", () => {
    expect(calculator.add(1.25, true)).toBe(undefined);
  });
});

describe(calculator.subtract, () => {
  test("subtracting two positive numbers", () => {
    expect(calculator.subtract(1, 5)).toBe(-4);
  });

  test("subtracting two negative numbers", () => {
    expect(calculator.subtract(-2, -4)).toBe(2);
  });

  test("subtracting negative from positive", () => {
    expect(calculator.subtract(2, -4)).toBe(6);
  });

  test("subtracting positive from negative", () => {
    expect(calculator.subtract(-2, 4)).toBe(-6);
  });

  test("subtracting fractions", () => {
    expect(calculator.subtract(1.25, 2.21)).toBeCloseTo(-0.96);
  });

  test("subtracting number from non-number", () => {
    expect(calculator.subtract("1.25", 2.21)).toBe(undefined);
  });

  test("subtracting non-number from number", () => {
    expect(calculator.subtract(1.25, true)).toBe(undefined);
  });
});

describe(calculator.divide, () => {
  test("dividing two positive numbers", () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });

  test("dividing two negative numbers", () => {
    expect(calculator.divide(-8, -4)).toBe(2);
  });

  test("dividing negative by positive", () => {
    expect(calculator.divide(-8, 4)).toBe(-2);
  });

  test("dividing positive by negative", () => {
    expect(calculator.divide(8, -4)).toBe(-2);
  });

  test("dividing to fractional numbers", () => {
    expect(calculator.divide(9, 6)).toBeCloseTo(1.5);
  });

  test("dividing to fractional numbers", () => {
    expect(calculator.divide(1, 3)).toBeCloseTo(0.33333);
  });

  test("dividing positive by zero", () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
  });

  test("dividing negative by zero", () => {
    expect(calculator.divide(-5, 0)).toBe(-Infinity);
  });

  test("dividing number by non-number", () => {
    expect(calculator.divide(1.25, "2.21")).toBe(undefined);
  });

  test("dividing non-number by number", () => {
    expect(calculator.divide(true, 2.3)).toBe(undefined);
  });
});

describe(calculator.multiply, () => {
  test("multiplying two positive numbers", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test("multiplying two negative numbers", () => {
    expect(calculator.multiply(-2, -4)).toBe(8);
  });

  test("multiplying negative and positive", () => {
    expect(calculator.multiply(-2, 4)).toBe(-8);
  });

  test("multiplying fractional numbers", () => {
    expect(calculator.multiply(1.5, 2.5)).toBeCloseTo(3.75);
  });

  test("multiplying by zero", () => {
    expect(calculator.multiply(15, 0)).toBe(0);
  });

  test("multiplying positive with infinity", () => {
    expect(calculator.multiply(5, Infinity)).toBe(Infinity);
  });

  test("multiplying negative with infinity", () => {
    expect(calculator.multiply(-5, Infinity)).toBe(-Infinity);
  });

  test("multiplying number with non-number", () => {
    expect(calculator.multiply(1.25, "2.21")).toBe(undefined);
  });

  test("multiplying non-number with number", () => {
    expect(calculator.multiply(true, 2.3)).toBe(undefined);
  });
});
