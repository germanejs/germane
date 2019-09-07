const { replacer } = require("../../../lib/utils/replacers/replacer");

describe("Main replacer used in string formating, handles string formatting based on an object, regex and a format string", () => {
	test("should replace given formats in a string", () => {
		expect(
			replacer(
				"YYYY/MM/DD",
				{ YYYY: "2019", MM: "03", DD: "12" },
				/\bYYYY\b|\bDD\b|\bMM\b/g
			)
		).toBe("2019/03/12");
	});

	test("should return 2019/02/12", () => {
		expect(
			replacer(
				"YYYY/MM/DD",
				{ YYYY: "2010", MM: "01", DD: "19" },
				/\bYYYY\b|\bDD\b|\bMM\b/g
			)
		).toBe("2010/01/19");
	});

	test("should return the original format string", () => {
		expect(
			replacer(
				"Hello World",
				{ YYYY: "2019", MM: "03", DD: "12" },
				/\bYYYY\b|\bDD\b|\bMM\b/g
			)
		).toBe("Hello World");
	});
});
