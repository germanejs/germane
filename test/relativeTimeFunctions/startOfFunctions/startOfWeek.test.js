const startOfWeek = require("../../../lib/startOfWeek");
const germane = require("../../../lib/germane");

describe("Returns the startDate of the current week of given date", () => {
  test("should return {values(how many days since the startDate of week)} in days", () => {
    expect(startOfWeek(germane("1980-12-31 09:09:09Z"))).toBe("3 days ago");
    expect(startOfWeek(germane("1975-10-05 00:12:09Z"))).toBe("12 minutes ago");

    expect(startOfWeek(germane("2019-08-30"))).toBe("5 days ago");

    expect(startOfWeek(new Date("2060-01-01 19:59:58Z"))).toBe("4 days ago");

    expect(startOfWeek(new Date("2060-01-04 00:00:58Z"))).toBe("58 seconds ago");
    expect(startOfWeek(new Date("2060-01-04 00:00:00Z"))).toBe("0 second ago");
  });

  test("should throw an error (type or range)", () => {
    expect(startOfWeek(new Date("19 19 19"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfWeek(germane("2019 09 19 23:09:60"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(startOfWeek(new Date("2019 19 19").toLocaleDateString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
