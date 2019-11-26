// @ts-nocheck
const createDuration = require("../index");

describe("creates a duration", () => {
  test("should return 2000000", () => {
    expect(createDuration(2000, "seconds")).toBe(2000000);
  });

  test("should return 51323900", () => {
    expect(createDuration("14:15:23.900")).toBe(51323900);
  });
  test("should return 324000000", () => {
    expect(createDuration("PT90H")).toBe(324000000);
  });
  test("should return 2289048000", () => {
    expect(
      createDuration([new Date("2019-12-05 12:09:11.999Z"), new Date("2019-12-31T23:59:59.999Z")]),
    ).toBe(2289048000);
  });

  test("should return 50400000", () => {
    expect(createDuration(14, "hours")).toBe(50400000);
  });

  test("should return 378691200000", () => {
    expect(createDuration(12, "years")).toBe(378691200000);
  });

  test("should return 378691200000", () => {
    expect(createDuration(12, "year")).toBe(378691200000);
  });

  test("should return 378691200000", () => {
    expect(createDuration(12, "YEARS")).toBe(378691200000);
  });

  test("should return 12", () => {
    expect(createDuration(12, "s")).toBe(12);
  });

  test("should return 12000", () => {
    expect(createDuration(12000, "ms")).toBe(12000);
  });

  test("should return errors", () => {
    expect(createDuration("")).toStrictEqual(new RangeError("Invalid Date: empty string"));

    expect(createDuration({})).toStrictEqual(new TypeError("Invalid Date"));

    expect(createDuration(50, null)).toStrictEqual(
      new TypeError("Invalid unit: expected a string"),
    );

    expect(createDuration([])).toStrictEqual(
      new RangeError("Invalid duration: Empty duration array"),
    );

    expect(createDuration([new Date()])).toStrictEqual(
      new RangeError("Duration requires two (2) Date objects"),
    );

    expect(createDuration([null, new Date()])).toStrictEqual(
      new RangeError("Invalid Date: duration array contains non Date value(s)"),
    );
  });
});
