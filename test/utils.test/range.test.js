const range = require("../../lib/utils/range");

test("should return a total sum of number that ranges from the start value to the end value including the step", () => {
	expect(range(1, 10)).toBe(9);
});
