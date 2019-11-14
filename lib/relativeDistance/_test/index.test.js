const relativeDistance = require("../index");
const germane = require("../../germane");
const pt = require("../../locale/pt");
const de = require("../../locale/de");
const fr = require("../../locale/fr");
const yo = require("../../locale/yo");

describe("relativeDistance computes the distance between two dates", () => {
  test("should return in two months", () => {
    expect(
      relativeDistance(germane("2019-09-11 23:11Z", "UTC"), germane("2019-11-15 00:00Z", "UTC"), {
        addSuffix: true,
      }),
    ).toBe("in 2 months");
  });
  test("should return 45 years ago", () => {
    expect(
      relativeDistance(germane("2019-11-12 23:11Z", "UTC"), germane("1973-11-15 00:00Z", "UTC"), {
        addSuffix: true,
      }),
    ).toBe("45 years ago");
  });
  test("should return 3 weeks ago", () => {
    expect(
      relativeDistance(germane("2019-11-12 23:11Z", "UTC"), germane("2019-10-21 00:00Z", "UTC"), {
        addSuffix: true,
      }),
    ).toBe("3 weeks ago");
  });
  test("should return 2 days", () => {
    expect(
      relativeDistance(germane("2019-10-23 23:11Z", "UTC"), germane("2019-10-21 00:00Z", "UTC"), {
        addSuffix: false,
      }),
    ).toBe("2 days");
  });
  test("should return 3 hours", () => {
    expect(
      relativeDistance(germane("2019-09-11 23:11"), germane("2019-09-11 20:11"), {
        addSuffix: false,
      }),
    ).toBe("3 hours");
  });
  test("should return 1 minute ago", () => {
    expect(
      relativeDistance(germane("2019-09-11 23:11"), germane("2019-09-11 23:10"), {
        addSuffix: true,
      }),
    ).toBe("1 minute ago");
  });
  test("should return in 3 seconds", () => {
    expect(
      relativeDistance(germane("2019-09-11 23:11"), germane("2019-09-11 23:11:03"), {
        addSuffix: true,
      }),
    ).toBe("in 3 seconds");
  });

  test("should return em 1 minuto", () => {
    expect(
      relativeDistance(germane("2019-09-11 23:09"), germane("2019-09-11 23:10"), {
        addSuffix: true,
        locale: pt,
      }),
    ).toBe("em 1 minuto");
  });
  test("should return in 3 seconds", () => {
    expect(
      relativeDistance(germane("2019-09-11 23:11"), germane("2019-09-11 23:11:03"), {
        addSuffix: true,
        locale: fr,
      }),
    ).toBe("il y a 3 secondes");
  });
  test("should return wákati 3", () => {
    expect(
      relativeDistance(germane("2019-09-11 23:11"), germane("2019-09-11 20:11"), {
        addSuffix: false,
        locale: yo,
      }),
    ).toBe("wákati 3");
  });
  test("should return vor 3 wochen", () => {
    expect(
      relativeDistance(new Date("2019-11-12 23:11"), new Date("2019 10 21"), {
        addSuffix: true,
        locale: de,
      }),
    ).toBe("vor 3 wochen");
  });

  test("should return an error", () => {
    expect(relativeDistance(new Date(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(relativeDistance(null, new Date())).toStrictEqual(new TypeError("Invalid Date"));

    expect(relativeDistance(new Date(), new Date(), { locale: {} })).toStrictEqual(
      new TypeError("Invalid locale"),
    );

    expect(relativeDistance(new Date(" "), germane("2013-12-13 23:11:45.781Z"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(relativeDistance(germane("2013-12-13 23:11:45.781Z"), new Date(" "))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(
      relativeDistance(new Date(), new Date(), { locale: fr, addSuffix: "Hello World" }),
    ).toStrictEqual(new TypeError("Invalid option"));
  });
});
