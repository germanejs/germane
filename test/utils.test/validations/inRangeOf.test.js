const inRangeOf = require("../../../lib/utils/validations/inRangeOf");

test("should return true", () => {
	expect(inRangeOf(1, 0, 10)).toBe(true);
});

test("should return false", () => {
	expect(inRangeOf(20, 0, 10)).toBe(false);
});
