const inArray = require("../index");

describe("check is a value exist in an array, returns true or dalse", () => {
  test("should return true if the values of search array exist in the provided look up array", () => {
    expect(inArray([12, 89, 12, 9, 88, 12, 43, 12, 34], [9, 88, 12, 34])).toBe(true);
  });

  test("should return false if the values of search array does not exist in the provided look up array", () => {
    expect(inArray([12, 89, 12, 9, 88, 12, 43, 12, 34], [19, 818, 2, 4])).toBe(false);
  });

  test("should return false for single items", () => {
    expect(inArray([12, 89, 12, 9, 88, 12, 43, 12, 34], 0)).toBe(false);
  });
});
