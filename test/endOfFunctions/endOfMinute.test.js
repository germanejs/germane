const endOfMinute = require("../../lib/endOfMinute");

describe("endOfMinute return the end of minute for a given time", () => {
	test("should return the end of minute {in seconfds for given time}", () => {
		expect(endOfMinute(new Date("2018 10 12 05:12:45"))).toBe(
			"In 14 seconds"
		);
		expect(endOfMinute(new Date("2005 03 21 03:00:00"))).toBe(
			"In 59 seconds"
		);
		expect(endOfMinute(new Date("1897 12 12 18:11:06"))).toBe(
			"In 53 seconds"
		);
		expect(endOfMinute(new Date("2019 01 01 01:01:58"))).toBe(
			"In 1 second"
		);
	});

	test("should throw an error", () => {
		expect(() => {
			endOfMinute(new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfMinute("" + new Date("2019 10 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfMinute({});
		}).toThrow(/Invalid Date/);
	});
});
