const differenceInWords = require("../../lib/differenceInWords");
const germane = require("../../lib/germane");

describe("differenceInWords returns the difference between two dates in human readable form", () => {
  test("should return the difference in words", () => {
    expect(differenceInWords(germane("2019-07-05"), germane("2025-08-12"))).toBe(
      "6 years, 1 month, 1 week",
    );

    expect(differenceInWords(germane("2010-12-24"), germane("2050-07-30"))).toBe(
      "39 years, 7 months, 6 days",
    );

    expect(differenceInWords(germane("1991-11-14"), germane("1979-12-03"))).toBe(
      "11 years, 11 months, 1 week, 4 days",
    );

    expect(differenceInWords(germane("1975-03-20"), germane("1975-03-01"))).toBe("2 weeks, 5 days");

    expect(differenceInWords(germane("1975-02-13"), germane("1975-01-16"))).toBe("4 weeks");

    expect(differenceInWords(germane("2048-07-15"), germane("2048-07-31"))).toBe("2 weeks, 2 days");

    expect(differenceInWords(germane("2048-12-02"), germane("2048-07-31"))).toBe(
      "4 months, 2 days",
    );

    expect(differenceInWords(germane("2048-07-31"), new Date("2048-07-15"))).toBe(
      "2 weeks, 2 days",
    );

    expect(differenceInWords(germane("2048-07-31"), new Date("2048-12-02"))).toBe(
      "4 months, 2 days",
    );

    expect(differenceInWords(new Date("2019-09-05"), germane("2019-10-02"))).toBe(
      "3 weeks, 6 days",
    );

    expect(differenceInWords(new Date("2019-09-05"), germane("2019-11-12"))).toBe(
      "2 months, 1 week",
    );

    expect(differenceInWords(new Date("2019-02-28"), new Date("2019-03-07"))).toBe("1 week");

    expect(differenceInWords(new Date("2019-03-06"), new Date("2019-02-25"))).toBe(
      "1 week, 2 days",
    );

    expect(differenceInWords(new Date("2019-03-06"), new Date("2019-01-23"))).toBe(
      "1 month, 1 week, 4 days",
    );

    expect(differenceInWords(new Date("2019-03-06"), new Date("2019-03-06"))).toBe("Same Dates");
  });

  test("should throw an error", () => {
    expect(differenceInWords(Date.now(), new Date(""))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(differenceInWords(germane("2019 01 18 23:45:00"), new Date("19 19 2019"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(differenceInWords("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(differenceInWords(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
