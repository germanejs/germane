const strftime = require("../index");
const germane = require("../../germane");
const es = require("../../locale/es");
const af = require("../../locale/af");
const de = require("../../locale/de");
const fr = require("../../locale/fr");

describe("strftime uses the format token, used by most c inspired languages", () => {
  test("should return the correct values for the format tokens", () => {
    const date = germane("2019-01-11T13:09:13.812Z", "Africa/Accra");
    expect(strftime(date, "%Q, %Qo")).toBe("01, 1st");
    expect(strftime(date, "%U")).toBe("02");
    expect(strftime(date, "%W, %u, %v, %G, %V, %g")).toBe("02, 5, 05, 2019, 02, 19");
    expect(strftime(date, "%p, %P")).toBe("pm., PM");
    expect(strftime(date, "%f, %s, %S")).toBe("812, 1547212153812, 13");
    expect(strftime(date, "%H, %l, %I, %k")).toBe("13, 1, 01, 13");
    expect(strftime(date, "%M")).toBe("09");
    expect(strftime(date, "%Z, %z")).toBe("UTC+0000, +0000");
    expect(strftime(date, "%y, %Y, %C")).toBe("19, 2019, 20");
    expect(strftime(date, "%b, %B, %m, %mo, %h")).toBe("Jan, January, 01, 1st, Jan");
    expect(strftime(date, "%d, %e, %do, %j, %jo")).toBe("11, 11, 11th, 011, 11th");
    expect(strftime(date, "%a, %A, %w, %wo")).toBe("Fri, Friday, 5, 5th");
  });
});

describe("Uses the C native format style to format dates into human readable string", () => {
  test("should return Tuesday, August 20, 2019 09:23:56 PM", () => {
    expect(strftime(new Date("2019 08 20 21:23:56"), "%A, %B %d, %Y %I:%M:%S %P")).toBe(
      "Tuesday, August 20, 2019 09:23:56 PM",
    );
    expect(
      strftime(new Date("2019 08 20 21:23:56"), "%A, %B %d, %Y %I:%M:%S %P", { locale: es }),
    ).toBe("martes, agosto 20, 2019 09:23:56 PM");
    expect(
      strftime(new Date("2019 08 20 21:23:56"), "%A, %B %d, %Y %I:%M:%S %P", { locale: af }),
    ).toBe("Dinsdag, Augustus 20, 2019 09:23:56 nm.");
    expect(
      strftime(new Date("2019 08 20 21:23:56"), "%A, %B %d, %Y %I:%M:%S %P", { locale: de }),
    ).toBe("Dienstag, August 20, 2019 09:23:56 pm");
    expect(
      strftime(new Date("2019 08 20 21:23:56"), "%A, %B %d, %Y %I:%M:%S %P", { locale: fr }),
    ).toBe("mardi, août 20, 2019 09:23:56 PM");
    expect(
      strftime(new Date("2000 02 20 19:23:56"), "%A, %B %d, %Y %I:%M:%S %P %t %n %p%p %pp"),
    ).toBe("Sunday, February 20, 2000 07:23:56 PM %t %n %p%p %pp");
    expect(
      strftime(
        new Date("2000 02 20 19:23:56"),
        "%A, %B %do %I:%M:%S %P is in the %Qo Quarter of %Y and %B is the %mo Month",
      ),
    ).toBe(
      "Sunday, February 20th 07:23:56 PM is in the 1st Quarter of 2000 and February is the 2nd Month",
    );
  });

  test("should throw a TypeError('invalid date')", () => {
    expect(strftime(Date.now(), null)).toStrictEqual(new TypeError("Invalid format string: null"));
  });

  test("should throw an error ('invalid date')", () => {
    expect(strftime(new Date("31 12 2019"), "%A, %B %d")).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });

  test("should throw an error ('invalid date')", () => {
    expect(strftime(null, "%A, %B %d")).toStrictEqual(new TypeError("Invalid Date"));
  });

  test("should throw an error ('invalid locale')", () => {
    expect(strftime(new Date(), "%A, %B %d", { locale: {} })).toStrictEqual(
      new TypeError("Invalid locale"),
    );
  });
});
