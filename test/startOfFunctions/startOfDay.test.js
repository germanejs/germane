const startOfDay = require("../../lib/startOfDay");

describe("Returns the total hour|minute|seconds passed since the start of the date provided", () => {
	test("should return time passed ", () => {
		expect(startOfDay(new Date("1800 09 04 23:12:19"))).toBe(
			"23 hours ago"
		);
		expect(startOfDay(new Date("2019 01 01"))).toBe("0 second ago");
		expect(startOfDay(new Date("2040 12 23 00:56:19"))).toBe(
			"56 minutes ago"
		);
		expect(startOfDay(new Date("2019 07 05 07:05:05"))).toBe("7 hours ago");
		expect(startOfDay(new Date("2106 02 28 18:59:04"))).toBe(
			"18 hours ago"
		);
		expect(startOfDay(new Date("1960 10 01 01:00:00"))).toBe("1 hour ago");
		expect(startOfDay(new Date("1776 07 04 00:01:00"))).toBe(
			"1 minute ago"
		);
	});

	test("should throw an error (type or range)", () => {
		expect(() => {
			startOfDay(new Date("19 19 19"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			startOfDay(new Date("2019 19 19").toLocaleDateString());
		}).toThrow(/Invalid Date/);

		expect(() => {
			startOfDay(new Date("2019 09 19 23:09:60"));
		}).toThrow(/Invalid Date/);
	});
});
