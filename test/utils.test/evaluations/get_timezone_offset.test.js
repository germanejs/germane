const getTimezoneOffset = require("../../../lib/utils/evaluations/get_timezone_offset");

describe("getTimezoneOffset returns an object of timezone values using the city name passed as an argument", () => {
  test("should return a timezone object", () => {
    expect(getTimezoneOffset("Africa/Lagos", 0)).toStrictEqual({
      offsetInMinutes: 60,
      tzname: "West Africa Standard Time",
      utcoffset: "+0100",
    });

    expect(getTimezoneOffset("Europe/London", 1569802100000)).toStrictEqual({
      offsetInMinutes: 60,
      tzname: "British Summer Time",
      utcoffset: "+0100",
    });

    expect(getTimezoneOffset("Australia/Brisbane", 1569802100000)).toStrictEqual({
      offsetInMinutes: 600,
      tzname: "Australian Eastern Standard Time",
      utcoffset: "+1000",
    });

    expect(getTimezoneOffset("America/Los_Angeles", 1569802100000)).toStrictEqual({
      offsetInMinutes: -420,
      tzname: "Pacific Daylight Time",
      utcoffset: "-0700",
    });

    expect(getTimezoneOffset("Asia/Seoul", 1569802100000)).toStrictEqual({
      offsetInMinutes: 540,
      tzname: "Korean Standard Time",
      utcoffset: "+0900",
    });
  });
});
