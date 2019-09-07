const startOfMinute = require("../../lib/startOfMinute");

describe("Returns the time passed since the start of dates' minute", () => {
	test("should return {total seconds passed} ago", () => {
		expect(startOfMinute(new Date("2000 01 10 23:09:34"))).toBe(
			"34 seconds ago"
		);
		expect(startOfMinute(new Date("2019 08 01 12:11:00"))).toBe(
			"0 second ago"
		);
		expect(startOfMinute(new Date("2013 08 07 19:09:12"))).toBe(
			"12 seconds ago"
		);
		expect(startOfMinute(new Date("2011 09 14 14:15:56"))).toBe(
			"56 seconds ago"
		);
	});

	test("should throw an error", () => {
		expect(() => {
			startOfMinute(new Date("2019 19 0"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			startOfMinute("" + new Date("2020 19 19"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			startOfMinute(new Date("2019 09 19 23:09:60"));
		}).toThrow(/Invalid Date/);
	});
});
