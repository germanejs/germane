const startOfMonth = require("../../lib/startOfMonth");

describe("Returns the time passed from given date till the beginning of its month", () => {
	test("should return times passed in {days | seconds| minutes}", () => {
		expect(startOfMonth(new Date("2019 09 09 12:00:00"))).toBe(
			"8 days ago"
		);
		expect(startOfMonth(new Date("2017 11 30 23:59:59"))).toBe(
			"29 days ago"
		);
		expect(startOfMonth(new Date("2019 01 01 00:00:01"))).toBe(
			"1 second ago"
		);
		expect(startOfMonth(new Date("2019-09-01 00:00:00"))).toBe(
			"0 second ago"
		);
		expect(startOfMonth(new Date("1990 09 01 00:10:01"))).toBe(
			"10 minutes ago"
		);
	});

	test("should throw an error (type or range)", () => {
		expect(() => {
			startOfMonth(new Date("1900 19 00"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			startOfMonth(new Date("2019 09 19").toString());
		}).toThrow(/Invalid Date/);
	});
});
