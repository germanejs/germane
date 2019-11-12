const format = require("../index");
const fr = require("../../locale/fr");
const yo = require("../../locale/yo");
const de = require("../../locale/de");
const af = require("../../locale/af");
const es = require("../../locale/es");
const germane = require("../../germane");

describe("Formats date time to human readable string using the format string and format specified", () => {
  test("should correctly parse all format tokens in relation with the date below 👇", () => {
    const date = germane("2019-01-24T11:09:15.900Z", "Africa/Accra");
    // era
    expect(format(date, "G, GG, GGG, GGGG, GGGGG")).toBe("AD, AD, AD, Anno Domini, A");
    // year
    expect(format(date, "y, yy, yyy, yyyy, yyyyy, Y, YY, YYY, YYYY")).toBe(
      "19, 19, 019, 2019, 02019, 19, 19, 019, 2019",
    );
    // quarter
    expect(format(date, "Q, QQ, QQQ, QQQQ, QQQQQ, Qo, q, qq, qqq, qqqq, qqqqq, qo")).toBe(
      "1, 01, Q1, 1st quarter, 1, 1st, 1, 01, Q1, 1st quarter, 1, 1st",
    );
    // month
    expect(format(date, "M, MM, MMM, MMMM, MMMMM, Mo, L, LL, LLL, LLLL, LLLLL, Lo")).toBe(
      "1, 01, Jan, January, J, 1st, 1, 01, Jan, January, J, 1st",
    );
    // week
    expect(format(date, "w, ww, wo")).toBe("4, 04, 4th");
    // day
    expect(format(date, "d, dd, do, D, DD, DDD, Do, F, Fo")).toBe(
      "24, 24, 24th, 024, 024, 024, 24th, 4, 4th",
    );
    // ISO
    expect(format(date, "i, ii, io, iii, iiii, iiiii, I, II, R, RR, RRR, RRRR")).toBe(
      "4, 04, 4th, Thu, Thursday, T, 04, 4th, 19, 19, 019, 2019",
    );
    // timezone
    expect(
      format(
        date,
        "xxxxx, xxxx, xxx, xx, x, XXXXX, XXXX, XXX, XX, X, zzzz, zzz, zz, z, OOOO, O, ZZZZZ, ZZZZ, ZZZ, ZZ, Z",
      ),
    ).toBe(
      "+00:00, +0000, Z, UTC+0000, +00, Z, Z, Z, Z, Z, UTC+00:00, UTC+00, UTC+00, UTC+00, UTC+00:00, +00, Z, UTC+00:00, +0000, +0000, +0000",
    );
    // milliseconds
    expect(format(date, "S, SS, SSS, A, f, ff")).toBe(
      "900, 9, 90, 40155900, 1548328155, 1548328155900",
    );
    // seconds
    expect(format(date, "s, ss")).toBe("15, 15");
    // minutes
    expect(format(date, "m, mm")).toBe("9, 09");
    // hours
    expect(format(date, "h, hh, H, HH, K, KK, k, kk")).toBe("11, 11, 11, 11, 11, 11, 12, 12");
    // period
    expect(
      format(date, "a, aa, aaa, aaaa, aaaaa, b, b, bbb, bbbb, bbbbb, B, BB, BBB, BBBB, BBBBB"),
    ).toBe(
      "AM, AM, AM, am., a, morning, morning, morning, morning, in the morning, morning, morning, morning, in the morning, in the morning",
    );
    // weekday
    expect(
      format(
        date,
        "E, EE, EEE, EEEE, EEEEE, EEEEEE, e, ee, eee, eeee, eeeee, eeeeee, c, cc, ccc, cccc, ccccc, cccccc",
      ),
    ).toBe(
      "Thu, Thu, Thu, Thursday, T, Th, 4, 04, Thu, Thursday, T, Th, 4, 4, Thu, Thursday, T, Th",
    );
  });
});

describe("Formats date time to human readable string using the format string and format specified", () => {
  test("should return Monday, 9th of September, 2019 18:45:12", () => {
    expect(format(new Date("2019 09 09 18:45:12"), "EEEE, do of MMMM, YYYY HH:mm:ss")).toBe(
      "Monday, 9th of September, 2019 18:45:12",
    );

    expect(
      format(
        new Date("2019 09 09 18:45:12"),
        "EEEE, do of MMMM, YYYY HH:mm:ss [DDDDD MMMMM DDDDo dddo]",
      ),
    ).toBe("Monday, 9th of September, 2019 18:45:12 DDDDD MMMMM DDDDo dddo");

    expect(format(new Date("2019 09 09 18:45:12"), "Today is EEEE, do of LLL, YYYY HH:mm:ss")).toBe(
      "Today is Monday, 9th of Sep, 2019 18:45:12",
    );

    expect(
      format(
        germane("2019-09-09 18:45:12Z", "Africa/Windhoek"),
        "Today is EEEE, do of LLL, YYYY HH:mm:ss xxx",
      ),
    ).toBe("Today is Monday, 9th of Sep, 2019 20:45:12 UTC+0200");

    // yoruba
    expect(format(new Date("2019-11-08 07:00:48"), "PPP TT BBBB", { locale: yo })).toBe(
      "8 Bél 2019 7:00:48 ní owurọ",
    );

    // german
    expect(format(new Date("2019-11-08 07:00:48"), "PPP TT BBBB", { locale: de })).toBe(
      "8. November 2019 07:00:48 morgens",
    );

    // afrikaans
    expect(format(new Date("2019-11-08 07:00:48"), "PPP TT BBBB", { locale: af })).toBe(
      "08 November 2019 07:00:48 in die oggend",
    );

    // french
    expect(
      format(new Date("2019 09 09 18:45:12"), "[Aujourd'hui est] EEEE, do MMMM, YYYY HH:mm:ss", {
        locale: fr,
      }),
    ).toBe("Aujourd'hui est lundi, 9e septembre, 2019 18:45:12");

    // spanish
    expect(format(new Date("2019-11-08 07:00:48"), "PPP TT BBBB GGGG", { locale: es })).toBe(
      "8 de noviembre de 2019 7:00:48 en la mañana después de Cristo",
    );
  });

  describe("should return an error if the something went wrong", () => {
    test("should return a TypeError", () => {
      expect(format(Date.now(), null)).toStrictEqual(new TypeError("Invalid format string: null"));
    });

    test("should return RangeError ('invalid date')", () => {
      expect(format(new Date("31 12 2019"), "dddd, MM Do")).toStrictEqual(
        new RangeError("Invalid Date"),
      );
    });

    test("should throw a TypeError ('invalid date')", () => {
      expect(format(null, "dddd, MM Do")).toStrictEqual(new TypeError("Invalid Date"));
    });

    test("should throw a TypeError ('invalid locale')", () => {
      expect(format(new Date(), "eeee, MM do", { locale: {} })).toStrictEqual(
        new TypeError("Invalid locale"),
      );
    });
  });
});
