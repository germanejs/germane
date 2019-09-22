const differenceInBusinessDays = require("../../lib/differenceInBusinessDays");
const germane = require("../../lib/germane");

describe("differenceInBusinessDays returns the difference in business days (usually mon - fri) between two dates, in days", () => {
  test("should return the number of business days between two dates", () => {
    expect(differenceInBusinessDays(germane("2019-04-03"), germane("2019-03-04"))).toBe(-23);

    expect(differenceInBusinessDays(germane("2019-08-05"), germane("2019-11-08"))).toBe(70);

    expect(differenceInBusinessDays(germane("2019-01-31"), germane("2019-02-28"))).toBe(21);

    expect(differenceInBusinessDays(new Date("2019 03 03"), new Date("2019 03 23"))).toBe(15);

    expect(differenceInBusinessDays(new Date("2019 03 04"), new Date("2019 04 03"))).toBe(23);

    expect(differenceInBusinessDays(germane(new Date("2015 08 05")), germane("2015-07-05"))).toBe(
      -23,
    );

    expect(differenceInBusinessDays(new Date("2015 07 04"), new Date("2015 07 05"))).toBe(0);
  });

  test("should throw errors", () => {
    expect(differenceInBusinessDays(germane(), new Date(""))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(differenceInBusinessDays("", new Date(""))).toStrictEqual(new TypeError("Invalid Date"));

    expect(
      differenceInBusinessDays(new Date("2018 01 11"), new Date("2019 23 10 23:90:09")),
    ).toStrictEqual(new RangeError("Invalid Date"));

    expect(differenceInBusinessDays(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
