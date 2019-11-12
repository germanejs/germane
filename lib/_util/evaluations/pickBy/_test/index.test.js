const pickBy = require("../index");

describe("SortBy sorts an array using two sort options, min or max", () => {
  test("should return [1, 4, 5, 10, 2000, 130000, 4500000]", () => {
    expect(pickBy([4500000, 10, 1, 130000, 5, 4, 2000], "min")).toEqual(1);
  });
  test("should return [1, 4, 5, 10, 2000, 130000, 4500000]", () => {
    expect(pickBy([4500000, 10, 1, 130000, 5, 4, 2000], "max")).toEqual(4500000);
  });
});
