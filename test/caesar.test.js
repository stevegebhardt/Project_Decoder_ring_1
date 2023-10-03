// Write your tests here!
//If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "marvel comics";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "marvel comics";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "marvel comics";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "hello";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "khoor";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is with a positive shift", () => {
      const message = "my son.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "pb vrq.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "My Son";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "pb vrq";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "zaney";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "cdqhb";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "hello";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "ebiil";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "ebiil";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "hello";

      expect(actual).to.equal(expected);
    });

    it("should decode and leaves spaces and other symbols as is", () => {
      const message = "pb vrq.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "my son.";

      expect(actual).to.equal(expected);
    });

    it("should decode and ignore capital letters", () => {
      const message = "pB Vrq";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "my son";

      expect(actual).to.equal(expected);
    });

    it("should decode and appropriately handle letters at the end of the alphabet", () => {
      const message = "cdqhb";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "zaney";

      expect(actual).to.equal(expected);
    });
  });
});
