const endOfWeek = require("../../lib/endOfWeek");

describe("endOfWeek returns the end of the date current week", () => {
	test("should return distance till end of week in {days|hours|minutes|seconds}", () => {
		expect(endOfWeek(new Date("2019 04 12 12:45:19"))).toBe("In 1 day");
		expect(endOfWeek(new Date("2014 11 18 12:12:12"))).toBe("In 4 days");
		expect(endOfWeek(new Date("2018 07 14 04:12:02"))).toBe("In 19 hours");
		expect(endOfWeek(new Date("2010 07 03 23:34:09"))).toBe(
			"In 25 minutes"
		);
		expect(endOfWeek(new Date("2010 07 03 23:59:09"))).toBe(
			"In 50 seconds"
		);
		expect(endOfWeek(new Date("1920 01 10 23:00:00"))).toBe(
			"In 59 minutes"
		);
	});

	test("should throw an error", () => {
		expect(() => {
			endOfWeek(new Date("2019 01 01 23:56:90"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfWeek("" + new Date("2019 10 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfWeek(false);
		}).toThrow(/Invalid Date/);
	});
});
