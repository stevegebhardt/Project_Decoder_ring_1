// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "he";
      const actual = polybius(message);
      const expected = "3251";

      expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jiggle";
      const actual = polybius(message);
      const expected = "424222221351";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "he he";
      const actual = polybius(message);
      const expected = "3251 3251";

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "32513251";
      const actual = polybius(message, false);
      const expected = "hehe";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "4432423352125413";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "3251 3251";
      const actual = polybius(message, false);
      const expected = "he he";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "2345 235134341122514";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
