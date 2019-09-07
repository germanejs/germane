const {
	absFloor,
	absCeil,
	floor,
	trunc,
	ceil
} = require("../../lib/utils/roundingMethods");

describe("rounding methods", () => {
	test("should return 4", () => {
		expect(absFloor(4.92323123)).toBe(4);
	});

	test("should return 5", () => {
		expect(absCeil(4.92323123)).toBe(5);
	});

	test("should return -5", () => {
		expect(floor(-4.92323123)).toBe(-5);
	});

	test("should return -4", () => {
		expect(trunc(-4.92323123)).toBe(-4);
	});

	test("should return -4", () => {
		expect(ceil(-4.92323123)).toBe(-4);
	});
});
