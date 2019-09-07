const pluralise = require("../../../lib/utils/replacers/pluralise");

test("should return months", () => {
	expect(pluralise("month", 2)).toBe("months");
});

test("should return hours", () => {
	expect(pluralise("hour", 2)).toBe("hours");
});

test("should return zeroes", () => {
	expect(pluralise("zero", 2)).toBe("zeroes");
});

test("should return boundaries", () => {
	expect(pluralise("boundary", 2)).toBe("boundaries");
});

test("should return days", () => {
	expect(pluralise("day", 2)).toBe("days");
});
test("should return weeks", () => {
	expect(pluralise("week", 2)).toBe("weeks");
});
