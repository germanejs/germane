const differenceInYears = require("../index");
const germane = require("../../germane");

describe("differenceInYears returns the difference between two dates in human readable form", () => {
  test("should return the difference in words", () => {
    expect(differenceInYears(germane("2019-07-05"), germane("2025-08-12"))).toBe(6);

    expect(differenceInYears(germane("2010-12-24"), germane("2050-07-30"))).toBe(39);

    expect(differenceInYears(germane("1991-11-14"), germane("1979-12-03"))).toBe(-11);

    expect(differenceInYears(germane("1975-03-20"), germane("2000-03-01"))).toBe(24);

    expect(differenceInYears(germane("1920-10-19"), germane("2025-08-12"))).toBe(104);

    expect(differenceInYears(germane("2048-07-15"), germane("2018-07-31"))).toBe(-29);

    expect(differenceInYears(new Date("2019 12 02"), new Date("1601 07 31"))).toBe(-418);

    expect(differenceInYears(new Date("1900 07 31"), new Date("1905 07 15"))).toBe(4);

    expect(differenceInYears(new Date("1775 02 28"), new Date("1890 09 02"))).toBe(115);

    expect(differenceInYears(new Date("2019 09 5"), new Date("2011 10 02"))).toBe(-7);

    expect(differenceInYears(new Date("1000 01 01"), new Date("2000 12 31"))).toBe(1000);

    expect(differenceInYears(new Date("2019 03 06"), new Date("2019 03 06"))).toBe(0);
  });

  test("should throw an error", () => {
    expect(differenceInYears(germane(""), new Date())).toStrictEqual(new TypeError("Invalid Date"));

    expect(
      differenceInYears(new Date("2019 01 18 23:45:00"), new Date("19 19 2019")),
    ).toStrictEqual(new RangeError("Invalid Date"));

    expect(differenceInYears("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(differenceInYears(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
