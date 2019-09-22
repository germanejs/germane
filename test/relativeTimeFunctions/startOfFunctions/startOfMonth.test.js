const startOfMonth = require("../../../lib/startOfMonth");
const germane = require("../../../lib/germane");

describe("Returns the time passed from given date till the beginning of its month", () => {
  test("should return times passed in {days | seconds| minutes}", () => {
    expect(startOfMonth(germane("2019-09-09 12:00:00Z"))).toBe("8 days ago");
    expect(startOfMonth(germane("2017-11-30 23:59:59Z"))).toBe("29 days ago");
    expect(startOfMonth(germane("2019-01-01 00:00:01Z"))).toBe("1 second ago");
    expect(startOfMonth(new Date("2019-09-01 00:00:00Z"))).toBe("0 second ago");
    expect(startOfMonth(new Date("1990-09-01 00:10:01Z"))).toBe("10 minutes ago");
  });

  test("should throw an error (type or range)", () => {
    expect(startOfMonth(new Date("1900 19 00"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfMonth(new Date("2019 09 19").toString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
