const shortToLong = require("../../../lib/utils/parsers/shortToLong");

describe("Returns the long version of month and day of week", () => {
	test("should return an object containing the long and short format of a month and day of week", () => {
		const format = {
			month: {
				long: "January",
				short: "Jan"
			},
			day: {
				long: "Friday",
				short: "Fri"
			}
		};
		expect(shortToLong("Jan", "Fri")).toStrictEqual(format);
		expect(shortToLong()).toStrictEqual({
			month: { long: "January", short: "Jan" },
			day: { long: "Monday", short: "Mon" }
		});
	});
});
