const parseGermaneDate = require("../../lib/germane/parse_germane_date");

describe("parseGermaneDate is the underlying factory function, that parses input passed to germane.", () => {
  test("should parse string correctly and return a date", () => {
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

    expect(parseGermaneDate(expanded, "UTC").toString()).toBe(
      "Tue Nov 12 2019 11:34:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(basic, "UTC").toString()).toBe(
      "Sat Jul 05 1890 17:45:11 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(expandedWithTz, "UTC").toString()).toBe(
      "Tue Nov 12 2047 08:04:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(weekNumbering, "UTC").toString()).toBe(
      "Fri Nov 14 2014 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(weekDate, "UTC").toString()).toBe(
      "Mon Sep 10 1990 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(RFC, "UTC").toString()).toBe(
      "Tue Nov 12 2019 17:34:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(ASP, "UTC").toString()).toBe(
      "Fri Aug 19 1910 06:21:09 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(YYYYMM, "UTC").toString()).toBe(
      "Wed Nov 01 2090 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(YYYYMMDD, "UTC").toString()).toBe(
      "Sat Nov 04 2090 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(ordinal, "UTC").toString()).toBe(
      "Wed Nov 11 2020 00:00:00 UTC+0000 (Coordinated Universal Time)",
    );

    // To-Do
    // expect(parseGermaneDate(timestamp, "UTC").toString()).toBe(
    //   "Wed Dec 31 1969 23:59:59 UTC+0000 (Coordinated Universal Time)",
    // );

    expect(parseGermaneDate("2019 09 09")).toStrictEqual(new RangeError("Invalid Date"));

    expect(parseGermaneDate(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(parseGermaneDate({})).toStrictEqual(new TypeError("Invalid Date"));
  });

  test("should return a correct timezone", () => {
    const expanded = "2019-11-12T11:34:45Z";

    expect(parseGermaneDate(expanded, "Africa/Lagos").getTimezoneName()).toBe(
      "West Africa Standard Time",
    );

    expect(parseGermaneDate(expanded, "Asia/Seoul").getTimezoneName()).toBe("Korean Standard Time");

    expect(parseGermaneDate(expanded, "Europe/Lisbon").getTimezoneName()).toBe(
      "Western European Standard Time",
    );

    expect(parseGermaneDate(expanded, "America/Los_Angeles").getTimezoneName()).toBe(
      "Pacific Standard Time",
    );

    expect(parseGermaneDate(expanded, "America/New_York").getTimezoneName()).toBe(
      "Eastern Standard Time",
    );

    expect(parseGermaneDate(expanded, "Australia/Brisbane").getTimezoneName()).toBe(
      "Australian Eastern Standard Time",
    );

    expect(parseGermaneDate(expanded, "Africa/Windhoek").getTimezoneName()).toBe(
      "Central Africa Time",
    );

    expect(parseGermaneDate(expanded, "Asia/Hong_Kong").getTimezoneName()).toBe(
      "Hong Kong Standard Time",
    );

    expect(parseGermaneDate(expanded, "America/Caracas").getTimezoneName()).toBe("Venezuela Time");

    expect(parseGermaneDate(expanded, "Europe/Prague").getTimezoneName()).toBe(
      "Central European Standard Time",
    );

    expect(parseGermaneDate(expanded, "Europe/Minsk").getTimezoneName()).toBe(
      "Moscow Standard Time",
    );

    expect(parseGermaneDate(expanded, 5653)).toStrictEqual(new TypeError("Invalid time zone"));

    expect(parseGermaneDate(expanded, "America/Portland")).toStrictEqual(
      new RangeError("Invalid time zone specified: America/Portland"),
    );

    expect(parseGermaneDate(expanded, "Europe/Manchester")).toStrictEqual(
      new RangeError("Invalid time zone specified: Europe/Manchester"),
    );
  });
});

describe("parseGermaneDate returns an object with date unit values", () => {
  test("should return a valid property value for each property", () => {
    const input = "2019-11-12T11:34:45Z";
    expect(parseGermaneDate(input, "UTC").toString()).toBe(
      "Tue Nov 12 2019 11:34:45 UTC+0000 (Coordinated Universal Time)",
    );

    expect(parseGermaneDate(input, "UTC").getMonth()).toBe(10);
    expect(parseGermaneDate(input, "UTC").getDay()).toBe(2);
    expect(parseGermaneDate(input, "UTC").getDate()).toBe(12);
    expect(parseGermaneDate(input, "UTC").getFullYear()).toBe(2019);
    expect(parseGermaneDate(input, "UTC").getHours()).toBe(11);
    expect(parseGermaneDate(input, "UTC").getMinutes()).toBe(34);
    expect(parseGermaneDate(input, "UTC").getSeconds()).toBe(45);
    expect(parseGermaneDate(input, "UTC").getMilliseconds()).toBe(0);
    expect(parseGermaneDate(input, "UTC").getTime()).toBe(1573558485000);

    expect(parseGermaneDate(input, "UTC").getLocalTime()).toBe(1573558485000);
    expect(parseGermaneDate(input, "Africa/Lagos").getLocalTime()).toBe(1573562085000);
    expect(parseGermaneDate(input, "Australia/Sydney").getLocalTime()).toBe(1573598085000);
    expect(parseGermaneDate(input, "Europe/Minsk").getLocalTime()).toBe(1573569285000);

    expect(parseGermaneDate(input, "Europe/Minsk").getUTCOffset()).toBe("+0300");
    expect(parseGermaneDate(input, "America/Caracas").getUTCOffset()).toBe("-0400");
    expect(parseGermaneDate(input, "Australia/Brisbane").getUTCOffset()).toBe("+1000");

    expect(parseGermaneDate(input, "Africa/Lagos").getTimezoneOffset()).toBe(60);
    expect(parseGermaneDate(input, "Asia/Seoul").getTimezoneOffset()).toBe(540);
    expect(parseGermaneDate(input, "America/Caracas").getTimezoneOffset()).toBe(-240);

    expect(parseGermaneDate(input, "Africa/Lagos").getTimezoneName()).toBe(
      "West Africa Standard Time",
    );
    expect(parseGermaneDate(input, "Asia/Bangkok").getTimezoneName()).toBe("Indochina Time");
    expect(parseGermaneDate(input, "Australia/Brisbane").getTimezoneName()).toBe(
      "Australian Eastern Standard Time",
    );

    expect(parseGermaneDate(input, "UTC").getMonthName()).toBe("November");
    expect(parseGermaneDate(input, "UTC").getWeekDay()).toBe("Tuesday");

    expect(parseGermaneDate(input, "UTC").getWeek()).toBe(46);
    expect(parseGermaneDate(input, "UTC").getOrdinal()).toBe(316);

    expect(parseGermaneDate(input, "UTC").toISOString()).toBe("2019-11-12T11:34:45.000Z");

    expect(parseGermaneDate(input, "UTC").getUTCMonth()).toBe(10);
    expect(parseGermaneDate(input, "UTC").getUTCDay()).toBe(2);
    expect(parseGermaneDate(input, "UTC").getUTCDate()).toBe(12);
    expect(parseGermaneDate(input, "UTC").getUTCFullYear()).toBe(2019);
    expect(parseGermaneDate(input, "UTC").getUTCHours()).toBe(11);
    expect(parseGermaneDate(input, "UTC").getUTCMinutes()).toBe(34);
    expect(parseGermaneDate(input, "UTC").getUTCSeconds()).toBe(45);
    expect(parseGermaneDate(input, "UTC").getUTCMilliseconds()).toBe(0);
  });
});
