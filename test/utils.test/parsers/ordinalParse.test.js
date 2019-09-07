const { ordinalParse } = require("../../../lib/utils/parsers/ordinalParse");

describe("Returns the ordinal of a given number", () => {
	test("should return an ordinal of a given number", () => {
		for (let i = 10; i <= 20; i++) {
			expect(ordinalParse(i)).toBe(`${i}th`);
		}
		for (let i = 4; i <= 10; i++) {
			expect(ordinalParse(i)).toBe(`${i}th`);
		}
		expect(ordinalParse(21)).toBe("21st");
		expect(ordinalParse(22)).toBe("22nd");
		expect(ordinalParse(3)).toBe("3rd");
	});

	test("should return given string", () => {
		expect(ordinalParse("abracadabra")).toBe("abracadabraabracadabra");
	});
});
