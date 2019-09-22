const getMonthAndWeekdayName = require("../../../lib/utils/evaluations/get_month_weekday_name");

describe("returns the short and long form of a weekday name given its ordinal", () => {
  // Months is zero indexed
  test("should return an object with month and weekday names", () => {
    expect(getMonthAndWeekdayName(2, 6)).toStrictEqual({
      monthNameShort: "Mar",
      monthName: "March",
      dayNameShort: "Sat",
      dayName: "Saturday",
      dayNameMin: "Sa",
    });

    expect(getMonthAndWeekdayName(11, 4)).toStrictEqual({
      monthNameShort: "Dec",
      monthName: "December",
      dayNameShort: "Thu",
      dayName: "Thursday",
      dayNameMin: "Th",
    });

    expect(getMonthAndWeekdayName(5, 7)).toStrictEqual({
      monthNameShort: "Jun",
      monthName: "June",
      dayNameShort: "Sun",
      dayName: "Sunday",
      dayNameMin: "Su",
    });

    expect(getMonthAndWeekdayName(7, 1)).toStrictEqual({
      monthNameShort: "Aug",
      monthName: "August",
      dayNameShort: "Mon",
      dayName: "Monday",
      dayNameMin: "Mo",
    });
  });
});
