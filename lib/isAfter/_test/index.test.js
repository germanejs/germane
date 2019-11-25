const isAfter = require("../index");
const germane = require("../../germane");
describe("isAfter evaluates 2 dates and return true/false checking whether the second is before the first", () => {
  test("should return true", () => {
    expect(isAfter(new Date("2019-10-11 23:09:13"), new Date("2019-11-09 11:34:11"))).toBe(true);

    expect(isAfter(new Date("2011-02-11 23:09:13"), new Date("2028-04-22 00:00:11.891"))).toBe(
      true,
    );

    expect(isAfter(germane("2010-11-11T11:02:11Z"), germane("2010-11-11T11:02:12Z"))).toBe(true);

    expect(
      isAfter(
        germane("2019-01-11T11:09Z", "America/Los_Angeles"),
        germane("2019-01-11T11:09Z", "America/New_York"),
      ),
    ).toBe(true);
  });
  test("should return false", () => {
    expect(isAfter(new Date("2019-11-09 11:34:11"), new Date("1999-10-11 23:09:13"))).toBe(false);

    expect(isAfter(new Date("2028-09-23 17:59:03"), new Date("2028-04-22 00:00:11.891"))).toBe(
      false,
    );

    expect(isAfter(germane("2010-11-11T11:02:10Z"), germane("2010-11-11T11:02:09Z"))).toBe(false);

    expect(
      isAfter(
        germane("1890-03-02T11:34:11.900Z", "America/New_York"),
        germane("1890-03-02T11:34:11.900Z", "America/Los_Angeles"),
      ),
    ).toBe(false);
  });

  test("should return an error", () => {
    expect(isAfter(Date.now(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isAfter(new Date("2019 09 05"), "")).toStrictEqual(new TypeError("Invalid Date"));

    expect(isAfter({}, Date.now())).toStrictEqual(new TypeError("Invalid Date"));

    expect(isAfter(new Date().toISOString(), Date.now())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
    expect(isAfter(new Date("2019 19 23"), Date.now())).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });
});
