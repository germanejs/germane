const parseTime = require("../../../lib/utils/parsers/parseTime");
const germane = require("../../../lib/germane");

describe("parseTime collects the time atoms from the date object or a germane object", () => {
  test("should return formatted time object", () => {
    // its recommended to use the format function with the germane date helper.
    // any date passed to the date constructor parses the date to the locale timezone.
    // germane date can accept a city/timezone value, making independent of the local time and timezone.
    // for the sake of testing the germane function will be used.

    const lagos = {
      full: "11:23:09",
      hour24: {
        decimal: {
          zeroPadded: "11",
          nonZeroPadded: "11",
        },
      },
      hour12: {
        decimal: {
          zeroPadded: "11",
          nonZeroPadded: "11",
        },
      },
      minute: {
        decimal: {
          zeroPadded: "23",
          nonZeroPadded: "23",
        },
      },
      seconds: {
        decimal: {
          zeroPadded: "09",
          nonZeroPadded: "9",
        },
      },
      milliseconds: {
        decimal: {
          zeroPadded: "000",
        },
      },
      meridiem: {
        small: "am",
        big: "AM",
        dotted: "a.m",
      },
      timestamp: {
        milliseconds: "1566206589000",
        seconds: "1566206589",
      },
      apprTime: "11:23:09 AM",
      tzOffset: {
        normal: "+0100",
        colonized: "+01:00",
      },
      tzLong: "West Africa Standard Time",
      tzShort: "WAST",
    };
    // ISO string not suffixed with Z is assumed to be a local time.
    // In these case the local time will be calculated using the timezone of Africa/Lagos.
    //
    expect(parseTime(germane("2019-08-19T10:23:09", "Africa/Lagos"))).toStrictEqual(lagos);
  });
  test("should return formatted time object equivalent to the time in new york in given date", () => {
    const newyork = {
      full: "07:11:56",
      hour24: {
        decimal: {
          zeroPadded: "07",
          nonZeroPadded: "7",
        },
      },
      hour12: {
        decimal: {
          zeroPadded: "07",
          nonZeroPadded: "7",
        },
      },
      minute: {
        decimal: {
          zeroPadded: "11",
          nonZeroPadded: "11",
        },
      },
      seconds: {
        decimal: {
          zeroPadded: "56",
          nonZeroPadded: "56",
        },
      },
      milliseconds: {
        decimal: {
          zeroPadded: "456",
        },
      },
      meridiem: {
        small: "am",
        big: "AM",
        dotted: "a.m",
      },
      timestamp: {
        milliseconds: "1373022716456",
        seconds: "1373022716",
      },
      apprTime: "07:11:56 AM",
      tzOffset: {
        normal: "-0400",
        colonized: "-04:00",
      },
      tzLong: "Eastern Daylight Time",
      tzShort: "EDT",
    };
    expect(parseTime(germane("2013-07-05T11:11:56.456Z", "America/New_York"))).toStrictEqual(
      newyork,
    );
  });

  const vast = new Date("2011-01-11T19:13:11.999");
  const vastToStr = vast.toString();
});
