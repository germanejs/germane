const daysToMonths = require("../../../lib/utils/evaluations/daysToMonths");

describe("Turns days to months dividing by 400 years, and taking into account leap years", () => {
	test("should return total months in a given number of days", () => {
		expect(daysToMonths(2091)).toBe(69.1730359690414);
		expect(daysToMonths(89722)).toBe(2968.1220149279447);
		expect(daysToMonths(1)).toBe(0.03308131801484524);
	});
});
