const endOfDecade = require("../index");
const germane = require("../../germane");
describe("endOfDecade returns the end of a given year's decade", () => {
  test("should return 2019-12-31T23:59:59.999Z", () => {
    expect(endOfDecade(germane("2019-04-23T11:09:27.091Z", "UTC")).toISOString()).toBe(
      "2019-12-31T23:59:59.999Z",
    );
  });
  test("should return 1999-12-31T23:59:59.999Z", () => {
    expect(endOfDecade(germane("1994-02-15T09:11:09.234Z", "UTC")).toISOString()).toBe(
      "1999-12-31T23:59:59.999Z",
    );
  });
  test("should return 2099-12-31T23:59:59.999Z", () => {
    expect(endOfDecade(germane("2098-04-23T11:09:27.091Z", "America/New_York")).toISOString()).toBe(
      "2100-01-01T04:59:59.999Z",
    );
  });
  test("should return 1989-12-31T23:59:59.999Z", () => {
    expect(endOfDecade(germane("19811111T110927Z", "Africa/Lagos")).toISOString()).toBe(
      "1989-12-31T22:59:59.999Z",
    );
  });

  test("should return an error", () => {
    expect(endOfDecade(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfDecade("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfDecade({})).toStrictEqual(new TypeError("Invalid Date"));
  });
});
