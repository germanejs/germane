const formatRelative = require("../../lib/formatRelative");
const germane = require("../../lib/germane");

describe("formatRelative formats a date relative to its current", () => {
  test("should Last thursday", () => {
    expect(formatRelative(germane("2019-11-11", "UTC"), germane("2019-11-07", "UTC"))).toBe(
      "Last thursday",
    );
  });

  test("should Just now", () => {
    expect(formatRelative(germane(), germane())).toBe("Just now");
  });

  test("should Just now", () => {
    expect(formatRelative(new Date(), new Date())).toBe("Just now");
  });

  test("should Next tuesday", () => {
    expect(formatRelative(germane("1981-07-15", "UTC"), germane("1981-07-21", "UTC"))).toBe(
      "Next tuesday",
    );
  });

  test("should Next sunday", () => {
    expect(formatRelative(germane("2015-07-15", "UTC"), germane("2015-07-19", "UTC"))).toBe(
      "Next sunday",
    );
  });

  test("should 3 hours ago", () => {
    expect(
      formatRelative(germane("2019-11-07 03:11:45.890Z", "UTC"), germane("2019-11-07", "UTC")),
    ).toBe("3 hours ago");
  });

  test("should In 3 hours", () => {
    expect(
      formatRelative(germane("2019-11-07", "UTC"), germane("2019-11-07 03:11:45.890Z", "UTC")),
    ).toBe("In 3 hours");
  });

  test("should 57 minutes ago", () => {
    expect(
      formatRelative(
        germane("2019-11-07 03:03:58.999Z", "UTC"),
        germane("2019-11-07 02:06:11.110Z", "UTC"),
      ),
    ).toBe("57 minutes ago");
  });

  test("should In 57 minutes", () => {
    expect(
      formatRelative(
        germane("2019-11-07 02:06:11.110Z", "UTC"),
        germane("2019-11-07 03:03:58.999Z", "UTC"),
      ),
    ).toBe("In 57 minutes");
  });

  test("should 10 seconds ago", () => {
    expect(formatRelative(new Date("2019-11-11 23:11:11Z"), new Date("2019-11-11 23:11:01Z"))).toBe(
      "10 seconds ago",
    );
  });

  test("should In 10 seconds", () => {
    expect(formatRelative(new Date("2019-11-11 23:11:01Z"), new Date("2019-11-11 23:11:11Z"))).toBe(
      "In 10 seconds",
    );
  });

  test("should Aug 12", () => {
    expect(formatRelative(germane("2019-11-11", "UTC"), germane("2019-08-12", "UTC"))).toBe(
      "Aug 12",
    );
  });

  test("should Feb 28", () => {
    expect(formatRelative(germane("2017-01-11", "UTC"), germane("2017-02-28", "UTC"))).toBe(
      "Feb 28",
    );
  });

  test("should 07/31/1967", () => {
    expect(formatRelative(germane("1920-09-14", "UTC"), germane("1967-07-31", "UTC"))).toBe(
      "07/31/1967",
    );
  });

  test("should 09/11/2091", () => {
    expect(formatRelative(germane("1920-09-14", "UTC"), germane("2091-09-11", "UTC"))).toBe(
      "09/11/2091",
    );
  });

  test("should Yesterday", () => {
    expect(formatRelative(germane("2019-08-13", "UTC"), germane("2019-08-12", "UTC"))).toBe(
      "Yesterday",
    );
  });

  test("should Tomorrow", () => {
    expect(formatRelative(germane("2019-08-11", "UTC"), germane("2019-08-12", "UTC"))).toBe(
      "Tomorrow",
    );
  });

  test("should return an invalida date TypeError", () => {
    expect(formatRelative(new Date("2019-11-11"), germane("2019 09 11"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(formatRelative(undefined, germane("2019-09-11"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });

  test("should return an invalida date RangeError", () => {
    expect(formatRelative(new Date(""), germane("2019-09-11"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });
});
