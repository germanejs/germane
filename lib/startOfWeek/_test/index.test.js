const startOfWeek = require("../index");
const germane = require("../../germane");

describe("Returns the current of the current week of given date", () => {
  test("should return the week start", () => {
    // +09:00
    expect(startOfWeek(germane("1980-12-31 09:09:09Z", "Asia/Pyongyang")).toISOString()).toBe(
      "1980-12-27T15:00:00.000Z",
    );
    // -04:00
    expect(startOfWeek(germane("1975-10-05 00:12:09Z", "America/Caracas")).toISOString()).toBe(
      "1975-09-28T04:00:00.000Z",
    );
    // +00:00
    expect(startOfWeek(germane("2019-08-30", "UTC")).toISOString()).toBe(
      "2019-08-25T00:00:00.000Z",
    );
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
