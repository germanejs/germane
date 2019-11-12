const isLastWeek = require("../index");
const germane = require("../../germane");

describe("isLastWeek, returns on boolean, whether second given date is in the previous week of the first", () => {
  test("should return true", () => {
    expect(isLastWeek(new Date("2019 01 01"), new Date("2018 12 25"))).toBe(true);
    expect(isLastWeek(new Date("2012 09 15"), new Date("2012 09 08"))).toBe(true);
    expect(isLastWeek(germane("2018-02-14"), germane("2018-02-09"))).toBe(true);
    expect(isLastWeek(germane("2030-11-01"), germane("2030-10-20"))).toBe(true);
    expect(isLastWeek(germane("2019-12-12T20:19:00"), germane("2019-12-01T20:19:00"))).toBe(true);
  });

  test("should return false", () => {
    expect(isLastWeek(new Date("2019 12 01"), new Date("2018 12 31"))).toBe(false);
    expect(isLastWeek(new Date("2012 09 15"), new Date("2012 09 01"))).toBe(false);
    expect(isLastWeek(germane("2018-02-14"), germane("2018-01-31"))).toBe(false);
    expect(isLastWeek(germane("2030-11-11"), germane("2030-11-20"))).toBe(false);
    expect(isLastWeek(new Date("2019-12-12T20:19:00"), new Date("2019-12-10T20:19:00"))).toBe(
      false,
    );
  });

  test("should return an error", () => {
    expect(isLastWeek(Date.now(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isLastWeek(new Date("2019 09 05"), "")).toStrictEqual(new TypeError("Invalid Date"));

    expect(isLastWeek({}, Date.now())).toStrictEqual(new TypeError("Invalid Date"));

    expect(isLastWeek(new Date().toISOString(), Date.now())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
    expect(isLastWeek(new Date("2019 19 23"), Date.now())).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });
});
