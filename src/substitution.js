// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function substitution(input, cipher, encode = true) {
    // your solution code here

    //guard clause for 26 character cipher and missing cipher
    if (!cipher || cipher.length !== 26) return false;

    //guard clause to check that each character in cipher is unique
    for (let i = 0; i < cipher.length; i++) {
      for (let z = 0; z < cipher.length; z++) {
        if (i !== z && cipher[i] == cipher[z]) return false;
      }
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
