const useCFormat = require("../lib/useCFormat");

describe("Uses the C native format style to format dates into human readable string", () => {
	test("should return Tuesday, August 20, 2019 09:23:56 PM", () => {
		expect(
			useCFormat(
				new Date("2019 08 20 21:23:56"),
				"%A, %B %d, %Y %I:%M:%S %p"
			)
		).toBe("Tuesday, August 20, 2019 09:23:56 PM");
	});

	test("should throw a TypeError('invalid date')", () => {
		expect(() => {
			useCFormat(Date.now(), null);
		}).toThrow(/Expected format string to be a string value/);
	});

	test("should throw an error ('invalid date')", () => {
		expect(() => {
			useCFormat(new Date("31 12 2019"), "%A, %B %d");
		}).toThrow(/Invalid Date/);
	});

	test("should throw an error ('invalid date')", () => {
		expect(() => {
			useCFormat(null, "%A, %B %d");
		}).toThrow(/Invalid Date/);
	});
});
