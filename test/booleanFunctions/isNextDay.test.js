const isNextDay = require("../../lib/isNextDay");
const germane = require("../../lib/germane");

describe("isNextDay, checks if second is next after first", () => {
  test("should return true", () => {
    expect(isNextDay(new Date("2019-01-01"), new Date("2018-12-31"))).toBe(true);
    expect(isNextDay(new Date("0999-01-02 09:12:12Z"), new Date("0999-01-01"))).toBe(true);
    expect(isNextDay(germane("1970-01-02"), germane("1970-01-01"))).toBe(true);
    expect(isNextDay(germane("2016-09-16"), germane("2016-09-15T20:18:00Z"))).toBe(true);

    expect(isNextDay(-2187562416000, -2187648816000)).toBe(true);
  });

  test("should return false", () => {
    expect(isNextDay(germane("2019-06-11"), germane("2020-09-12"))).toBe(false);
    expect(isNextDay(germane("2018-12-30"), germane("2018-12-31"))).toBe(false);
    expect(isNextDay(germane("1000-01-01 09:12:12"), germane("1000-01-01 09:12:12"))).toBe(false);
    expect(isNextDay(Date.now(), Date.now())).toBe(false);
    expect(isNextDay(new Date("2016-09-15T20:18:00Z"), new Date("2016-09-15"))).toBe(false);
  });
  test("should throw an error", () => {
    expect(isNextDay(Date.now(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isNextDay(new Date("2019 09 05"), "")).toStrictEqual(new TypeError("Invalid Date"));

    expect(isNextDay({}, Date.now())).toStrictEqual(new TypeError("Invalid Date"));

    expect(isNextDay(new Date().toISOString(), Date.now())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
    expect(isNextDay(new Date(""), Date.now())).toStrictEqual(new RangeError("Invalid Date"));
  });
});
