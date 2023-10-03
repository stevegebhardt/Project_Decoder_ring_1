// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "hello";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "hello";
      const alphabet = "tooshort";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "hello";
      const alphabet = "aaadefghijklmnopqrstuvwxyz";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "hello";
      const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "itkkg";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "hello";
      const alphabet = "qwertyu.oplkjhgfdsazxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = ".tkkg";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "hello world";
      const alphabet = "qwertyu.oplkjhgfdsazxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = ".tkkg vgskr";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "yp ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });
  });
});
