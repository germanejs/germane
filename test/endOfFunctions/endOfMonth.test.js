const endOfMonth = require("../../lib/endOfMonth");

describe("endOfMonth returns the end of the fien dates' month in either days|hours|minutes|seconds", () => {
	test("should return the difference from each given date to its month end ", () => {
		expect(endOfMonth(new Date("2013 09 09 12:34:12"))).toBe("In 21 days");
		expect(endOfMonth(new Date("2014 12 31 20:12:45"))).toBe("In 3 hours");
		expect(endOfMonth(new Date("2014 09 30 23:56:59"))).toBe(
			"In 3 minutes"
		);
		expect(endOfMonth(new Date("1987 03 31 23:59:59"))).toBe("In 0 second");
		expect(endOfMonth(new Date("2017 11 21"))).toBe("In 9 days");
	});
	test("should throw an error", () => {
		expect(() => {
			endOfMonth(new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfMonth("" + new Date("2019 10 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfMonth(null);
		}).toThrow(/Invalid Date/);
	});
});
