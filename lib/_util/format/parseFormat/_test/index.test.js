const parseFormat = require("../index");
const enUS = require("../../../../locale/en_US");
const germane = require("../../../../germane");
describe("parseFormat formats a date in different units using its locale", () => {
  test("should ", () => {
    const date = germane("2013-01-11T12:14:09.002Z", "Africa/Lagos");
    const formatted = {
      era: {
        abbreviated: "AD",
        wide: "Anno Domini",
        narrow: "A",
      },
      year: {
        commonYear: {
          oneDigit: "13",
          twoDigits: "13",
          threeDigits: "013",
          long: "2013",
          paddedLong: "02013",
          century: "20",
        },
        weekYear: {
          oneDigit: "13",
          twoDigits: "13",
          threeDigits: "013",
          long: "2013",
        },
      },

      quarter: {
        numeric: {
          oneDigit: "1",
          twoDigits: "01",
        },
        abbreviated: "Q1",
        wide: "1st quarter",
        narrow: "1",
      },

      month: {
        numeric: {
          oneDigit: "1",
          twoDigits: "01",
        },
        abbreviated: "Jan",
        wide: "January",
        narrow: "J",
        ordinal: "1st",
      },

      week: {
        numeric: {
          oneDigit: "2",
          twoDigits: "02",
        },
        ordinal: "2nd",
      },

      day: {
        numeric: {
          oneDigit: "11",
          twoDigits: "11",
        },
        dayOfYear: "011",
        dayOfYearOrdinal: "11th",
        dayOfWeekInMonth: "2",
        dayOfWeekInMonthOrdinal: "2nd",
        ordinal: "11th",
      },

      weekDay: {
        numeric: {
          oneDigit: "5",
          twoDigits: "05",
        },
        abbreviated: "Fri",
        wide: "Friday",
        short: "F",
        narrow: "F",
        ordinal: "5th",
        locale: {
          numeric: {
            oneDigit: "5",
            twoDigits: "05",
          },
          abbreviated: "Fri",
          wide: "Friday",
          short: "F",
          narrow: "F",
          ordinal: "5th",
        },
      },

      period: {
        meridiem: {
          abbreviated: "PM",
          wide: "pm.",
          narrow: "p",
        },
        standalone: {
          abbreviated: "afternoon",
          wide: "afternoon",
          narrow: "in the afternoon",
        },
        formatting: {
          abbreviated: "afternoon",
          wide: "in the afternoon",
          narrow: "in the afternoon",
        },
      },
      hour: {
        numeric: {
          hour12: {
            oneDigit: "1",
            twoDigits: "01",
          },
          hour0to23: {
            oneDigit: "13",
            twoDigits: "13",
          },
          hour11: {
            oneDigit: "1",
            twoDigits: "01",
          },
          hour1to24: {
            oneDigit: "14",
            twoDigits: "14",
          },
        },
      },
      minute: {
        numeric: {
          oneDigit: "14",
          twoDigits: "14",
        },
      },
      second: {
        numeric: {
          oneDigit: "9",
          twoDigits: "09",
        },
      },
      millisecond: {
        numeric: {
          millisecond: "2",
          decisecond: "0",
          centisecond: "0",
          // eslint-disable-next-line max-len
          millisecondsInDay: String(
            (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) * 1000
              + date.getMilliseconds(),
          ),
        },
      },
      timezone: {
        offsetBasic: "+0100",
        prefixedBasic: "UTC" + "+" + "01" + "00",
        prefixedBasicorZ: "UTC" + "+" + "01" + "00",
        offsetBasicOrZ: "+" + "01" + "00",

        prefixedExtended: "UTC" + "+" + "01" + ":" + "00",
        offsetExtended: "+" + "01" + ":" + "00",
        prefixedExtendedOrZ: "UTC" + "+" + "01" + ":" + "00",
        offsetExtendedorZ: "+" + "01" + ":" + "00",

        offsetWithoutMinute: "+" + "01",
        offsetWithoutMinuteOrZ: "+" + "01",
        prefixedWithoutMinute: "UTC" + "+" + "01",
      },
      timestamp: {
        numeric: {
          second: String(Math.trunc(date.getTime() / 1000)),
          millisecond: String(date.getTime()),
        },
      },
      iso: {
        isoYear: {
          oneDigit: "13",
          twoDigits: "13",
          threeDigits: "013",
          long: "2013",
        },
        isoweek: {
          numeric: {
            twoDigits: "02",
          },
          ordinal: "2nd",
        },
        isoWeekDay: {
          numeric: {
            oneDigit: "5",
            twoDigits: "05",
          },
          abbreviated: "Fri",
          wide: "Friday",
          short: "F",
          narrow: "F",
          ordinal: "5th",
        },
      },
    };

    expect(parseFormat(date, enUS)).toEqual(formatted);
  });
});
