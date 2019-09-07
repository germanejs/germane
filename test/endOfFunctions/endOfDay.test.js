const endOfDay = require("../../lib/endOfDay");

describe("endOfDay returns the difference from given date and time to the end of its day", () => {
	test("should return the end of day either in seconds | minutes | hours, varying on the datetime specified", () => {
		expect(endOfDay(new Date("2014 06 18 09:12:33"))).toBe("In 14 hours");
		expect(endOfDay(new Date("1945-10-12T18:19:56"))).toBe("In 5 hours");
		expect(endOfDay(new Date("1880 12 23 23:34:12"))).toBe("In 25 minutes");
		expect(endOfDay(new Date("1605 12 04 23:59:45"))).toBe("In 14 seconds");
		expect(endOfDay(new Date("2056 08 31 23:00:00"))).toBe("In 59 minutes");
	});
	test("should throw an error", () => {
		expect(() => {
			endOfDay(new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfDay("" + new Date("2019 10 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfDay({});
		}).toThrow(/Invalid Date/);
	});
});
