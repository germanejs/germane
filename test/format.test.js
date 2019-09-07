const format = require("../lib/format");

describe("Formats date time to human readable string using the format string and format specified", () => {
	test("should return Monday, 9th of September, 2019 18:45:12", () => {
		expect(
			format(
				new Date("2019 09 09 18:45:12"),
				"dddd, Do of MMMM, YYYY HH:mm:ss"
			)
		).toBe("Monday, 9th of September, 2019 18:45:12");

		expect(
			format(
				new Date("2019 09 09 18:45:12"),
				"dddd, Do of MMMM, YYYY HH:mm:ss DDDDD MMMMM DDDDo dddo"
			)
		).toBe(
			"Monday, 9th of September, 2019 18:45:12 DDDDD MMMMM DDDDo dddo"
		);

		expect(
			format(
				new Date("2019 09 09 18:45:12"),
				"Today is dddd, Do of MMMM, YYYY HH:mm:ss"
			)
		).toBe("Today is Monday, 9th of September, 2019 18:45:12");
	});

	test("should throw a TypeError('invalid date')", () => {
		expect(() => {
			format(Date.now(), null);
		}).toThrow(/Expected format string to be a string value/);
	});

	test("should throw an error ('invalid date')", () => {
		expect(() => {
			format(new Date("31 12 2019"), "dddd, MM Do");
		}).toThrow(/Invalid Date/);
	});

	test("should throw an error ('invalid date')", () => {
		expect(() => {
			format(null, "dddd, MM Do");
		}).toThrow(/Invalid Date/);
	});
});
