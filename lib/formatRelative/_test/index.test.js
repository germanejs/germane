const formatRelative = require("../index");
const germane = require("../../germane");
const fr = require("../../locale/fr");
const de = require("../../locale/de");
const yo = require("../../locale/yo");

describe("formatRelative formats a date time relative to the base date", () => {
  // Today
  test("should return today at 5:45 AM", () => {
    expect(
      formatRelative(germane("2014-08-20 12:11", "UTC"), germane("2014-08-20 05:45:00", "UTC")),
    ).toBe("Today at 5:45 AM");
  });
  // Yesterday
  test("should return yesterday at 23:22 PM", () => {
    expect(
      formatRelative(germane("2014-08-20 12:11", "UTC"), germane("2014-08-19 23:22:00", "UTC")),
    ).toBe("Yesterday at 11:22 PM");
  });
  // Tomorrow
  test("should return tomorrow at 5:45 AM", () => {
    expect(
      formatRelative(
        germane("2014-08-20 12:11Z", "Asia/Baku"),
        germane("2014-08-21 15:11:00Z", "Asia/Baku"),
      ),
    ).toBe("Tomorrow at 8:11 PM");
  });
  // Same Week
  test("should return Friday at 12:01 AM", () => {
    expect(
      formatRelative(
        germane("2014-08-19 12:11Z", "Europe/Minsk"),
        germane("2014-08-22 00:01:00", "Europe/Minsk"),
      ),
    ).toBe("Friday at 12:01 AM");
  });
  // Last Week
  test("should return Last Sunday at 11:30 PM", () => {
    expect(formatRelative(germane("2014-08-20 12:11Z"), germane("2014-08-17 23:30:18"))).toBe(
      "Last Sunday at 11:30 PM",
    );
  });
  // Else
  test("should return 9/23/2014", () => {
    expect(formatRelative(new Date("2014-08-20 12:11Z"), new Date("2014-09-23 05:45:00"))).toBe(
      "9/23/2014",
    );
  });

  // With Locale
  test("should return samedi prochain à 15:00", () => {
    expect(
      formatRelative(new Date("2014-08-20 12:11Z"), new Date("2014-08-23 15:00:00"), {
        locale: fr,
      }),
    ).toBe("dimanche prochain à 15:00");
  });

  // With Locale
  test("should return Freitag um 05:45", () => {
    expect(
      formatRelative(new Date("2014-08-20 12:11Z"), new Date("2014-08-22 05:45:00"), {
        locale: de,
      }),
    ).toBe("Samstag um 05:45");
  });

  // With Locale
  test("should return Lònì ní 05:45", () => {
    expect(
      formatRelative(new Date("2014-08-20 12:11"), new Date("2014-08-20 05:45:00"), { locale: yo }),
    ).toBe("Lònì ní 5:45");
  });

  // With Locale
  test("should return today at 5:45 AM", () => {
    expect(
      formatRelative(new Date("2014-08-20 12:11"), new Date("2014-08-20 09:13:11"), { locale: fr }),
    ).toBe("Aujourd'hui à 09:13");
  });
});
describe("should return an error if the something went wrong", () => {
  test("should return RangeError ('invalid date')", () => {
    expect(formatRelative(new Date("31 12 2019"), new Date())).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });

  test("should throw a TypeError ('invalid date')", () => {
    expect(formatRelative(null, "dddd, MM Do")).toStrictEqual(new TypeError("Invalid Date"));
  });

  test("should throw a TypeError ('invalid locale')", () => {
    expect(formatRelative(new Date(), new Date(), { locale: {} })).toStrictEqual(
      new TypeError("Invalid locale"),
    );
  });
});
