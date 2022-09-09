import { FizzBuzz, internal } from "./functors";

describe("Test of internal()", function () {
  describe("Should return n by default", () => {
    it("should return '2' for n = 2", () => {
      expect(internal(2)).toEqual("2");
    });

    it("should return '4' for n = 4", () => {
      expect(internal(4)).toEqual("4");
    });
  });

  describe("If n is a multiple of 3, return 'Fizz'", () => {
    it("should return 'Fizz' for n = 3", () => {
      expect(internal(3)).toEqual("Fizz");
    });

    it("should return 'Fizz' for n = 6", () => {
      expect(internal(6)).toEqual("Fizz");
    });
  });

  describe("If n is a multiple of 5, return 'Buzz'", () => {
    it("should return 'Buzz' for n = 5", () => {
      expect(internal(5)).toEqual("Buzz");
    });

    it("should return 'Buzz' for n = 10", () => {
      expect(internal(10)).toEqual("Buzz");
    });
  });

  describe("If n is a multiple of 3 and 5, return 'FizzBuzz'", () => {
    it("should return 'FizzBuzz' for n = 3 * 5", () => {
      expect(internal(3 * 5)).toEqual("FizzBuzz");
    });

    it("should return 'FizzBuzz' for n = 3 * 5 * 2", () => {
      expect(internal(3 * 5 * 2)).toEqual("FizzBuzz");
    });
  });
});

describe("Test of FizzBuzz()", function () {
  it("FizzBuzz(1) should return ['1']", function () {
    expect(FizzBuzz(1)).toEqual(["1"]);
  });

  it("FizzBuzz(2) should return ['1', '2']", function () {
    expect(FizzBuzz(2)).toEqual(["1", "2"]);
  });

  it("FizzBuzz(10) should return...", function () {
    expect(FizzBuzz(10)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]);
  });
});
