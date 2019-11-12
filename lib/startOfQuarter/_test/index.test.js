const startOfQuarter = require("../index");
const germane = require("../../germane");

describe("Returns the difference from beginning of the given dates quarter till the current given date", () => {
  test("should return the quarter start", () => {
    expect(startOfQuarter(germane("20110401T010015Z", "Africa/Lagos")).toISOString()).toBe(
      "2011-03-31T23:00:00.000Z",
    );
    // -06:00
    expect(startOfQuarter(germane("19990101T000008Z", "America/Mexico_City")).toISOString()).toBe(
      "1998-10-01T06:00:00.000Z",
    );
    // 09:18
    expect(startOfQuarter(germane("1000-W12-3", "Asia/Tokyo")).toISOString()).toBe(
      "0999-12-31T14:42:00.000Z",
    );
  });

  test("should throw an error (type or range)", () => {
    expect(startOfQuarter(new Date("1900 19 00"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfQuarter(new Date("2019 09 19").toString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
