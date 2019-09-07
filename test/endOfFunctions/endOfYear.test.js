const endOfYear = require("../../lib/endOfYear");

describe("endOfYear returns the difference between given date till when its year ends", () => {
	test("should return difference till given here end ", () => {
		expect(endOfYear(new Date("2019 02 28"))).toBe("In 10 months");
		expect(endOfYear(new Date("2011 04 01 06:18:45"))).toBe("In 8 months");
		expect(endOfYear(new Date("2019 12 31"))).toBe("In 23 hours");
		expect(endOfYear(new Date("1775 12 31 23:55:17"))).toBe("In 4 minutes");
		expect(endOfYear(new Date("2013 12 31 23:59:00"))).toBe(
			"In 59 seconds"
		);
		expect(endOfYear(new Date("2050 12 30"))).toBe("In 1 day");
	});

	test("should throw an error", () => {
		expect(() => {
			endOfYear(new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfYear("" + new Date("2019 10 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfYear(null);
		}).toThrow(/Invalid Date/);
	});
});
