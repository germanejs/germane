const startOfWeek = require("../../lib/startOfWeek");

describe("Returns the start of the current week of given date", () => {
	test("should return {values(how many days since the start of week)} in days", () => {
		expect(startOfWeek(new Date("1980 12 31 09:09:09"))).toBe("3 days ago");
		expect(startOfWeek(new Date("1975 10 05 00:12:09"))).toBe(
			"12 minutes ago"
		);

		expect(startOfWeek(new Date("2019 08 30"))).toBe("5 days ago");

		expect(startOfWeek(new Date("2060 01 01 19:59:58"))).toBe("4 days ago");

		expect(startOfWeek(new Date("2060 01 04 00:00:58"))).toBe(
			"58 seconds ago"
		);
		expect(startOfWeek(new Date("2060 01 04 00:00:00"))).toBe(
			"0 second ago"
		);
	});

	test("should throw an error (type or range)", () => {
		expect(() => {
			startOfWeek(new Date("19 19 19"));
		}).toThrow(/Invalid Date/);
		expect(() => {
			startOfWeek(new Date("2019 09 19 23:09:60"));
		}).toThrow(/Invalid Date/);
		expect(() => {
			startOfWeek(new Date("2019 19 19").toLocaleDateString());
		}).toThrow(/Invalid Date/);
	});
});
