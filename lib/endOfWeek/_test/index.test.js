const endOfWeek = require("../index");
const germane = require("../../germane");

describe("endOfWeek returns the end of the date current week", () => {
  test("should return distance till end of week in {days|hours|minutes|seconds}", () => {
    expect(endOfWeek(germane("2019-04-12 12:45:19Z")).toISOString()).toBe(
      germane("2019-04-13 23:59:59.999").toISOString(),
    );
    expect(endOfWeek(germane("2014-11-18 12:12:12Z")).toISOString()).toBe(
      germane("2014-11-22 23:59:59.999").toISOString(),
    );
    expect(endOfWeek(germane("2018-07-14 04:12:02Z")).toISOString()).toBe(
      germane("2018-07-14 23:59:59.999").toISOString(),
    );
    expect(endOfWeek(germane("2010-07-03 23:34:09Z", "Asia/Pyongyang")).toISOString()).toBe(
      "2010-07-10T14:59:59.999Z",
    );
    expect(endOfWeek(germane("2010-07-03 23:59:09Z", "Asia/Pyongyang")).toISOString()).toBe(
      "2010-07-10T14:59:59.999Z",
    );
    expect(endOfWeek(germane("1920-01-10 23:00:00Z", "Asia/Pyongyang")).toISOString()).toBe(
      "1920-01-17T14:59:59.999Z",
    );
  });

  test("should return an error", () => {
    expect(endOfWeek(new Date("2019 01 01 23:56:90"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(endOfWeek("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfWeek(false)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
