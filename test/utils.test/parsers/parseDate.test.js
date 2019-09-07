const { parseDate } = require("../../../lib/utils/parsers/parseDate");

test("should return an object of correctly parsed date", () => {
	const formats = {
		dayOfWeek: {
			long: "Sunday",
			short: "Sun",
			ordinal: "0th",
			two: "Su",
			decimal: {
				nonZeroPadded: "0",
				zeroPadded: "00"
			}
		},
		month: {
			long: "August",
			short: "Aug",
			ordinal: "8th",
			decimal: {
				nonZeroPadded: "8",
				zeroPadded: "08"
			}
		},
		year: {
			withCentury: "2019",
			withoutCentury: "19"
		},
		apprDate: "8/18/2019",
		dayOfYear: {
			ordinal: "230th",
			decimal: {
				zeroPadded: "230",
				nonZeroPadded: "230"
			}
		},
		dayOfMonth: {
			ordinal: "18th",
			decimal: {
				zeroPadded: "18",
				nonZeroPadded: "18"
			}
		},
		quarter: {
			ordinal: "3rd",
			decimal: {
				zeroPadded: "03"
			}
		},
		week: {
			ordinal: "32nd",
			decimal: {
				zeroPadded: "32",
				nonZeroPadded: "32"
			}
		}
	};

	expect(parseDate(new Date("2019 8 18"))).toStrictEqual(formats);
});
