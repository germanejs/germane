const { addOrSubMonths } = require("../../../lib/utils/evaluations/addOrSubMonths");
test("should return", () => {});
describe("addOrSubMonths adds or subs a given months from a given date and return the difference in timestamp", () => {
  test("should return 1472688000000", () => {
    expect(addOrSubMonths({ year: 2022, month: 10, date: 20 }, 560, "add")).toBe(1472688000000);
  });

  test("should return 1215043200000", () => {
    expect(addOrSubMonths({ year: 1980, month: 7, date: 9 }, 462, "add")).toBe(1215043200000);
  });

  test("should return 13046400000", () => {
    expect(addOrSubMonths({ year: 1980, month: 9, date: 30 }, 5, "add")).toBe(13046400000);
  });

  test("should return 1472601600000", () => {
    expect(addOrSubMonths({ year: 2022, month: 10, date: 20 }, 560, "sub")).toBe(1472601600000);
  });

  test("should return 1214870400000", () => {
    expect(addOrSubMonths({ year: 1980, month: 7, date: 9 }, 462, "sub")).toBe(1214870400000);
  });

  test("should return 13219200000", () => {
    expect(addOrSubMonths({ year: 1980, month: 9, date: 30 }, 5, "sub")).toBe(13219200000);
  });

  test("should return 42163200000", () => {
    expect(addOrSubMonths({ year: 1980, month: 6, date: 30 }, 16, "sub")).toBe(42163200000);
  });
});
