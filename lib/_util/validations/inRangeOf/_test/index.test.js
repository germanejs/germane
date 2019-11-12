const inRangeOf = require("../index");

test("should return true", () => {
  expect(inRangeOf(1, 0, 10)).toBe(true);
  expect(inRangeOf(10, 9, 12)).toBe(true);
  expect(inRangeOf(12, -1, 12.5)).toBe(true);
  expect(inRangeOf(0.5, 0, 1)).toBe(true);
});

test("should return false", () => {
  expect(inRangeOf(20, 0, 10)).toBe(false);
  expect(inRangeOf(10, 454, 11)).toBe(false);
  expect(inRangeOf(-23, 0, -9)).toBe(false);
  expect(inRangeOf(30, 120, 140)).toBe(false);
});
