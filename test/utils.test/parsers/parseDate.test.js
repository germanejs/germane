const parseDate = require("../../../lib/utils/parsers/parseDate");
const germane = require("../../../lib/germane");
test("should return an object of correctly parsed date", () => {
  const formats = {
    dayOfWeek: {
      long: "Sunday",
      short: "Sun",
      ordinal: "0th",
      two: "Su",
      decimal: {
        nonZeroPadded: "0",
        zeroPadded: "00",
      },
    },
    month: {
      long: "August",
      short: "Aug",
      ordinal: "8th",
      decimal: {
        nonZeroPadded: "8",
        zeroPadded: "08",
      },
    },
    year: {
      withCentury: "2019",
      withoutCentury: "19",
    },
    apprDate: "8/18/2019",
    dayOfYear: {
      ordinal: "230th",
      decimal: {
        zeroPadded: "230",
        nonZeroPadded: "230",
      },
    },
    dayOfMonth: {
      ordinal: "18th",
      decimal: {
        zeroPadded: "18",
        nonZeroPadded: "18",
      },
    },
    quarter: {
      ordinal: "3rd",
      decimal: {
        zeroPadded: "03",
      },
    },
    week: {
      ordinal: "33rd",
      decimal: {
        zeroPadded: "33",
        nonZeroPadded: "33",
      },
    },
  };

  // Treats date as UTC irrespective of the local timezone.
  // It is recommended that you use germane date function.
  expect(parseDate(germane("2019-08-18T23:11:45.999Z", "UTC"))).toStrictEqual(formats);
});
