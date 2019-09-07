const startOfHour = require("../../lib/startOfHour");

describe("Returns the start of current hour in words", () => {
	test("should return (difference in minutes | seconds) ago", () => {
		expect(startOfHour(new Date("2020 09 12 12:35:45"))).toBe(
			"35 minutes ago"
		);
		expect(startOfHour(new Date("2019 09 23 23:12:59"))).toBe(
			"12 minutes ago"
		);
		expect(startOfHour(new Date("2010 01 19 23:00:34"))).toBe(
			"34 seconds ago"
		);
		expect(startOfHour(new Date("1900 07 04 00:00:01"))).toBe(
			"1 second ago"
		);
		expect(startOfHour(new Date("1899 12 31 19:00:00"))).toBe(
			"0 second ago"
		);
		expect(startOfHour(new Date("2050 07 05 00:01:59"))).toBe(
			"1 minute ago"
		);
		expect(startOfHour(new Date("2011 06 30"))).toBe("0 second ago");
	});

	test("should throw an error (type or range)", () => {
		expect(() => {
			startOfHour(new Date("19 19 19"));
		}).toThrow(/Invalid Date/);
		expect(() => {
			startOfHour(new Date("2019 09 19").toString());
		}).toThrow(/Invalid Date/);
	});
});
