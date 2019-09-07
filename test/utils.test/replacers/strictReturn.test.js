const strictReturn = require("../../../lib/utils/replacers/strictReturn");

test("should return 1 week, 2 days, 3 hours, 1 minute, 50 seconds", () => {
	expect(
		strictReturn({ weeks: 1, days: 2, hours: 3, minutes: 1, seconds: 50 }, [
			"weeks",
			"days",
			"hours",
			"minutes",
			"seconds"
		])
	).toBe("1 week, 2 days, 3 hours, 1 minute, 50 seconds");
});

test("should return 1 week, 2 days, 3 hours, 1 minute, 50 seconds", () => {
	expect(
		strictReturn({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }, [
			"weeks",
			"days",
			"hours",
			"minutes",
			"seconds"
		])
		// result pending a change.
	).toBe("");
});
