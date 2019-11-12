const isToday = require("../index");
const germane = require("../../germane");

describe("isToday, compares given date to local current date and returns a boolean, on whether given date is same as the local date", () => {
  test("should return true", () => {
    expect(isToday(Date.now())).toBe(true);
    expect(isToday(germane())).toBe(true);
  });

  // may return true depending on your machine's date time.
  test("should return false", () => {
    expect(isToday(new Date("2010 01 01"))).toBe(false);
    expect(isToday(new Date("1970 01 01"))).toBe(false);
  });
  test("should return an error", () => {
    expect(isToday(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isToday("")).toStrictEqual(new TypeError("Invalid Date"));

    expect(isToday({})).toStrictEqual(new TypeError("Invalid Date"));

    expect(isToday(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
