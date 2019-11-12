const endOfMinute = require("../index");
const germane = require("../../germane");

describe("endOfMinute return the end of minute for a given time", () => {
  test("should return the end of minute {in seconfds for given time}", () => {
    expect(endOfMinute(germane("2018-10-12 05:12:45Z", "Africa/Accra")).toISOString()).toBe(
      "2018-10-12T05:12:59.999Z",
    );
    // 03:00
    expect(endOfMinute(germane("2005-03-21 03:00:00Z", "Europe/Volgograd")).toISOString()).toBe(
      "2005-03-21T03:00:59.999Z",
    );
    expect(endOfMinute(germane("1897-12-12 18:11:06Z", "Australia/Brisbane")).toISOString()).toBe(
      "1897-12-12T18:11:59.999Z",
    );
  });

  test("should throw an error", () => {
    expect(endOfMinute(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfMinute("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfMinute({})).toStrictEqual(new TypeError("Invalid Date"));
  });
});
