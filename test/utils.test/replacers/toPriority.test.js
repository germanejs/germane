const toPriority = require("../../../lib/utils/replacers/toPriority");

describe("Prioritises object keys according to given array, returns the first one if its value > 0, else it moves to the next", () => {
	test("should return 1 month", () => {
		expect(
			toPriority({ months: 1, weeks: 2, days: 4, hours: 0, minutes: 0 }, [
				"months",
				"weeks",
				"days",
				"hours",
				"minutes"
			])
		).toBe("1 month");
	});

	test("should return null", () => {
		expect(
			toPriority({ months: 0, weeks: 0, days: 0, hours: 0, minutes: 0 }, [
				"months",
				"weeks",
				"days",
				"hours",
				"minutes"
			])
		).toBe("0 minute");
	});

	test("should return null", () => {
		expect(
			toPriority({ months: 0, weeks: 0, days: 0, hours: 0, minutes: 0 }, [
				"months",
				"weeks",
				"days",
				"hours",
				"minute"
			])
		).toBe(null);
	});

	test("should return 345 hours", () => {
		expect(
			toPriority(
				{
					months: 0,
					weeks: 0,
					days: 0,
					hours: 0,
					minutes: 0,
					totalHours: 345
				},
				["totalHours", "hours"]
			)
		).toBe("345 hours");
	});

	test("should return 15 weeks", () => {
		expect(toPriority({ totalWeeks: 15 }, ["totalWeeks"])).toBe("15 weeks");
	});
});
