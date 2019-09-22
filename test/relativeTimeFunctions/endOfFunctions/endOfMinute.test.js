const endOfMinute = require("../../../lib/endOfMinute");
const germane = require("../../../lib/germane");

describe("endOfMinute return the end of minute for a given time", () => {
  test("should return the end of minute {in seconfds for given time}", () => {
    expect(endOfMinute(germane("2018-10-12 05:12:45Z"))).toBe("In 14 seconds");
    expect(endOfMinute(germane("2005-03-21 03:00:00Z"))).toBe("In 59 seconds");
    expect(endOfMinute(new Date("1897-12-12 18:11:06Z"))).toBe("In 53 seconds");
    expect(endOfMinute(new Date("2019-01-01 01:01:58Z"))).toBe("In 1 second");
  });

  test("should throw an error", () => {
    expect(endOfMinute(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfMinute("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfMinute({})).toStrictEqual(new TypeError("Invalid Date"));
  });
});
