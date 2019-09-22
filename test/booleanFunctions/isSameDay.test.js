const isSameDay = require("../../lib/isSameDay");
const germane = require("../../lib/germane");

describe("isSameDay, checks if given dates are the same", () => {
  test("should return true", () => {
    expect(isSameDay(germane("2018-12-31"), germane("2018-12-31"))).toBe(true);
    expect(isSameDay(germane("1000-01-01"), germane("1000-01-01 09:12:12Z"))).toBe(true);

    expect(isSameDay(new Date("2016-09-15T20:18:00Z"), new Date("2016-09-15"))).toBe(true);
  });

  test("should return false", () => {
    expect(isSameDay(germane("2019-06-11"), germane("2020-09-12"))).toBe(false);
    expect(isSameDay(germane("2018-12-31"), germane("2018-12-30"))).toBe(false);
    expect(isSameDay(new Date("1000-01-01 09:12:12"), new Date("1001-01-01 09:12:12Z"))).toBe(
      false,
    );
    expect(isSameDay(Date.now(), -2187648816000)).toBe(false);
    expect(isSameDay(new Date("2016-09-15T20:18:00Z"), new Date("2016-09-11"))).toBe(false);
  });
  test("should return an error", () => {
    expect(isSameDay(Date.now(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isSameDay(new Date("2019 09 05"), "")).toStrictEqual(new TypeError("Invalid Date"));

    expect(isSameDay({}, Date.now())).toStrictEqual(new TypeError("Invalid Date"));

    expect(isSameDay(new Date(""), Date.now())).toStrictEqual(new RangeError("Invalid Date"));
  });
});
