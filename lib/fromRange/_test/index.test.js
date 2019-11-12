const fromRange = require("../index");

describe("fromRange returns the dates btw a starting date and an ending date", () => {
  test("should return an array of date", () => {
    expect(fromRange(new Date("2019-09-25 18:00:11Z"), new Date("2019-10-24 23:45:58Z"))).toEqual([
      new Date("2019-09-25 18:00:11Z").getTime(),
      1569456000000,
      1569542400000,
      1569628800000,
      1569715200000,
      1569801600000,
      1569888000000,
      1569974400000,
      1570060800000,
      1570147200000,
      1570233600000,
      1570320000000,
      1570406400000,
      1570492800000,
      1570579200000,
      1570665600000,
      1570752000000,
      1570838400000,
      1570924800000,
      1571011200000,
      1571097600000,
      1571184000000,
      1571270400000,
      1571356800000,
      1571443200000,
      1571529600000,
      1571616000000,
      1571702400000,
      1571788800000,
      new Date("2019-10-24 23:45:58Z").getTime(),
    ]);
  });

  test("should return an array of date", () => {
    expect(fromRange(new Date("2019-10-24 23:45:58Z"), new Date("2019-09-25 18:00:11Z"))).toEqual(
      [
        new Date("2019-09-25 18:00:11Z").getTime(),
        1569456000000,
        1569542400000,
        1569628800000,
        1569715200000,
        1569801600000,
        1569888000000,
        1569974400000,
        1570060800000,
        1570147200000,
        1570233600000,
        1570320000000,
        1570406400000,
        1570492800000,
        1570579200000,
        1570665600000,
        1570752000000,
        1570838400000,
        1570924800000,
        1571011200000,
        1571097600000,
        1571184000000,
        1571270400000,
        1571356800000,
        1571443200000,
        1571529600000,
        1571616000000,
        1571702400000,
        1571788800000,
        new Date("2019-10-24 23:45:58Z").getTime(),
      ].reverse(),
    );
  });

  test("should return an error", () => {
    expect(fromRange(Date.now(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(fromRange(new Date("2019 09 05"), "")).toStrictEqual(new TypeError("Invalid Date"));

    expect(fromRange({}, Date.now())).toStrictEqual(new TypeError("Invalid Date"));

    expect(fromRange(new Date().toISOString(), Date.now())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
    expect(fromRange(new Date(""), Date.now())).toStrictEqual(new RangeError("Invalid Date"));
  });
});
