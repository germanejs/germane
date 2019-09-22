const getBusinessDays = require("../../lib/getBusinessDays");

describe("getBussinessDays, returns array of business days (mon-fri) ranging from first date to second date", () => {
  test("should return an array of  timestamp", () => {
    const timestamps = [
      1567641600000,
      1567728000000,
      1567987200000,
      1568073600000,
      1568160000000,
      1568246400000,
      1568332800000,
      1568592000000,
      1568678400000,
      1568764800000,
      1568851200000,
      1568937600000,
    ];
    expect(
      getBusinessDays(new Date("2019-09-05"), new Date("2019-09-21"), function (a) {
        return a;
      }),
    ).toStrictEqual(timestamps);
  });

  test("should return an array of timestamp", () => {
    const timestamps = [
      1568937600000,
      1568851200000,
      1568764800000,
      1568678400000,
      1568592000000,
      1568332800000,
      1568246400000,
      1568160000000,
      1568073600000,
      1567987200000,
      1567728000000,
      1567641600000,
    ];
    expect(getBusinessDays(new Date("2019-09-21"), new Date("2019-09-05"), a => a)).toStrictEqual(
      timestamps,
    );
  });

  test("should throw an error", () => {
    expect(getBusinessDays(Date.now(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(getBusinessDays(new Date("2019 09 05"), "")).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(getBusinessDays({}, Date.now())).toStrictEqual(new TypeError("Invalid Date"));

    expect(getBusinessDays(new Date(""), Date.now())).toStrictEqual(new RangeError("Invalid Date"));
  });
});
