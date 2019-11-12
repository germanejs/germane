const endOfHour = require("../index");
const germane = require("../../germane");

describe("endOfHour returns the difference from now(date and time given) to the end of its hour", () => {
  test("should return in {Minutes | Seconds}", () => {
    expect(endOfHour(new Date("1999-05-18T23:19:45Z"))).toStrictEqual(
      new Date("1999-05-18 23:59:59.999Z"),
    );
    expect(endOfHour(new Date("2019-09-09 12:00:01Z"))).toStrictEqual(
      new Date("2019-09-09 12:59:59.999Z"),
    );
    expect(endOfHour(germane("2019-11-23 23:59:59Z")).toISOString()).toStrictEqual(
      germane("2019-11-23 23:59:59.999Z").toISOString(),
    );
    expect(endOfHour(germane("2009-01-18 23:13:12Z", "Africa/Cairo")).toISOString()).toStrictEqual(
      germane("2009-01-18 23:59:59.999Z").toISOString(),
    );
    expect(endOfHour(germane("2013-07-04 21:01:01Z")).toISOString()).toStrictEqual(
      germane("2013-07-04 21:59:59.999Z").toISOString(),
    );
  });

  test("should throw an error", () => {
    expect(endOfHour(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfHour(new Date("2019 19 09 23:12:01"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(endOfHour(new Date("2019 09 09 00:00:00").toISOString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
