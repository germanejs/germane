const endOfMonth = require("../index");
const germane = require("../../germane");

describe("endOfMonth returns the end of the fien dates' month in either days|hours|minutes|seconds", () => {
  test("should return the difference from each given date to its month end ", () => {
    expect(
      endOfMonth(germane("1987-03-31 23:59:59Z", "Africa/Windhoek")).toISOString(),
    ).toStrictEqual("1987-04-30T21:59:59.999Z");

    expect(
      endOfMonth(germane(new Date("2017-11-21"), "Asia/Pyongyang")).toISOString(),
    ).toStrictEqual("2017-11-30T15:29:59.999Z");

    expect(
      endOfMonth(germane("2013-09-09 12:34:12Z", "America/Los_Angeles")).toISOString(),
    ).toStrictEqual("2013-10-01T06:59:59.999Z");

    expect(
      endOfMonth(germane("2014-12-31 20:12:45Z", "Australia/Brisbane")).toISOString(),
    ).toStrictEqual("2015-01-31T13:59:59.999Z");

    expect(
      endOfMonth(germane("2014-09-30 23:56:59Z", "Antarctica/South_Pole")).toISOString(),
    ).toStrictEqual("2014-10-31T10:59:59.999Z");
  });
  test("should throw an error", () => {
    expect(endOfMonth(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfMonth("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfMonth(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
