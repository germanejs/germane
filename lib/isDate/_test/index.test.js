const isDate = require("../index");
const germane = require("../../germane");

describe("isDate, checks whether a value (x) is a date type", () => {
  test("should return true", () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date(1200, 1, 12, 14, 13, 4, 200))).toBe(true);
    expect(isDate(new Date("2000/01/01"))).toBe(true);
    expect(isDate(germane(Date.now()))).toBe(true);
    expect(isDate(germane("2019W111"))).toBe(true);
    expect(isDate(germane("2019-09-12T12:09:18.670Z"))).toBe(true);
    expect(isDate(germane("/Date(1546679820000)/"))).toBe(true);
  });

  test("should return false", () => {
    expect(isDate("" + new Date("2019-9-2T12:09:18.670Z"))).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(1 === 1)).toBe(false);
    expect(isDate(Date.now)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(Date)).toBe(false);
  });
});
