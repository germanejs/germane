const endOfQuarter = require("../../lib/endOfQuarter");

describe("endOfQuarter returns the difference from given date to when its quarter ends", () => {
    test('should return difference till quarter end', () => {
      expect(endOfQuarter(new Date("2019 09 12 19:23:18"))).toBe("In 18 days");
      expect(endOfQuarter(new Date("2023 01 12 09:12:19"))).toBe("In 2 months");
      expect(endOfQuarter(new Date("1990 12 31 22:00:00"))).toBe("In 1 hour");
      expect(endOfQuarter(new Date("1900 06 30 23:59:59"))).toBe("In 0 second");
      expect(endOfQuarter(new Date("2039 02 27"))).toBe("In 1 month");
      expect(endOfQuarter(new Date("2019 09 30 23:20:34"))).toBe("In 39 minutes");
    })
    test("should throw an error", () => {
		expect(() => {
			endOfQuarter(new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfQuarter("" + new Date("2019 10 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfQuarter([null]);
		}).toThrow(/Invalid Date/);
	});
})