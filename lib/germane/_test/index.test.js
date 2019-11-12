const germane = require("../index");
const enUS = require("../../locale/en_US");

describe("germane is the underlying factory function, that germanes input passed to germane.", () => {
  test("should germane string correctly and return a date", () => {
    const expanded = "2019-11-12T11:34:45Z";
    const basic = "18900705T174511Z";
    const expandedWithTz = "2047-11-12T11:34:45+0330";
    const weekNumbering = "2014-W46-5";
    const weekDate = "1990-W37";
    const RFC = "Tue, 12 Nov 2019 11:34:45 -0600";
    const ASP = "/Date(-1873561131000)/";
    const YYYYMM = "2090-11";
    const YYYYMMDD = "2090-11-04";
    const ordinal = "2020-316";
    const timestamp = -1;

    expect(germane(expanded, "UTC", { locale: enUS }).toString()).toBe(
      "Tue Nov 12 2019 11:34:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(basic, "UTC", { locale: enUS }).toString()).toBe(
      "Sat Jul 05 1890 17:45:11 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(expandedWithTz, "UTC", { locale: enUS }).toString()).toBe(
      "Tue Nov 12 2047 08:04:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(weekNumbering, "UTC", { locale: enUS }).toString()).toBe(
      "Fri Nov 14 2014 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(weekDate, "UTC", { locale: enUS }).toString()).toBe(
      "Mon Sep 10 1990 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(RFC, "UTC", { locale: enUS }).toString()).toBe(
      "Tue Nov 12 2019 17:34:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(ASP, "UTC").toString()).toBe(
      "Fri Aug 19 1910 06:21:09 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(YYYYMM, "UTC").toString()).toBe(
      "Wed Nov 01 2090 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(YYYYMMDD, "UTC").toString()).toBe(
      "Sat Nov 04 2090 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(ordinal, "UTC").toString()).toBe(
      "Wed Nov 11 2020 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(timestamp, "UTC").toString()).toBe(
      "Wed Dec 31 1969 23:59:59 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane("2019 09 09")).toStrictEqual(new RangeError("Invalid Date"));

    expect(germane(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(germane({})).toStrictEqual(new RangeError("Invalid Date"));
  });

  test("should return a correct timezone", () => {
    const expanded = "2019-11-12T11:34:45Z";

    expect(germane(expanded, "Africa/Lagos").getTimezoneName()).toBe("West Africa Standard Time");

    expect(germane(expanded, "Asia/Seoul").getTimezoneName()).toBe("Korean Standard Time");

    expect(germane(expanded, "Europe/Lisbon").getTimezoneName()).toBe(
      "Western European Standard Time",
    );

    expect(germane(expanded, "America/Los_Angeles").getTimezoneName()).toBe(
      "Pacific Standard Time",
    );

    expect(germane(expanded, "America/New_York").getTimezoneName()).toBe("Eastern Standard Time");

    expect(germane(expanded, "Australia/Brisbane").getTimezoneName()).toBe(
      "Australian Eastern Standard Time",
    );

    expect(germane(expanded, "Africa/Windhoek").getTimezoneName()).toBe("Central Africa Time");

    expect(germane(expanded, "Asia/Hong_Kong").getTimezoneName()).toBe("Hong Kong Standard Time");

    expect(germane(expanded, "America/Caracas").getTimezoneName()).toBe("Venezuela Time");

    expect(germane(expanded, "Europe/Prague").getTimezoneName()).toBe(
      "Central European Standard Time",
    );

    expect(germane(expanded, "Europe/Minsk").getTimezoneName()).toBe("Moscow Standard Time");

    expect(germane(expanded, 5653)).toStrictEqual(new TypeError("Invalid time zone"));

    expect(germane(expanded, "America/Portland")).toStrictEqual(
      new RangeError("Invalid time zone specified: America/Portland"),
    );

    expect(germane(expanded, "Europe/Manchester")).toStrictEqual(
      new RangeError("Invalid time zone specified: Europe/Manchester"),
    );
  });
});

describe("germane returns an object with date unit values", () => {
  test("should return a valid property value for each property", () => {
    const input = "2019-11-12T11:34:45Z";
    expect(germane(input, "UTC").toString()).toBe(
      "Tue Nov 12 2019 11:34:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(input, "UTC").getMonth()).toBe(10);
    expect(germane(input, "UTC").getDay()).toBe(2);
    expect(germane(input, "UTC").getDate()).toBe(12);
    expect(germane(input, "UTC").getFullYear()).toBe(2019);
    expect(germane(input, "UTC").getHours()).toBe(11);
    expect(germane(input, "UTC").getMinutes()).toBe(34);
    expect(germane(input, "UTC").getSeconds()).toBe(45);
    expect(germane(input, "UTC").getMilliseconds()).toBe(0);
    expect(germane(input, "UTC").getTime()).toBe(1573558485000);

    expect(germane(input, "UTC").valueOf()).toBe(1573558485000);

    expect(Number(germane(input, "UTC"))).toBe(1573558485000);

    expect(String(germane(input, "UTC"))).toBe(
      "Tue Nov 12 2019 11:34:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(germane(input, "UTC").getLocalTime()).toBe(1573558485000);
    expect(germane(input, "Africa/Lagos").getLocalTime()).toBe(1573562085000);
    expect(germane(input, "Australia/Sydney").getLocalTime()).toBe(1573598085000);
    expect(germane(input, "Europe/Minsk").getLocalTime()).toBe(1573569285000);

    expect(germane(input, "Europe/Minsk").getUTCOffset()).toBe("+0300");
    expect(germane(input, "America/Caracas").getUTCOffset()).toBe("-0400");
    expect(germane(input, "Australia/Brisbane").getUTCOffset()).toBe("+1000");

    expect(germane(input, "Africa/Lagos").getTimezoneOffset()).toBe(-60);
    expect(germane(input, "Asia/Seoul").getTimezoneOffset()).toBe(-540);
    expect(germane(input, "America/Caracas").getTimezoneOffset()).toBe(240);

    expect(germane(input, "Africa/Lagos").getTimezoneName()).toBe("West Africa Standard Time");
    expect(germane(input, "Asia/Bangkok").getTimezoneName()).toBe("Indochina Time");
    expect(germane(input, "Australia/Brisbane").getTimezoneName()).toBe(
      "Australian Eastern Standard Time",
    );

    expect(germane(input, "UTC").getMonthName()).toBe("November");
    expect(germane(input, "UTC").getWeekDay()).toBe("Tuesday");

    expect(germane(input, "UTC").getWeek()).toBe(46);
    expect(germane(input, "UTC").getOrdinal()).toBe(316);

    expect(germane(input, "UTC").toISOString()).toBe("2019-11-12T11:34:45.000Z");

    expect(germane(input, "UTC").getUTCMonth()).toBe(10);
    expect(germane(input, "UTC").getUTCDay()).toBe(2);
    expect(germane(input, "UTC").getUTCDate()).toBe(12);
    expect(germane(input, "UTC").getUTCFullYear()).toBe(2019);
    expect(germane(input, "UTC").getUTCHours()).toBe(11);
    expect(germane(input, "UTC").getUTCMinutes()).toBe(34);
    expect(germane(input, "UTC").getUTCSeconds()).toBe(45);
    expect(germane(input, "UTC").getUTCMilliseconds()).toBe(0);
  });
});
