const startOfQuarter = require("../../lib/startOfQuarter");

describe("Returns the difference from beginning of the given dates quarter till the current given date", () => {
	test("should return difference in {Months|Days|Seconds|Minutes|Hours}", () => {
		expect(startOfQuarter(new Date(2019, 3, 9, 23, 45, 21))).toBe(
			"8 days ago"
		);
		expect(startOfQuarter(new Date("2000-02-29T22:21:59Z"))).toBe(
			"1 month ago"
		);
		expect(startOfQuarter(new Date("2045 07 12 23:12:12"))).toBe(
			"11 days ago"
		);
		expect(startOfQuarter(new Date("2011 10 31 23:00:00"))).toBe(
			"30 days ago"
		);
		expect(startOfQuarter(new Date("2011 04 01 01:00:15"))).toBe(
			"1 hour ago"
		);
		expect(startOfQuarter(new Date("1999 01 01 00:00:08"))).toBe(
			"8 seconds ago"
		);
		expect(startOfQuarter(new Date("1000 04 01 00:59:49"))).toBe(
			"59 minutes ago"
		);
	});

	test("should throw an error (type or range)", () => {
		expect(() => {
			startOfQuarter(new Date("1900 19 00"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			startOfQuarter(new Date("2019 09 19").toString());
		}).toThrow(/Invalid Date/);
	});
});
