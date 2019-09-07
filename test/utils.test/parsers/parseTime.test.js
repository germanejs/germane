const { parseTime } = require("../../../lib/utils/parsers/parseTime");

test("should return formatted time object", () => {
	const time = {
		full: "10:23:09",
		hour24: {
			decimal: {
				zeroPadded: "10",
				nonZeroPadded: "10"
			}
		},
		hour12: {
			decimal: {
				zeroPadded: "10",
				nonZeroPadded: "10"
			}
		},
		minute: {
			decimal: {
				zeroPadded: "23",
				nonZeroPadded: "23"
			}
		},
		seconds: {
			decimal: {
				zeroPadded: "09",
				nonZeroPadded: "9"
			}
		},
		milliseconds: {
			decimal: {
				zeroPadded: "000"
			}
		},
		meridiem: {
			small: "am",
			big: "AM",
			dotted: "a.m"
		},
		timestamp: {
			milliseconds: "1566206589000",
			seconds: "1566206589"
		},
		apprTime: "10:23:09 AM",
		tzOffset: {
			normal: "+0100",
			colonized: "+01:00"
		},
		tzLong: "West Africa Standard Time",
		tzShort: "WAST"
	};

	expect(parseTime(new Date("2019-08-19T10:23:09"))).toStrictEqual(time);
});
