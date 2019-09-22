const {
  ISOBasicFormat,
  ISOExpanded,
  ISOWeekNumberingYear,
  ISOWeekDate,
  ordinalDate,
  rfcDate,
  ASPDate,
} = require("../../../lib/utils/evaluations/isoDate");

describe("ISOBasicFormat parses an date ISO basic format string and returns a timestamp", () => {
  test("should return 2492988850000", () => {
    expect(ISOBasicFormat("20481231T005410Z")).toBe(2492988850000);
  });
  test("should return 324891000", () => {
    expect(ISOBasicFormat("19700104T181451Z")).toBe(324891000);
  });
  test("should RangeError: Invalid Date", () => {
    expect(ISOExpanded("20191311")).toStrictEqual(new RangeError("Invalid Date"));
  });
});

describe("ISOExpanded parses an date ISO expanded format string and returns a timestamp", () => {
  test("should return 2492988850000", () => {
    expect(ISOExpanded("2048-12-31T00:54:10Z")).toBe(2492988850000);
  });
  test("should return 324891000", () => {
    expect(ISOExpanded("1970-01-04T18:14:51Z")).toBe(324891000);
  });
  test("should return 410227200000", () => {
    expect(ISOExpanded("1983-01-01")).toBe(410227200000);
  });
  test("should return 410227200000", () => {
    expect(ISOExpanded("1983-01")).toBe(410227200000);
  });
  test("should return 2493022450000", () => {
    expect(ISOExpanded("2048-12-31T00:54:10-0920")).toBe(2493022450000);
  });

  test("should return 2493022440000", () => {
    expect(ISOExpanded("2048-12-31T00:54-0920")).toBe(2493022440000);
  });
  test("should return 2492988840000", () => {
    expect(ISOExpanded("2048-12-31 00:54Z")).toBe(2492988840000);
  });

  test("should return 2492988850567", () => {
    expect(ISOExpanded("2048-12-31T00:54:10.567Z")).toBe(2492988850567);
  });

  test("should RangeError: Invalid Date", () => {
    expect(ISOExpanded("2019-13-11")).toStrictEqual(new RangeError("Invalid Date"));
  });

  test("should return RangeError: Invalid Date", () => {
    expect(ISOExpanded("2048-12-31T00:54:10-0960")).toStrictEqual(new RangeError("Invalid Date"));
  });
});

describe("ISOWeekNumberingYear parses an ISO week numbering year string and returns timestamp", () => {
  test("should return 258595200000", () => {
    expect(ISOWeekNumberingYear("1978-W11-1")).toBe(258595200000);
  });
  test("should return -2497564800000", () => {
    expect(ISOWeekNumberingYear("1890-W45-7")).toBe(-2497564800000);
  });

  test("should return RangeError", () => {
    expect(ISOWeekNumberingYear("1890-W45-9")).toStrictEqual(new RangeError("Invalid Date"));
  });

  test("should return RangeError", () => {
    expect(ISOWeekNumberingYear("2019-W53-1")).toStrictEqual(new RangeError("Invalid Date"));
  });
});

describe("ISOWeekDate parses an ISO week date and returns the first day in its week as a timestamp", () => {
  test("should return 258595200000", () => {
    expect(ISOWeekDate("1978-W11")).toBe(258595200000);
  });
  test("should return -11649312000000", () => {
    expect(ISOWeekDate("1600-W45")).toBe(-11649312000000);
  });
  test("should return RangeError", () => {
    expect(ISOWeekDate("2019-W53")).toStrictEqual(new RangeError("Invalid Date"));
  });
});

describe("rfcDate parses and RFC5822 or RFC2822 date string and returns a timestamp", () => {
  test("should return 1546304400000", () => {
    expect(rfcDate("Tue, 01 Jan 2019 00:00:00 -01:00")).toBe(1546304400000);
  });
  test("should return -11649268828000", () => {
    expect(rfcDate("Mon, 6 Nov 1600 11:59:32")).toBe(-11649268828000);
  });
});

describe("ASPDate parses an ASP.net JSON date string and returns a timestamp", () => {
  test("should return 11649269644000", () => {
    expect(ASPDate("/Date(11649269644000)/")).toBe(11649269644000);
  });
});

describe("Ordinal Date parses an ISO ordinal date string and return a timestamp", () => {
  test("should  return 1546300800000", () => {
    expect(ordinalDate("2019-01")).toBe(1546300800000);
  });
  test("should 13392000000 ", () => {
    expect(ordinalDate("1970-156")).toBe(13392000000);
  });
});
